const fs = require('fs');
const path = require('path');

// Function to recursively find all files
function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and .next directories
      if (file !== 'node_modules' && file !== '.next' && !file.startsWith('.')) {
        findFiles(filePath, fileList);
      }
    } else if (
      file.endsWith('.tsx') || 
      file.endsWith('.ts') || 
      file.endsWith('.js') || 
      file.endsWith('.json')
    ) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to replace URLs in a file
function replaceUrls(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Replace / with /
    content = content.replace(/https:\/\/cloudmlmsoftware\.com\//g, '/');
    // Replace / with /
    content = content.replace(/https:\/\/www\.cloudmlmsoftware\.com\//g, '/');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Updated: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
const frontendDir = path.join(__dirname, '..');
const files = findFiles(frontendDir);

console.log(`Found ${files.length} files to process...\n`);

files.forEach(replaceUrls);

console.log('\n✓ URL replacement complete!');
