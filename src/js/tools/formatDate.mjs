/**
 * Function that converts an api date to readable format
 * @param {string} listingEndDate - End date from api
 * @returns - formatted API date
 * @example
 * endTime("2023-05-24T00:00:00.000Z")
 * returns: "May 24, 2023, 02:00:00"
 */
export function endTime(listingEndDate) {
  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  };

  let date = new Intl.DateTimeFormat("en-US", options).format(
    new Date(listingEndDate)
  );

  console.log(date);
  return date;
}

/**
 * Counts down the time left between the current date and the selected end date.
 * Inspiration:
 * https://www.educative.io/answers/how-to-create-a-countdown-timer-using-javascript
 * https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/
 *
 * @param {string} endTime | Enddate of listing (product from endTime())
 * @returns time remaining of listing in total time, days, hours and minutes
 */
export function getRemainingTime(endTime) {
  const totalTime = Date.parse(endTime) - Date.parse(new Date());
  const minutes = Math.floor((totalTime / 1000 / 60) % 60);
  const hours = Math.floor((totalTime / (1000 * 60 * 60)) % 24);
  const days = Math.floor(totalTime / (1000 * 60 * 60 * 24));

  return {
    totalTime,
    days,
    hours,
    minutes,
  };
}

/**
 * Initializes an interval function which updates time left of listing every minute
 * @param {string} id | id string to a div containing three span elements with classes "days", "hours", "minutes"
 * @param {string} endTime | Enddate of listing (product from endTime())
 */
export function initializeTime(id, endTime) {
  const time = document.getElementById(id);
  const daysSpan = time.querySelector(".days");
  const hoursSpan = time.querySelector(".hours");
  const minutesSpan = time.querySelector(".minutes");

  function updateTime() {
    const t = getRemainingTime(endTime);
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = t.hours;
    minutesSpan.innerHTML = t.minutes;

    if (t.totalTime <= 0) {
      clearInterval(timeInterval);
    }
  }
  updateTime();
  let timeInterval = setInterval(updateTime, 60000);
}

/**
 * Gives the bid time for a specific bid in day, month and time
 * @param {string} timeBidCreated | a time string
 * @returns time in the form dd. month, nn:nn;
 */
export function bidTime(timeBidCreated) {
  const options = {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "short",
    hour12: false,
  };

  let date = new Intl.DateTimeFormat("en-US", options).format(
    new Date(timeBidCreated)
  );

  return date;
}
