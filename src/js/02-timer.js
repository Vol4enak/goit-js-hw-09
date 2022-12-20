import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const inputTarget = document.querySelector('input#datetime-picker');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const backCounter = new Timer(selectedDates);
    backCounter.start();
    btnStart.addEventListener('click', backCounter.someFun.bind(backCounter));
  },
};

flatpickr(inputTarget, options);

const date = Date.now();
const btnStart = document.querySelector('button[data-start]');
  btnStart.setAttribute('disabled', true);
const timeDays = document.querySelector('[data-days]');
const timeHours = document.querySelector('[data-hours]');
const timeMinute = document.querySelector('[data-minutes]');
const timeSecond = document.querySelector('[data-seconds]');

class Timer {
  constructor(selectedDates) {
    this.timeId = null;
    this.selectedDates = selectedDates;
  }

  start() {
    if (this.selectedDates[0] - date < 0) {
      clearTimeout(this.timeId);
      this.timeId = setTimeout(() => {
        alert('Please choose a date in the future');
      }, 2000);
    } else {
      btnStart.removeAttribute('disabled', true);
    }
  }
  someFun() {
    inputTarget.setAttribute('disabled', true);
      btnStart.setAttribute('disabled', true);
    this.timeId = setInterval(() => {
      const date1 = Date.now();
      const betweenTime = this.selectedDates[0] - date1;
      if (betweenTime < 0) {
        clearTimeout(this.timeId);
        return;
      }
      zxc(convertMs(betweenTime));
    }, 1000);
  }
}

function zxc({ days, hours, minutes, seconds }) {
  timeDays.textContent = `${days}`;
  timeHours.textContent = `${hours}`;
  timeMinute.textContent = `${minutes}`;
  timeSecond.textContent = `${seconds}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));

  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
