// number guessing game
const min = 1;
const max = 100;
const answer =Math.floor(Math.random()*(max - min +1) - min);
let attempt = 0;
let guess;
let running = true;

while(running){
  guess = window.prompt(`guess a number between ${min} - ${max}`);

  if(isNaN(guess)){
    window.alert("please enter a valid number");
  }else if(guess < min || guess > max){
    window.alert("please enter a valid number");
  }else {
    attempt ++;
    if(guess < answer){
      window.alert("TOO LOW : TRY AGIN");
    }else if(guess > answer){
      window.alert("TOO HIGH : TRY AGIN");
    }else{
       window.alert(`CORRECT: the answer was ${answer} it took you ${attempt} attempts `);
       running = fasle;
    }
  }
}