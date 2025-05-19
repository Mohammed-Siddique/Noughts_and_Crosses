let boxBtn = document.querySelectorAll('#box');
let turn0 = true;

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
    })
})







