let boxes = document.querySelectorAll('.box');
let newBtn = document.querySelector('.new-btn');
let resetBtn = document.querySelector('.reset-btn');

let turn0 = true;

// pattern  for the game (X and O)
const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,4,8],
    [2,4,6],
    [1,4,7],
    [2,5,8],
  
];

// select each box using forEach and addEventListener

boxes.forEach((box)=>{
    box.addEventListener('click', ()=>{
        console.log('box was clicked');
        if(turn0){
            box.innerText = '0';
            turn0 = false;
        }else{
            box.innerText = 'X';
            turn0 = true;
        }
        box.disabled = true;


    })
})