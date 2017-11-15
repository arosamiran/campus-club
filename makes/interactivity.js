let sphere = document.querySelector("#sphere");

sphere.addEventListener("click", function () {
  sphere.setAttribute(
    "geometry", {
      primitive: "box",
      height: 1,
      width: 2,
      depth: 0.5,
      color: "#f00"
    }
  )
});

// You can also change multiple attributes