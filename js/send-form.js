let requests = [
  {
    name: "Cesvic",
    request: "Drums"
  },
  {
    name: "Cesvic",
    request: "Cymbals"
  },
  {
    name: "Cesvic",
    request: "Extras"
  },
];

function showRequests() {
  let aux = "";

  for (let i = 0; i < requests.length; i++) {
    aux += `<li>${requests[i].name + ":"} ${requests[i].request}</li>`;
  }

  let requestList = document.getElementById("request-list");

  requestList.innerHTML = aux;
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
  let name = e.target["user-name"].value.trim();
  let surname = e.target["user-surname"].value.trim();
  let mail = e.target["user-mail"].value.trim();
  let request = e.target["request-question"].value.trim();

  document.getElementById("warning-name").textContent = "";
  document.getElementById("warning-surname").textContent = "";
  document.getElementById("warning-mail").textContent = "";
  document.getElementById("warning-request").textContent = "";

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
    name: requestName,
    request: requestText
  }

  requests.push(newRequest);

  showRequests();
}

listenToEvents();
showRequests();



//Acordarse del JSON