const os = require("os")
console.log(os.arch());    // tells about system bit like 32bit or 64 bit arch mean archetecture

const freeRamMemory = os.freemem();
console.log(`Free Ram Memory in bytes ${freeRamMemory}`); // it gives us free ram momory in bytes 

console.log(`Free ram memory in GB ${freeRamMemory / 1024/ 1024 / 1024}`);  // Convert bytes free ram momory to GB


const totalRamMemory = os.totalmem();
console.log(`Total Ram Memory in bytes ${totalRamMemory}`); // it gives us total ram momory in bytes 

console.log(`Total ram memory in GB ${totalRamMemory / 1024/ 1024 / 1024}`);  // Convert bytes total ram momory to GB


// To know Host name
console.log(os.hostname());

// To know your platform on which u working on.
console.log(os.platform());

// To know ur operating system
console.log(os.type());