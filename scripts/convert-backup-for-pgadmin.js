/**
 * Converts a PostgreSQL dump that uses COPY ... FROM stdin into INSERT statements
 * so it can be run in pgAdmin Query Tool (which doesn't support COPY stdin).
 *
 * Usage: node scripts/convert-backup-for-pgadmin.js [input.sql] [output.sql]
 * Default: backup/cloud_mlm_backup_20260203_114913.sql -> backup/cloud_mlm_backup_pgadmin.sql
 */

const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const defaultInput = path.join(projectRoot, 'backup', 'cloud_mlm_backup_20260203_114913.sql');
const defaultOutput = path.join(projectRoot, 'backup', 'cloud_mlm_backup_pgadmin.sql');

const inputPath = process.argv[2] || defaultInput;
const outputPath = process.argv[3] || defaultOutput;

const content = fs.readFileSync(inputPath, 'utf8');
const lines = content.split(/\r?\n/);

const copyRegex = /^COPY (public\.\w+) \((.*)\) FROM stdin;$/;
const out = [];

let i = 0;
while (i < lines.length) {
  const line = lines[i];
  // Skip psql meta-commands (not valid in pgAdmin Query Tool)
  if (/^\\(un)?restrict\s/.test(line)) {
    i++;
    continue;
  }
  const copyMatch = line.match(copyRegex);
  if (copyMatch) {
    const table = copyMatch[1];
    const cols = copyMatch[2];
    i++;
    const rows = [];
    while (i < lines.length && lines[i] !== '\\.' && lines[i].trim() !== '\\.') {
      rows.push(lines[i]);
      i++;
    }
    if (i < lines.length) i++; // skip \.

    // Convert each row to INSERT (batch per table to avoid huge statements)
    const BATCH = 50;
    for (let b = 0; b < rows.length; b += BATCH) {
      const batch = rows.slice(b, b + BATCH);
      const valuesList = batch.map((row) => {
        const cells = splitCopyRow(row);
        const values = cells.map((cell) => {
          if (cell === '\\N' || cell === null) return 'NULL';
          let s = String(cell);
          // Fix jsonb: only unescape structural quotes (array/object boundaries), not quotes inside string content (e.g. id="1")
          if ((s.startsWith('[\"') || s.startsWith('{\"')) && s.indexOf('\\"') !== -1) {
            s = s
              .replace(/(\[)\\\"/g, '$1"')   // [\" -> ["
              .replace(/(\{)\\\"/g, '$1"')   // {\" -> {"
              .replace(/,\\\"/g, ',"')       // ,\" -> ,"
              .replace(/\\\"\]/g, '"]')      // \"] -> "]
              .replace(/\\\"\}/g, '"}');     // \"} -> "}
          }
          return "'" + s.replace(/'/g, "''") + "'";
        });
        return '(' + values.join(', ') + ')';
      });
      out.push(`INSERT INTO ${table} (${cols}) VALUES ${valuesList.join(',\n  ')};`);
    }
    continue;
  }
  out.push(line);
  i++;
}

function splitCopyRow(row) {
  const result = [];
  let cell = '';
  let i = 0;
  while (i < row.length) {
    if (row[i] === '\\') {
      if (row[i + 1] === 'N') {
        result.push('\\N');
        cell = '';
        i += 2;
        continue;
      }
      if (row[i + 1] === 't') {
        cell += '\t';
        i += 2;
        continue;
      }
      if (row[i + 1] === 'n') {
        cell += '\n';
        i += 2;
        continue;
      }
      if (row[i + 1] === '\\') {
        cell += '\\';
        i += 2;
        continue;
      }
      cell += row[i];
      i++;
    } else if (row[i] === '\t') {
      // After \N we have cell=''; don't push that as an extra column
      if (result.length > 0 && result[result.length - 1] === '\\N' && cell === '') {
        cell = '';
      } else {
        result.push(cell);
        cell = '';
      }
      i++;
    } else {
      cell += row[i];
      i++;
    }
  }
  if (result.length > 0 && result[result.length - 1] === '\\N' && cell === '') {
    // trailing \N: don't add extra empty cell
  } else {
    result.push(cell);
  }
  return result;
}

fs.writeFileSync(outputPath, out.join('\n'), 'utf8');
console.log('Converted:', inputPath);
console.log('Output:  ', outputPath);
console.log('Open', path.basename(outputPath), 'in pgAdmin Query Tool and Execute (F5).');
