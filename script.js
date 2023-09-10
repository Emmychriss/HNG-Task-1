document.addEventListener("DOMContentLoaded", function () {
  // Get the elements by data-testid attributes
  const thisDay = document.querySelector('[data-testid="currentDayOfTheWeek"]');
  const currentUtcTIme = document.querySelector(
    '[data-testid="currentUTCTime"]'
  );

  // Defining a function that updates the current time and exact date
  function timeAndDataUpdate() {
    const thisDate = new Date();

    const weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const weekCurrentDay = weekDays[thisDate.getUTCDay()];

    thisDay.textContent = weekCurrentDay;

    // Display the current UTC time in milliseconds
    currentUtcTIme.textContent = currentDate.getTime();
  }

  // Immediate function call
  timeAndDataUpdate();

  // Calling setInterval to run after every 1000ms
  setInterval(timeAndDataUpdate, 1000);
});
