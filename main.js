let inputArray = [];

const newReceiptForm = document.querySelector("#new-receipt");
const nameInput = document.querySelector("#name");
const dietInput = document.querySelector("#diet");
const preferenceInput = document.querySelector("#preference");
const inputBoxes = document.querySelector("#inputBoxes");
const readBtn = document.querySelector("#readBtn");
const output = document.querySelector("#output");

newReceiptForm.addEventListener("submit", createInput);
readBtn.addEventListener("click", displayInputs);

function createInput(event) {
  event.preventDefault();

  const name = nameInput.value;
  const diet = dietInput.value;
  const preference = preferenceInput.value;

  if (!name || !diet || !preference) {
    return;
  }

  const input = { name, diet, preference };

  inputArray.push(input);

  clearInputs();
  displayInputs();
}

function displayInputs() {
  output.innerHTML = "";

  inputArray.forEach((input, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <p>Name: <input type="text" value="${input.name}" id="diet${index}"</p>
      <p>Diet: <input type="text" value="${input.diet}" id="diet${index}" /></p>
      <p>Preference: <input type="text" value="${input.preference}" id="preference${index}" /></p>
      <button onclick="editInput(${index})">Edit</button>
      <button onclick="deleteInput(${index})">Delete</button>
    `;
    output.appendChild(div);
  });
}

function editInput(index) {
  const dietInput = document.querySelector(`#diet${index}`);
  const preferenceInput = document.querySelector(`#preference${index}`);

  const updatedInput = {
    name: inputArray[index].name,
    diet: dietInput.value,
    preference: preferenceInput.value,
  };

  inputArray[index] = updatedInput;

  displayInputs();
}

function deleteInput(index) {
  inputArray.splice(index, 1);

  displayInputs();
}

function clearInputs() {
  nameInput.value = "";
  dietInput.value = "";
  preferenceInput.value = "";
}






function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }