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

  const li = document.createElement("li");

  li.classList.add("item");
  li.style.marginBottom = `0.75rem`;

  const div = document.createElement("div");
  const checkbox = document.createElement("input");

  ckeckbox.setAttribute("tyle", "checkbox");

  const span = document.createElement("span");
  span.textContent = input.value;

  const del = document.createElement("button");
  del.innerHTML = `<img src="./icons/Frame-3.svg" alt="">`;

  div.append(checkbox, span);
  li.prepend(div, del);
  ul.append(li);

  input.value = "";
}