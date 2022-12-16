function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const OpenBtn = document.querySelector('button[data-start]');
const CloseBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let intervalId = null;

OpenBtn.addEventListener('click', onOpenBtn);
CloseBtn.addEventListener('click', onCloseBtn);



function onOpenBtn() {
  intervalId = setInterval(
    () => (body.style.backgroundColor = getRandomHexColor()),
    1000
  );
  OpenBtn.setAttribute('disabled', true);
  CloseBtn.removeAttribute('disabled');
}
function onCloseBtn() {
    clearInterval(intervalId);
  CloseBtn.setAttribute('disabled', true);
  OpenBtn.removeAttribute('disabled');
}


// const intervalId = setInterval(
//   () => (bodyCool.style.backgroundColor = getRandomHexColor()),
//   1000
// );
// clearInterval(intervalId);

