const fs = require("fs")

fs.writeFile("xyz.txt", "Shahil, Rakshandha", (err) => {

    console.log("File is Created");
    console.log(err);   //it print "null" because there is no error

})  //First it will check whether "xyz.txt" file exist or not if not then it will simply creates "xyz.txt" file and inside that file it will add "Shahil, Rakshandha".... if that file exist then it will simply remove all the content and add only new content that is "Shahil, Rakshandha". (here you want to add one more parameter named callback)

//if we want to add more content inside same file without delete any content
fs.appendFile("xyz.txt", ", Chourasia , Dey", (err) => {
    console.log("Data Append Sucessfully");
})

// if we want to read other file content

// let xyz = fs.readFile("xyz.txt")    //it will gives us buffer data which is nothing but binary digit data (<Buffer 41 70 70 6c 65 2c 20 62 61 6c 6c 2c 20 43 61 74 2c 20 44 6f 67>)
// console.log(xyz);

let xyz1 = fs.readFile("xyz.txt", "UTF-8", (err, response) => {

    console.log(`Data is ${response}`);

})   // Solve buffer data 
// console.log(`The Data is : ${xyz1}`);

// let org_data = xyz.toString();  // Solve buffer data alternate option
// console.log(org_data);


// rename the file
// fs.renameSync("xyz.txt", "rakshandha.txt")