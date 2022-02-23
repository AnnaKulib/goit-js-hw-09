const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
console.log(startBtn);
console.log(stopBtn);

const DELAY = 1000;
let intervalId = null;

startBtn.addEventListener('click', changeBgColor);
stopBtn.addEventListener('click', stopchangeBgColor);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

function changeBgColor() {
    intervalId = setInterval(() => {
        console.log('Меняем фон');
         document.body.style.background = getRandomHexColor();
      }, DELAY);

      startBtn.setAttribute("disabled", true);
}

function stopchangeBgColor() {
    clearInterval(intervalId);
    startBtn.removeAttribute("disabled");
}