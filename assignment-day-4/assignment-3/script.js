document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("myButton");
  const counter = document.querySelector(".counter");

  // Throttle function
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

  // Increment function
  const incrementCounter = () => {
    counter.textContent = parseInt(counter.textContent) + 1;
    console.log("Button Clicked!");
  };

  // Apply throttling to the increment function
  const throttledIncrement = throttle(incrementCounter, 1000); // 1000ms = 1 second

  button.addEventListener("click", throttledIncrement);
});
