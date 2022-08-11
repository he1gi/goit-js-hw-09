const refs = {
  startBtnEl: document.querySelector('[data-start]'),
  stopBtnEl: document.querySelector('[data-stop]'),
};

let timerId = null;

function onStartBtnClick() {
  refs.startBtnEl.setAttribute('disabled', 'disabled');
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopBtnClick() {
  clearInterval(timerId);
  refs.startBtnEl.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.startBtnEl.addEventListener('click', onStartBtnClick);
refs.stopBtnEl.addEventListener('click', onStopBtnClick);
