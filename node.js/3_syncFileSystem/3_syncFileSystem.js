const fs = require("fs")

fs.writeFileSync("abc.txt", "Apple, ball")  //First it will check whether "abc.txt" file exist or not if not then it will simply creates "abc.txt" file and inside that file it will add "Apple , ball".... if that file exist then it will simply remove all the content and add only new content that is "Apple, ball".

//if we want to add more content inside same file without delete any content
fs.appendFileSync("abc.txt", ", Cat, Dog")

// if we want to read other file content

// let xyz = fs.readFileSync("abc.txt")    //it will gives us buffer data which is nothing but binary digit data (<Buffer 41 70 70 6c 65 2c 20 62 61 6c 6c 2c 20 43 61 74 2c 20 44 6f 67>)
// console.log(xyz);

let xyz1 = fs.readFileSync("abc.txt", "UTF-8")   // Solve buffer data 
console.log(xyz1);

// let org_data = xyz.toString();  // Solve buffer data alternate option
// console.log(org_data);


// rename the file
// fs.renameSync("abc.txt", "apple.txt")