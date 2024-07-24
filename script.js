let red=document.getElementById('red')
let yellow=document.getElementById('yellow')
let greeen=document.getElementById('green')
let square=document.querySelectorAll('.colorButton')
let timesClicked={'red':0,'yellow':0,'green':0}

square.forEach(square=>{
  square.onclick=()=>{
    timesClicked[square.value]+=1;
  square.innerText=timesClicked[square.value]}
  })
function clearScores(){
  timesClicked.red=0
  timesClicked.yellow=0
  timesClicked.green=0
  square.forEach(square=>{
    square.innerText=''
  })
}
let clearGame=document.getElementById('clear')
clearGame.onclick=()=>clearScores()


