import * as fs from 'fs';
import * as path from 'path';

async function checkBackupDemoData() {
  const backupDir = path.join(process.cwd(), 'backup');
  const files = fs.readdirSync(backupDir)
    .filter(f => f.endsWith('.sql'))
    .map(f => ({
      name: f,
      path: path.join(backupDir, f),
      mtime: fs.statSync(path.join(backupDir, f)).mtime
    }))
    .sort((a, b) => b.mtime.getTime() - a.mtime.getTime());

  console.log('Checking backup files for demo_items data...\n');

  for (const file of files) {
    console.log(`\n${file.name}:`);
    console.log(`Last modified: ${file.mtime.toISOString()}`);

    const content = fs.readFileSync(file.path, 'utf-8');
    const copyMatch = content.match(/COPY\s+public\.demo_items[^;]+;/i);

    if (!copyMatch) {
      console.log('  No COPY statement found');
      continue;
    }

    // Find data section
    const copyStartIndex = content.indexOf(copyMatch[0]) + copyMatch[0].length;
    const dataEndPattern = /\\\./;
    const dataEndMatch = content.substring(copyStartIndex).match(dataEndPattern);

    if (!dataEndMatch) {
      console.log('  No data end marker found');
      continue;
    }

    const dataSection = content.substring(copyStartIndex, copyStartIndex + dataEndMatch.index);
    const lines = dataSection.split('\n').filter(line => line.trim() && !line.startsWith('--'));

    // Count English records
    const englishLines = lines.filter(line => {
      // Check if line contains 'en' locale (tab-separated, locale is usually around position 2-3)
      const parts = line.split('\t');
      return parts.some(p => p.trim() === 'en' || p.trim() === "'en'" || p.trim() === '"en"');
    });

    console.log(`  Total rows: ${lines.length}`);
    console.log(`  English rows: ${englishLines.length}`);

    if (englishLines.length > 0) {
      console.log(`  ✓ Has English demo data!`);
      // Show first few English records
      console.log(`  Sample (first English record):`);
      const firstEnglish = englishLines[0];
      const parts = firstEnglish.split('\t');
      if (parts.length > 0) {
        console.log(`    ID: ${parts[0]}`);
        if (parts.length > 10) {
          // Try to find title field (might be in different positions)
          console.log(`    Title field (approx): ${parts.slice(2, 5).join(' | ')}`);
        }
      }
    } else {
      console.log(`  ✗ No English demo data`);
    }
  }
}

checkBackupDemoData()
  .catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  });
