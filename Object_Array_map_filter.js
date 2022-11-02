//Object Literals
const person = {
    firstName: "Gopika",
    lastName: "V",
    age: 23,
    hobbies: ['play', 'sleep', 'eat'],
    address: {
        Street: 'Mala',
        Place: 'Koottanad'
    }
}
person.email = "gopikav@gmail.com"
//console.log(person)

//Array Of Objects
const todos = [
    {
        id: 1,
        text: "bath",
        iscompleted: true
    },
    {
        id: 2,
        text: "walk",
        iscompleted: false
    },
    {
        id: 3,
        text: "study",
        iscompleted: false
    }
]
//map
const todotexts=todos.map(function(todo){
    return todo.text
})
//console.log(todotexts)

//map with arrow function

const todotextarrow = todos.map((todo)=>{
    return todo.text
})
console.log(todotextarrow)

//filter
const todocompleted=todos.filter(function(todo){
    return todo.iscompleted === true
}).map(function(todo){
    return todo.text
})
//console.log(todocompleted)

//loops

for(let i=0; i<10; i++){
 //   console.log(`for loop number: ${i}`)
}

todos.forEach((todo)=>{
    console.log(todo.text)
})