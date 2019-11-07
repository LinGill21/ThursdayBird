const readline = require("readline-sync")
let name =readline.question("who are you? ")
let height = readline.questionInt("how tall are you? ")
console.log("pleased to meet " +name)

if (height>7){
    console.log("basketball")
}
else{
    console.log("rugbuy")
}