//MAP

const countries = new Map([
  ["Russia", "Moscow"],
  ["USA", "Washington D.C."],
  ["France", "Paris"],
  ["Germany", "Berlin"],
]);

const tableBody = document.getElementById("table-body");

function renderTable() {
  tableBody.innerHTML = "";
  for (let country of countries.keys()) {
    const row = document.createElement("tr");
    const countryCell = document.createElement("td");
    const capitalCell = document.createElement("td");
    const actionsCell = document.createElement("td");
    const deleteButton = document.createElement("button");

    countryCell.textContent = country;
    capitalCell.textContent = countries.get(country);
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      countries.delete(country);
      renderTable();
    });
    actionsCell.appendChild(deleteButton);

    row.appendChild(countryCell);
    row.appendChild(capitalCell);
    row.appendChild(actionsCell);

    tableBody.appendChild(row);
  }
}
renderTable();

const addRowButton = document.getElementById("add-row");
addRowButton.addEventListener("click", () => {
  const country = prompt("Enter country name");
  const capital = prompt("Enter capital name");
  if (country && capital) {
    countries.set(country, capital);
    renderTable();
  }
});

//SET

const input = document.querySelector("#input");
const addButton = document.querySelector("#add-button");
const list = document.querySelector("#list");

const set = new Set();

addButton.addEventListener("click", () => {
  const value = input.value;
  if (value) {
    set.add(value);
    input.value = "";
    renderList();
  }
});

function renderList() {
  list.innerHTML = "";
  for (const item of set) {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    list.appendChild(listItem);
  }
}
