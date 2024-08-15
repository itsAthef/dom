let inp = document.querySelector("input");

inp.addEventListener("keydown", function (event) {
  console.log(event.code);
  if (event.code === "ArrowUp") {
    console.log("Character Moves Forward");
  } else if (event.code === "ArrowDown") {
    console.log("Character Moves Backward");
  } else if (event.code === "ArrowLeft") {
    console.log("Character Moves Left");
  } else if (event.code === "ArrowRight") {
    console.log("Character Moves Right");
  }
});
