const fs = require('fs');
const pngBuf = fs.readFileSync('d:/sembako indorapet/images/indorapet_logo.png');
const b64 = pngBuf.toString('base64');

const svgContent = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   width="488"
   height="166"
   viewBox="0 0 488 166"
   version="1.1"
   id="indorapet-logo"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:xlink="http://www.w3.org/1999/xlink">
  <image
     width="488"
     height="166"
     preserveAspectRatio="xMidYMid meet"
     xlink:href="data:image/png;base64,${b64}" />
</svg>
`;

fs.writeFileSync('d:/sembako indorapet/images/indorapet_logo.svg', svgContent);
fs.writeFileSync('d:/sembako indorapet/images/indomaret_logo.svg', svgContent);
console.log('Updated both SVG files successfully!');
