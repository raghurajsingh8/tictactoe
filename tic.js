let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
// let newGameBtn=document.querySelector("#new-btn")
let msgConatiner=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let x=0;
  let y=0;
let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
// const place=[0,1,2,3,4,5,6,7,8];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "X";
    } else {
      box.innerText = "O";
    }
    turnO = !turnO; // Switch the turn after each click
    box.disabled=true;
    checkWinner();
  });
});
const disableBoxes= () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes= () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{

  pos1Val=winner;

  msg.innerText=`congratulations,winner is ${winner}`;
  disableBoxes();
  
  let xp=document.querySelector(".xp");
  let yp=document.querySelector(".yp");
  if(pos1Val==="X"){
xp.innerText=++x;}

if(pos1Val==="O"){
yp.innerText=++y;}
 
  
}

const resetgame=()=>{
  turnO=true;
  enableBoxes();
  msg.innerText=``;
} 

const checkWinner=()=>{
  for (let pattern of winPatterns){
    let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;
    
    if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
      if(pos1Val===pos2Val && pos2Val===pos3Val){
        console.log("winner",pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};



// newGameBtn.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);

