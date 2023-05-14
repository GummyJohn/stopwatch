const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

const seconds = document.querySelector('.seconds');
const minutes = document.querySelector('.minutes');
const hours = document.querySelector('.hours');

let hrs = 00;
let min = 00;
let secs = 00;
let timer = true;

startButton.addEventListener('click', () => {
  startWatch();
  
  if(timer === false){
    timer = true;
    startWatch();
  }
})

stopButton.addEventListener('click', () => {
  timer = false;
})

resetButton.addEventListener('click', () => {
  hrs = 00;
  min = 00;
  secs = 00;

  hours.innerHTML = '00';
  minutes.innerHTML = '00';
  seconds.innerHTML = '00';
})

function startWatch(){ 
  if(timer){
    secs = secs + 1
    
    if(secs == 60){
      min++;
      secs = 0;
    }

    if(min === 60){
      hrs++;
      min = 0;
      secs = 0;
    }

    let hrString = hrs
    let minString = min
    let secondString = secs;

    if(hrs < 10){
      hrString = '0' + hrString;
    }

    if(secs < 10){
      secondString = '0' + secondString;
    }

    if(hrs < 10){
      minString = '0' + minString;
    }
    
    seconds.innerHTML = secondString;
    minutes.innerHTML = minString;
    hours.innerHTML = hrString;
    
    setTimeout(startWatch, 950);
  }

}
