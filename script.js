let boxes = document.querySelectorAll('.box');
let newBtn = document.querySelector('.new-btn');
let resetBtn = document.querySelector('.reset-btn');

let turn0 = true;

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,4,8],
    [2,4,6],
    [1,4,7],
    [2,5,8],
  

]