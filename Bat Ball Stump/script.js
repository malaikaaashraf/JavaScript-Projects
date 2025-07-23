// JSON.parse(localStorage.getItem('score2'))?
let obj;
let showResultElement;
obj=(JSON.parse(localStorage.getItem("score2")))||{
  wins: 0,
  lost:0,
  tie:0
} ;
// let obj={
//   wins: 0,
//   lost:0,
//   tie:0
// } 
// let score2=(JSON.parse(localStorage.getItem("score2")));
//   obj=score2;

// localStorage.setItem("score2",JSON.stringify(obj));
function computerChoice(userChoice){
  let computerChoice='';
  let randomNum= Math.random()*3;
  if(randomNum>0&&randomNum<1){
    console.log(`Random number is: ${randomNum}. Computer choice is bat`);
    computerChoice='bat';
  }else if(randomNum<2){
    console.log(`Random number is: ${randomNum}. Computer choice is Ball`);
    computerChoice='ball';
  }else{
    console.log(`Random number is: ${randomNum}. Computer choice is Stump`);
    computerChoice='stump';
  }
  computeRsult(userChoice,computerChoice);
}
function computeRsult(userChoice,computerChoice){
  let finalResultStr='';
  if(userChoice===computerChoice){
    finalResultStr=`It's a tie`;
    obj.tie++;
  }else if(userChoice==='bat'&& computerChoice==='ball'){
    finalResultStr=`User has won`;
    obj.wins++;
  }else if(userChoice==='bat'&&computerChoice==='stump'){
    finalResultStr=`computer has won`;
    obj.lost++;
  }else if(userChoice==='ball'&& computerChoice==='bat'){
    finalResultStr=`Computer has won`;
    obj.lost++;
  }else if(userChoice==='ball'&&computerChoice==='stump'){
    finalResultStr=`User has won`;
    obj.wins++;
  }else if(userChoice==='stump'&& computerChoice==='ball'){
    finalResultStr=`Computer has won`;
    obj.lost++;
  }else if(userChoice==='stump'&&computerChoice==='bat'){
    finalResultStr=`User has won`;
    obj.wins++;
  }
  localStorage.setItem("score2",JSON.stringify(obj));
  displayScore(userChoice,computerChoice,finalResultStr);
}
function displayScore(userChoice,computerChoice,finalResultStr){
  showResultElement= document.querySelector('.show-result-container');
  showResultElement.innerHTML=`<div class="choice same">User choice is: ${userChoice}.</div>
  <div class="choice same">Computer choice is: ${computerChoice}.</div>
  <h3 class="result-head same">Final Result is: ${finalResultStr}.</h3>
  <h3 class="result-head same">Final score is: wins: ${obj.wins}, lost: ${obj.lost}, tie:${obj.tie}.</h3>`
  console.log(`Final score is: wins: ${obj.wins}, lost: ${obj.lost}, tie:${obj.tie}.`)
}
function startAgain(){
  obj={
    wins:0,
    lost:0,
    tie:0
  };
  showResultElement.innerHTML=``;
  localStorage.setItem("score2",JSON.stringify(obj));
}