import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const date = Date.now();
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    time.start(selectedDates);
  },
};
flatpickr('input#datetime-picker', options);
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const timeDays = document.querySelector('[data-days]');

const timeHours = document.querySelector('[data-hours]');
const timeMinute = document.querySelector('[data-minutes]');
const timeSecond = document.querySelector('[data-seconds]');

const time = {
    timeId: null,
    isActive: false,
    
    start(currentTime) {
    if (currentTime[0] - date < 0) {
      clearTimeout(timeId);
      timeId = setTimeout(() => {
        alert('Please choose a date in the future');
      }, 2000);
    } else {
      setInterval(() => {
        const date1 = Date.now();
        const betweenTime1 = currentTime[0] - date1;

        zxc(convertMs(betweenTime1));
        function zxc({ days, hours, minutes, seconds }) {
          timeDays.textContent = `${days}`;
          timeHours.textContent = `${hours}`;
          timeMinute.textContent = `${minutes}`;
          timeSecond.textContent = `${seconds}`;
        }
      }, 1000);
    }
  },
};




const
// time.start();
// const zxc = new Date();
// const qwe = Date.now();
// setInterval(() => {

// console.log(zxc);c
// console.log(qwe);
// }, 2000);
