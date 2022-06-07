//Timer fields
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');
const millisecondElement = document.querySelector('.millisecond');

//Buttons
const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const stopButton = document.querySelector('.stop');
const newButton = document.querySelector('.new');
const clearButton = document.querySelector('.clear');

//Listeners
startButton.addEventListener('click', ()=> {
  clearInterval(interval);
  interval= setInterval(startTimer, 10)
})

pauseButton.addEventListener('click', () => {
  clearInterval(interval);
})

stopButton.addEventListener('click', () => {
  clearInterval(interval);
  clearFields();
  disableBtn();
})

newButton.addEventListener('click', () => {
  clearInterval(interval);
  counter++;
  const results =  document.querySelector('.results');
  const block = document.createElement('div');
  block.classList.add('results__info');
  block.innerText = `Result ${counter}: ${minute > 9 ? minute : "0" + minute}:${second > 9 ? second : "0" + second}:${millisecond > 9 ? millisecond : "0" + millisecond}`;
  results.append(block);  
  clearFields();
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
})

clearButton.addEventListener('click', () => {
  const results = document.querySelectorAll('.results__info');
  if (results.length) {
    results.forEach(el => el.remove());
  }
  counter = 0;
})

//Variables
let minute = 00,
    second = 00,
    millisecond = 00,
    interval,
    counter = 0,
    disabled = true

function startTimer() {
  millisecond++;

  //Milliseconds
  millisecond <= 9 ? millisecondElement.innerText = '0' + millisecond : millisecondElement.innerText = millisecond;
  if (millisecond > 99 ) {
    second++;
    secondElement.innerText = '0' + second;
    millisecond = 0;
    millisecondElement.innerText = '0' + millisecond;
  }

  //Seconds
  second <= 9 ? secondElement.innerText = '0' + second : secondElement.innerText = second;
  if (second > 59 ) {
    minute++;
    minuteElement.innerText = '0' + minute;
    second = 0;
    secondElement.innerText = '0' + second;
  }

  //Minutes
  minute <= 9 ? minuteElement.innerText = '0' + minute : minuteElement.innerText = minute;

  newButton.disabled = false;
}

function clearFields () {
  minute = 00;
  second = 00;
  millisecond = 00;
  minuteElement.textContent = '00';
  secondElement.textContent = '00';
  millisecondElement.textContent = '00';
}

function disableBtn() {
  if(disabled) {
    newButton.disabled = true;
  }
}

disableBtn();