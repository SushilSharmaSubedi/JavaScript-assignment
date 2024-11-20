document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("myButton");
  const counter = document.querySelector(".counter");

  function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function () {
      const context = this;
      const args = arguments;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function () {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  }

  const incrementCounter = () => {
    counter.textContent = parseInt(counter.textContent) + 1;
    console.log("Button Clicked!");
  };

  const throttledIncrement = throttle(incrementCounter, 1000);

  button.addEventListener("click", throttledIncrement);
});
