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
    aux = aux + `<li>${requests[i].name} ${request[i].text}</li>`;
  }

  let requestList = document.getElementById("request-list");

  requestList.innerHTML = aux;
}


function listenToEvents() {
  let webForm = document.getElementById("footer-form");
  webForm.addEventListener("submit", addRequestToArray);
}

function addRequestToArray(event) {
  event.preventDefault();

  let requestName = event.target["user-name"].value;
  let requestText = event.target["request-text"].value;

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