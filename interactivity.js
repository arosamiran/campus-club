let sphere = document.querySelector("#sphere");
sphere.addEventListener("mouseenter", changeColor());

function changeColor() {
  sphere.setAttribute("color", "#0f0");
  setTimeout(function() {
    sphere.setAttribute("color", "#00f")
  }, 2000);
}