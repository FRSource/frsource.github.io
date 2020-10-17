const fs = require('fs');
const bodyScript = fs.readFileSync('./src/bodyScript.js').toString();
module.exports = r => '<script>' + bodyScript + '</script>' + r;
