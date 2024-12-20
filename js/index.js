const form = document.querySelector('form');
const button = document.querySelector('button');
const input = document.querySelector('input');
const validateInput = () => input.value.trim().length > 0;
const ul = document.querySelector('ul');
const error = document.getElementById("errormessage");

const addNewItem = () =>{
  const inputIsValid = validateInput()
  if(!inputIsValid){
    input.classList.add("danger");
    error.classList.replace("delet", "error");
    return;
  }
}