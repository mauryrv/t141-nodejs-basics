const fs = require('fs')


//dont do this
//const fileContent = fs.readFileSync('./students.txt','utf8')
//console.log(fileContent)


function printFileContent(error,data){
    if (error) {
        console.log('File not found!',error)
        return
    }
    console.log(data)
}
fs.readFile('./students.txt','utf8',printFileContent)