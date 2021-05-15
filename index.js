const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn  = document.querySelector('button[data-action="stop"]');


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let timerId = null;
startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
    }, 1000);
    startBtn.disabled = true;
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
      startBtn.disabled = false;
});




