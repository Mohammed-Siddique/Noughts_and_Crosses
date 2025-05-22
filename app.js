let boxBtn = document.querySelectorAll('#box');
let resetBtn = document.querySelector('.reset');
let msgContainer = document.querySelector('.msg-container');
let turn0 = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 5],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
]

boxBtn.forEach((box) => {
    box.addEventListener('click', () => {
        if (turn0) {
            box.textContent = "O";
            turn0 = false
        } else {
            box.textContent = "X"
            turn0 = true
        }
        box.disabled = true;
        
        gameWinner();
        
    });
});

const gameWinner = ()=> {
    for (let pattern of winPattern) { 
        let val1 =  boxBtn[pattern[0]].textContent;
        let val2 =  boxBtn[pattern[1]].textContent; 
        let val3 =  boxBtn[pattern[2]].textContent
        
        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 === val3) {
                console.log('Winner!', val1)
            }
        };
        // set attribute for displaying the msg 
        msgContainer.setAttribute('class', 'winner-msg')

    }   
};

const resetButton = ()=> {
    resetBtn.addEventListener('click', () => {
        boxBtn.forEach((box) => {
            box.textContent = "";
        })
    })  
};

resetButton();













