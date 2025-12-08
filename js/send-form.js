let editingCard = null;
let requests = JSON.parse(localStorage.getItem("request")) || [
  {
    name: "Name: " + "Cesvic",
    request: "Request: " + "Drums"
  },
  {
    name: "Name: " + "Cesvic",
    request: "Request: " + "Cymbals"
  },
  {
    name: "Name: " + "Cesvic",
    request: "Request: " + "Extras"
  },
];

function showRequests() {
  let aux = "";

  for (let i = 0; i < requests.length; i++) {
    aux += `
    <li>
    <span>${requests[i].name}</span>
    <span> ${requests[i].request}</span>

    <button class="edit-button" data-index="${i}">Edit</button>
    <button class="delete-button" data-index="${i}">Delete</button>
    </li>
    `;
  }

  let requestList = document.getElementById("request-cards");

  requestList.innerHTML = aux;

  addDeleteListeners();
  addEditListeners();
}

function addDeleteListeners() {
  const deleteButton = document.querySelectorAll(".delete-button");

  deleteButton.forEach(button => {
    button.addEventListener("click", function () {
      const index = this.dataset.index;

      requests.splice(index, 1);
      localStorage.setItem("request", JSON.stringify(requests));
      showRequests();
    });
  });
}

function addEditListeners() {
  const editButton = document.querySelectorAll(".edit-button");

  editButton.forEach(button => {
    button.addEventListener("click", function () {
      const index = this.dataset.index;
      editingIndex = index;


      document.getElementById("user-name").value = requests[index].name.replace("Name: ", "");
      document.getElementById("user-request").value = requests[index].request.replace("Request: ", "");
    });
  });
}

function listenToEvents() {
  let webForm = document.getElementById("web-form");
  webForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (validateForm(e)) {
      addRequestToArray(e);
    }
  });
}

function validateForm(e) {
  //Comprueba que el formulario no se pueda rellenar solo con espacios
  let name = e.target["user-name"].value.trim();
  let surname = e.target["user-surname"].value.trim();
  let mail = e.target["user-mail"].value.trim();
  let request = e.target["request-question"].value.trim();

  document.getElementById("warning-name").textContent = "";
  document.getElementById("warning-surname").textContent = "";
  document.getElementById("warning-mail").textContent = "";
  document.getElementById("warning-request").textContent = "";

  //Comprueba si algún campo del formulario está vacío

  let valid = true;

  if (name === "") {
    document.getElementById("warning-name").textContent = "Your name is required";
    valid = false;
  }
  if (surname === "") {
    document.getElementById("warning-surname").textContent = "Your surname is required";
    valid = false;
  }
  if (mail === "") {
    document.getElementById("warning-mail").textContent = "Your mail is required";
    valid = false;
  }
  if (request === "") {
    document.getElementById("warning-request").textContent = "A request is required";
    valid = false;
  }

  return valid;
}

function addRequestToArray(event) {
  event.preventDefault();

  let requestName = event.target["user-name"].value;
  let requestText = event.target["request-question"].value;

  let newRequest = {
    name: "Name: " + requestName,
    request: "Request: " + requestText
  }

  if (editingIndex !== null) {
    requests[editingIndex] = newRequest;
    editingIndex = null;
  } else {
    requests.push(newRequest);
  }

  localStorage.setItem("request", JSON.stringify(requests));

  showRequests();
  event.target.reset();
}

document.getElementById("reset-local-storage").addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});

listenToEvents();
showRequests();
