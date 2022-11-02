//if condition
const x = 10; const y = "10"
if (x === y) {
    console.log("x is 10")
} else {
    console.log("x is not 10")
}

//Ternary operator
const color = x > 9 ? 'red' : 'blue'
console.log(color)

//switch
const colors = "blue"
switch(colors){
    case('red'):
    console.log("color is red")
    break
    case("blue"):
    console.log("color is blue")
    break
    default:
        console.log("color is not red or blue")
        break
}


//funtions

function addnumbers(num1,num2){
    console.log(num1+num2)
}

addnumbers(4,5)

function addnumbersr(num1,num2){
    return num1+num2
}
console.log(addnumbersr(5,8))

const addnumbersa = (num1,num2)=>{
    return num1+num2
}
console.log(addnumbersa(3,2))


