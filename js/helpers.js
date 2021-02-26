export const dayInMs = 1000 * 60 * 60 * 24;
export const hourInMs = 1000 * 60 * 60;
export const minuteInMs = 1000 * 60;
export const secondInMs = 1000;

export default function convertMS(milliseconds) {
  let days, hours, minutes, seconds;

  seconds = Math.floor(milliseconds / 1000);
  minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  hours = Math.floor(minutes / 60);
  minutes= minutes % 60;
  days = Math.floor(hours / 24);
  hours = hours % 24;

  return {
      days,
      hours,
      minutes,
      seconds,
  };
}

console.log(convertMS(1152725000));
