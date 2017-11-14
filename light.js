let box = document.querySelector("#box");
let sphere = document.querySelector("#change");
box.addEventListener("mouseenter", createAnimation());

function createAnimation() {
  let animation = document.createElement("a-animation");
  animation.setAttribute("from", {
    x: 0,
    y: 0,
    z: 0
  });
  animation.setAttribute("to", {
    x: 10,
    y: 5,
    z: 0
  });
  animation.setAttribute("dur", 100);
  animation.setAttribute("repeat", "indefinite");
  animation.setAttribute("direction", "alternate");

  sphere.appendChild(animation);
}