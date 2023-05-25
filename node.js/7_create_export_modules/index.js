// const result = require("./7_create_export_modules")

// console.log(`Add Result is : ${result.add1(5,5)} and name is ${result.name1}`);

const {add, name} = require("./7_create_export_modules")

console.log(add(5,7));
console.log(name);
