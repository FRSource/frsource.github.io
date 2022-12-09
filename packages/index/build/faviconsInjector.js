const fs = require('fs');
const faviconsHTML = fs.readFileSync('../../public/html_code.html').toString();
module.exports = r =>
        faviconsHTML
            .replace(/[\n\r]/g, '') // remove new lines
            .replace(/rel="icon"/g, 'rel="alternate icon"') // make png icons "alternate" to set priority on the SVG icon
        + r;
