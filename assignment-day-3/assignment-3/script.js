let container = document.getElementById("container");
Object.assign(container.style, {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

let wrapper = document.getElementById("wrapper");
Object.assign(wrapper.style, {
  width: "100%",
  height: "40vh",
  display: "flex",
  alignItems: "center",
});

let box = document.getElementById("box");
Object.assign(box.style, {
  backgroundColor: "red",
  color: "white",
  fontSize: "20px",
  fontWeight: "bold",
  width: "100px",
  height: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

let position = 0;
let direction = 1;
let speed = 1;

function animateBox() {
  position += direction * speed;
  box.style.transform = `translateX(${position}px)`;

  if (position + box.offsetWidth >= wrapper.offsetWidth || position <= 0) {
    direction *= -1;
  }

  requestAnimationFrame(animateBox);
}

animateBox();
