const fs = require('fs');
const path = require('path');

// Path to the 'out' directory (where the exported site is)
const filePath = path.join(__dirname, 'out', '.nojekyll');

// Create the '.nojekyll' file
fs.writeFileSync(filePath, '');
console.log('.nojekyll file created successfully');
