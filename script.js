const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

const seconds = document.querySelector('.seconds');
const minutes = document.querySelector('.minutes');
const hours = document.querySelector('.hours');

let hrs = 00;
let min = 00;
let second = 00;
let timer = true;

startButton.addEventListener('click', () => {
  console.log(second)
})

stopButton.addEventListener('click', () => {

  console.log('stop button')
})

resetButton.addEventListener('click', () => {

  console.log('reset button')
})

function startWatch(){ 
  if(timer){
    
  }
}
