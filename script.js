let second = 0;
let hour = 0;
let day = 0;
let minute = 0;

document.querySelector('.second').innerHTML = `0${second}`;
document.querySelector('.minute').innerHTML = `0${minute}`;
document.querySelector('.hour').innerHTML = `0${hour}`;
document.querySelector('.day').innerHTML = `0${day}`;

const startButton = document.querySelector('.buttons');
const buttonChange = () => {
  if (startButton.innerHTML === 'start') {
    startButton.innerHTML = 'stop';
    startButton.classList.add('started');
    clock();
  } 
  else if (startButton.innerHTML === 'stop') {
    startButton.innerHTML = 'start';
    startButton.classList.remove('started');
    stopClock();
  }
}

let intervalId;

const resetFunction = () => {
  second = 0;
  minute = 0;
  hour = 0;
  day = 0;
  
  document.querySelector('.second').innerHTML = `0${second}`;
  document.querySelector('.minute').innerHTML = `0${minute}`;
  document.querySelector('.hour').innerHTML = `0${hour}`;
  document.querySelector('.day').innerHTML = `0${day}`;
  startButton.innerHTML = 'start';
  startButton.classList.remove('started');
  stopClock();
}

const stopClock = () => {
  clearInterval(intervalId)
}
const clock = () =>{
  intervalId = setInterval(seconds, 1000)
}
 

const seconds = () => {
  second += 1
  if(second == 60){
    minutes();
    second = 0;
  }
  secondChanger();
}

const secondChanger = () => {
  if (second < 10) {
    document.querySelector('.second').innerHTML = `0${second}`;

  }
  else if(second >= 10 && second < 60){
    document.querySelector('.second').innerHTML = second;
  }
  else{
    document.querySelector('.second').innerHTML = `0${second}`;
    
  }
}
const minutes = () =>{
  minute += 1
  if(minute == 60){
    hours();
    minute = 0;
  }
  minuteChanger();
}
const minuteChanger = () =>{
  if (minute < 10) {
    document.querySelector('.minute').innerHTML = `0${minute}`

  }
  else if(minute => 10 && minute < 60){
    document.querySelector('.minute').innerHTML = minute;
  }
  else{
    document.querySelector('.minute').innerHTML = `0${minute}`;
    minute = 0;
  }
}
const hours = () =>{
  hour += 1
  if(hour == 24){
    days();
    hour = 0;
  }
  hourChanger();
}
const hourChanger = () =>{
  if (hour < 10) {
    document.querySelector('.hour').innerHTML = `0${hour}`;

  }
  else if(hour >= 10 && hour < 60){
    document.querySelector('.hour').innerHTML = hour;
  }
  else{
    document.querySelector('.hour').innerHTML = `0${hour}`;
    hour = 0;
  }
}
const days = () => {
  day += 1
  if(day == 24){
    day = 0;
  }
  dayChanger();
}
const dayChanger = () =>{
  if (day < 10) {
    document.querySelector('.day').innerHTML = `0${day}`;

  }
  else if(day > 10 && day < 99){
    document.querySelector('.day').innerHTML = day;
  }
  else{
    document.querySelector('.day').innerHTML = `0${day}`;
    day = 0;
  }
}