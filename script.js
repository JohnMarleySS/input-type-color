var colorWell;
var defaultColor = "#0000ff";

window.addEventListener("load", startup, false);

function startup() {
  colorWell = document.querySelector("#corzinha");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", updateFirst, false);
}
function updateFirst(event) {
  var p1 = document.querySelector(".back1");
  var p2 = document.querySelector(".back2");
  var p3 = document.querySelector(".back3");
  
  if (p1) {
    p1.style.backgroundColor = event.target.value;
  }
  if (p2) {
    p2.style.backgroundColor = event.target.value;
  }
  if (p3) {
    p3.style.backgroundColor = event.target.value;
  }
}
