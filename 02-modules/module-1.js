
let encapsulatedVariables = 'teste'
function sayHello(name=''){
console.log(`Hi ${name}!`)
}

function getEncapsulatedVar(){
    return encapsulatedVariables
}
//expose method ssayHello
module.exports ={
sayHello,
encapsulatedVariables
} 