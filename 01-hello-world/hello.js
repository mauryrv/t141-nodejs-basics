
function getName(){
 return process.argv[2]
}

function sayHello(name=''){
console.log(`Hello ${name}!`) //acento de crase no lugar de aspas simles para usar
//console.log('Hello %s!', name) //usando aspas simples
}
sayHello(getName())
