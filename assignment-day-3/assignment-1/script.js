function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // Update the date format
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  const date = now.toLocaleDateString(undefined, dateOptions);

  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
  document.getElementById("date").textContent = date;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to display the clock immediately
