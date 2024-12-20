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

  del.addEventListener("click", () =>{
    const circle = document.createElement("small");
    circle.innerHTML = `<img src="./icons/warning-circle-filled.svg" alt="">`;
    div.prepend(circle);
    checkbox.remove("button");

    const btn = document.createElement("button");
    btn.innerHTML = `<img src="./icons/delete-small.svg" alt="">`;
    
    li.append(btn)
    span.textContent = "O item foi removido da lista"
    li.classList.replace("item", "alert")


    btn.addEventListener("click", () => {
     li.classList.replace("alert", "delet")
 })

}) 

}

input.addEventListener("change", () => {
 const inputIsValid = validateInput()
 if(inputIsValid) {
     input.content == ""
     input.classList.remove("danger")
     error.classList.replace("error", "delet")
     return
 }
})

button.addEventListener("click", () => addNewItem()) 

form.onsubmit = (event) => {
 event.preventDefault()

}
