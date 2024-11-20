let options = {
  root: null,
  rootMargin: "100px 0px 0px 0px",
  threshold: 1,
};
let observer = new IntersectionObserver(animate, options);
let target = document.querySelectorAll(".box");
target.forEach((box) => {
  observer.observe(box);
});

function handleRotateOnce(entry, observer) {
  entry.target.classList.add("animate");
  observer.unobserve(entry.target);
}

function handleRotateEveryTime(entry) {
  entry.target.classList.add("animate");
  entry.target.addEventListener("animationend", function handleAnimationEnd() {
    entry.target.classList.remove("animate");
    entry.target.removeEventListener("animationend", handleAnimationEnd);
  });
}

function animate(entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    if (entry.target.classList.contains("rotate-once")) {
      handleRotateOnce(entry, observer);
    } else if (entry.target.classList.contains("rotate-every-time")) {
      handleRotateEveryTime(entry);
    }
  });
}
