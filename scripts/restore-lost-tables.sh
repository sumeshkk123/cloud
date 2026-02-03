#!/bin/bash

# Script to restore contact_addresses, integrations, and connectors tables from backup
# Usage: ./scripts/restore-lost-tables.sh [backup_file]

set -e

BACKUP_FILE="${1:-backup/cloud_mlm_backup_20260124_094855.sql}"
RESTORE_FILE="backup/restore_lost_tables.sql"

echo "Extracting data from $BACKUP_FILE..."

# Create a Python script to extract the data
python3 << PYTHON_SCRIPT
import re
import sys

backup_file = "$BACKUP_FILE"
restore_file = "$RESTORE_FILE"

with open(backup_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Tables to restore
tables = ['contact_addresses', 'integrations', 'connectors']
output_sections = []

for table in tables:
    # Find the COPY statement
    pattern = rf'COPY public\.{re.escape(table)}.*?FROM stdin;(.*?)\\\.'
    match = re.search(pattern, content, re.DOTALL)
    
    if match:
        # Find the full COPY line
        copy_match = re.search(rf'COPY public\.{re.escape(table)}.*?FROM stdin;', content)
        if copy_match:
            copy_line = copy_match.group(0)
            data = match.group(1).strip()
            
            if data:  # Only add if there's actual data
                output_sections.append({
                    'table': table,
                    'copy_line': copy_line,
                    'data': data
                })
                print(f"Found data for {table}: {len(data)} characters")
            else:
                print(f"Warning: {table} has no data in backup")
    else:
        print(f"Warning: {table} not found in backup")

# Write restore file
with open(restore_file, 'w', encoding='utf-8') as f:
    f.write('-- Restore contact_addresses, integrations, and connectors tables\n')
    f.write('-- Generated from backup\n\n')
    
    if output_sections:
        f.write('-- Truncate existing data first\n')
        for section in output_sections:
            f.write(f'TRUNCATE TABLE public.{section["table"]} CASCADE;\n')
        f.write('\n')
        
        # Write COPY statements with data
        for section in output_sections:
            f.write(f'\n-- Restore {section["table"]}\n')
            f.write(section['copy_line'] + '\n')
            f.write(section['data'] + '\n')
            f.write('\\.\n')
    else:
        f.write('-- No data found to restore\n')
        f.write('-- The backup file may not contain data for these tables\n')

print(f"\nRestore file created: {restore_file}")
if output_sections:
    print(f"Found data for {len(output_sections)} table(s)")
    print("\nTo restore, run:")
    print(f"  psql $DATABASE_URL < {restore_file}")
else:
    print("\nWARNING: No data found in backup for these tables!")
    print("The tables may have been empty when the backup was created.")
PYTHON_SCRIPT

echo ""
echo "Done! Check $RESTORE_FILE for the restore script."
