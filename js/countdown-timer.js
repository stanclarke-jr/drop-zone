import { dayInMs, hourInMs, minuteInMs, secondInMs} from "./helpers.js";

const daysEl = document.querySelectorAll('#days span');
const hoursEl = document.querySelectorAll('#hours span');
const minutesEl = document.querySelectorAll('#minutes span');
const secondsEl = document.querySelectorAll('#seconds span');

const days = 13;
const hours = 8;
const minutes = 12;
const seconds = 5;

// Calculate total duration in ms - uses calculations in the helper.js
const daysInMs = dayInMs * `${days}`;
const hoursInMs = hourInMs * `${hours}`
const minutesInMs = minuteInMs * `${minutes}`
const secondsInMs = secondInMs * `${seconds}`;
const duration = daysInMs + hoursInMs + minutesInMs + secondsInMs;

// Determine target date
const targetDate = Date.now() + new Date(duration).getTime();

function displayTimeleft(timeLeft) {
  // Convert above ms into days, hours, minutes & seconds left
  let daysLeft = Math.floor(timeLeft / dayInMs);
  let hoursLeft = Math.floor(timeLeft % dayInMs / hourInMs);
  let minutesLeft = Math.floor(timeLeft % hourInMs / minuteInMs);
  let secondsLeft = Math.floor(timeLeft % minuteInMs / secondInMs);

  // Add leading `0`s & split string to display in individual spans
  // daysLeft < 100 ? daysLeft = `0${daysLeft}` : daysLeft; // If using 3-digit year
  daysLeft < 10 ? daysLeft = `0${daysLeft}`.split('') : daysLeft; // Add additional `0` using 3-digit year
  daysLeft >= 10 ? daysLeft = `${daysLeft}`.split('') : daysLeft;
  hoursLeft < 10 ? hoursLeft = `0${hoursLeft}`.split('') : hoursLeft;
  hoursLeft >= 10 ? hoursLeft = `${hoursLeft}`.split('') : hoursLeft;
  minutesLeft < 10 ? minutesLeft = `0${minutesLeft}`.split('') : minutesLeft;
  minutesLeft >= 10 ? minutesLeft = `${minutesLeft}`.split('') : minutesLeft;
  secondsLeft < 10 ? secondsLeft = `0${secondsLeft}`.split('') : secondsLeft;
  secondsLeft >= 10 ? secondsLeft = `${secondsLeft}`.split('') : secondsLeft;

  // Display the result in each individual span element
  daysEl[0].textContent = daysLeft[0];
  daysEl[1].textContent = daysLeft[1];
  // daysEl[2].textContent = daysLeft[2]; // If using 3-digit year
  hoursEl[0].textContent = hoursLeft[0];
  hoursEl[1].textContent = hoursLeft[1];
  minutesEl[0].textContent = minutesLeft[0];
  minutesEl[1].textContent = minutesLeft[1];
  secondsEl[0].textContent = secondsLeft[0];
  secondsEl[1].textContent = secondsLeft[1];
}

// Countdown timer to run every second
const countdown = setInterval(() => {
  // Determine the amount of time left in ms
  const timeLeft = targetDate - Date.now() ;
  // Stop timer when it has reached `0`
  if (timeLeft < 0) {
    clearInterval(countdown);
    return;
  }
  // Display it on the page
  displayTimeleft(timeLeft);
}, 1000);

