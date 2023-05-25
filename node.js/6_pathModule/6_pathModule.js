const path = require("path");
// console.log(`Path : ${path.dirname('C:/Users/kshah/OneDrive/Desktop/Node.js/6_pathModule.js')}`);
// console.log(`Extention : ${path.extname('C:/Users/kshah/OneDrive/Desktop/Node.js/6_pathModule.js')}`);
// console.log(`File Name : ${path.basename('C:/Users/kshah/OneDrive/Desktop/Node.js/6_pathModule.js')}`);
const parse = path.parse('C:/Users/kshah/OneDrive/Desktop/Node.js/6_pathModule.js');
console.log(parse); // it will give all the details 

const parse1 = path.parse('C:/Users/kshah/OneDrive/Desktop/Node.js/6_pathModule.js');
console.log(parse1.name);   // Give name only