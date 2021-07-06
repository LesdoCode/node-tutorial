const path = require("path");

console.log(path.sep);
console.log(path.sep);

const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

const baseName = path.basename(filePath);
console.log(baseName);
