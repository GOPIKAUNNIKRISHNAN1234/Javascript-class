// const form=document.getElementById("my-form")
// //console.log(form)
// const item = document.getElementsByClassName("item")
// //console.log(item)
// const htmlelement = document.querySelectorAll(".item")
// console.log(htmlelement)

const myForm = document.querySelector("#my-form")
const nameInput =document.querySelector("#name")
const emailInput =document.querySelector("#email")
const msg =document.querySelector(".Message")
const userList =document.querySelector("#users")

myForm.addEventListener("submit",onMySubmit)

function onMySubmit(e){
    e.preventDefault()
    if(nameInput.value === '' || emailInput.value === '') {
        // alert('Please enter all fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
    
        // Remove error after 3 seconds
        setTimeout(() => msg.remove(), 3000);
      } else {
        // Create new list item with user
        const li = document.createElement('li');
    
        // Add text node with input values
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
    
        // Add HTML
        // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;
    
        // Append to ul
        userList.appendChild(li);
    
        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
      }
}