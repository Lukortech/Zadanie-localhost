function getData() {
  const response = fetch("https://api.publicapis.org/entries");
  const data = response.then();
}

function store() {
  const brand = document.getElementById("Brand").value;
  const price = document.getElementById("Price").value;
  const key = document.getElementById("key").value;

  const localStorage = {
    brand: brand,
    price: price,
  };

  window.localStorage.setItem(key, JSON.stringify(localStorage));
}

function retrieveRecords() {
  const key = document.getElementById("retrieveKey").value;
  console.log("retrive records");
  const records = window.localStorage.getItem(key);
  const paragraph = document.createElement("p");
  const infor = document.createTextNode(records);
  paragraph.appendChild(infor);
  const element = document.getElementById("retrieve");
  element.appendChild(paragraph);
}

function removeItem() {
  const key = document.getElementById("removeKey").value;
  localStorage.removeItem(key);
  console.log("remove items");
}

function clearStorage() {
  localStorage.clear();
  console.log("clear records");
}

window.onload = function () {
  document.getElementById("Form").onsubmit = store;
  document.getElementById("clearButton").onclick = clearStorage;
  document.getElementById("removeButton").onclick = removeItem;
  document.getElementById("retrieveButton").onclick = retrieveRecords;
};

getData();
