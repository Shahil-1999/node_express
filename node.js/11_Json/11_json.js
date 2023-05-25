const obj = {
    name : "Shahil",
    stream : "MCA",
    roll_number : 504121011045,
    college_id : "GNIT/2021/0256",
    age : 24,
    college_name : "Gurunanak Institute of Technology, Kolkata"
};

// Convert it into JSON

// const convertJson = JSON.stringify(obj);
// console.log(convertJson);

// Again convert it into Object

// const convertObj = JSON.parse(convertJson);
// console.log(convertObj);


// Task

// 1: convert json 
// 2: add it to another File
// 3: read that file
// 4: again convert it into object


const fs = require('fs')
const biodata = {
    name : "shahil",
    surname: "Chourasia",
    age : 24
};
// json conversion
const json = JSON.stringify(biodata);
console.log(json);

// add it to another file
fs.writeFile("JsonFile.json", json, (err) => {
    console.log("File is created");
    console.log((err));
})

// read file
fs.readFile("jsonFile.json", "UTF-8", (err, response) =>{   // Whenever u read async file there has to be 2 parameters
    console.log(`Json format data: ${response}`);

    // Again convert it into object format
    const objformat = JSON.parse(json);
    console.log(objformat);
})

