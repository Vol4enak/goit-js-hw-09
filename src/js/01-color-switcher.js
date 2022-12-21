function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const openBtn = document.querySelector('button[data-start]');
const closeBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let intervalId = null;

openBtn.addEventListener('click', onOpenBtn);
closeBtn.addEventListener('click', onCloseBtn);



function onOpenBtn() {
  intervalId = setInterval(
    () => (body.style.backgroundColor = getRandomHexColor()),
    1000
  );
  openBtn.setAttribute('disabled', true);
  closeBtn.removeAttribute('disabled');
}
function onCloseBtn() {
    clearInterval(intervalId);
  closeBtn.setAttribute('disabled', true);
  openBtn.removeAttribute('disabled');
}


// const intervalId = setInterval(
//   () => (bodyCool.style.backgroundColor = getRandomHexColor()),
//   1000
// );
// clearInterval(intervalId);

