//add text

let button = document.getElementById("button");
button.addEventListener("click", function () {
  let value = document.getElementById("input").value;
  let div = document.createElement("div");
  div.innerText = value;
  document.body.appendChild(div);
});

//submit form

let form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let firstName = form.firstName.value;
  let lastName = form.lastName.value;

  let div = document.createElement("div");
  div.innerText = `First name: ${firstName} \n Last name: ${lastName}`;
  document.body.appendChild(div);
});
