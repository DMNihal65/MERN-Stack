const fs = require('fs');

const directoryPath = './files';

try {
  // Get an array of all file names in the directory
  const files = fs.readdirSync(directoryPath);

  // Log the file names
  console.log('Files in the directory:', files);
} catch (err) {
  // Handle errors, such as if the directory doesn't exist
  console.error('Error reading directory:', err);
}