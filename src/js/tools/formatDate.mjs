/**
 *
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
 * Inspiration: https://www.educative.io/answers/how-to-create-a-countdown-timer-using-javascript
 * @param {string} listingEndDate - End date from api
 * @returns - time left before bid ends
 */
export function countDownDate(listingEndDate) {
  const countDownDate = new Date(endTime(listingEndDate)).getTime();

  function timer() {
    const currentTime = new Date().getTime();

    const timeLeft = countDownDate - currentTime;
    // xs

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

    const timeOutput = `${days}d ${hours}h ${minutes}m left`;

    console.log(timeOutput);
    return timeOutput;
  }
  timer();
  setInterval(timer, 60000);
}

/**
 *
 * @param {string} timeBidCreated | a time string
 * @returns time in the form nn:nn;
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
