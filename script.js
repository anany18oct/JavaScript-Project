let boxes=document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg = document.querySelector("#win");

let turnO=true;
let count=0;

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame=()=>{
    turnO=true;
    count=0;
    enabledButton();
    msgcontainer.classList.add("hide");

}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(turnO===true){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
        count++;

        let isWinner = checkWinner();
        if(count === 9 && !isWinner){
            gameDraw();
        }
    });
});
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgcontainer.classList.remove("hide");
    disabledButton();
  };
const disabledButton=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enabledButton=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner = (winner) =>{
    msg.innerText=`Congratulations, Winner is  ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledButton();
};
const checkWinner = ()=>{
    for(let pattern of winPattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val2=boxes[pattern[1]].innerText;
        let pos3Val3=boxes[pattern[2]].innerText;
        
        if(pos1val !=""&& pos2val2 !="" && pos3Val3 !=""){
            if(pos1val==pos2val2 && pos2val2==pos3Val3){
                showWinner(pos1val);
            }

        }
    }
}
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
