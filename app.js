let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", function (event) {
  event.stopPropagation;
  console.log("Div was clkicked !");
});

ul.addEventListener("click", function (event) {
  event.stopPropagation;
  console.log("ul was clkicked !");
});

lis.addEventListener("click", function (event) {
  event.stopPropagation;
  console.log("li was clkicked !");
});
