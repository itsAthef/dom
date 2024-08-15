let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let user = this.elements[0];
  let pass = this.elements[1];

  alert(`Hi ${user.value}, Your Password is set to ${pass.value}!`);
});
