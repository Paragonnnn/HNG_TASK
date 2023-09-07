const date = document.getElementById('date')
const time = document.getElementById('time')

let today
const new_date = new Date()
const current_date = new_date.getUTCDay()
const hours = new_date.getUTCHours()
const mins = new_date.getUTCMinutes()
if (mins < 10) {
  mins = `0${mins}`
}
const seconds = new_date.getUTCSeconds()

time.innerHTML = `${hours}:${mins}`


switch (current_date) {
  case 0:
    today = "Sunday";
    break;
  case 1:
    today = "Monday";
    break;
  case 2:
    today = "Tuesday";
    break;
  case 3:
    today = "Wednesday";
    break;
  case 4:
    today = "Thursday";
    break;
  case 5:
    today = "Friday";
    break;
  case 6:
    today = "Saturday";
    break;
}
date.innerHTML = `${today}`