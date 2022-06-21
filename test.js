const path = require('path');
const fs = require('fs');
const p = path.resolve(__dirname, './node_modules/xlsx-style/package.json');
fs.readFile(p, {}, (err, data) => {
  console.log(data);
  const option = JSON.parse(String(data));
  console.log(option);
  option.browser = {fs: false};
  fs.writeFile(p, JSON.stringify(option, null, 2), () => {});
});