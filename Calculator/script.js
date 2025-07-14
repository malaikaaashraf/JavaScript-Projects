let lastWasEqual=false;
let currentDisplay='';
let result;
function appendToDisplay(number){
  if(lastWasEqual===true){
    currentDisplay='';
    document.querySelector('#display').value=currentDisplay;
    lastWasEqual=false;
  }
  currentDisplay+=number;
  document.querySelector('#display').value=currentDisplay;
}
function calculateResult(){
  lastWasEqual=true;
  result=eval(currentDisplay);
  document.querySelector('#display').value=result;
}
function clearDisplay(){
  currentDisplay='';
  document.querySelector('#display').value=currentDisplay;
}
function deleteLast(){
  if(lastWasEqual){
    currentDisplay='';
    lastWasEqual=false;
  }
  else{
      currentDisplay=currentDisplay.slice(0,-1);
  }
  document.querySelector('#display').value=currentDisplay;
}


document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.add('blink');
    setTimeout(() => {
      button.classList.remove('blink');
    }, 150); // Match duration of animation
  });
});
