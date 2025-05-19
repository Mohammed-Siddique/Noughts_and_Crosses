let boxBtn = document.querySelectorAll('#box');

boxBtn.forEach((box) => {
    box.addEventListener('click', () => {
        box.textContent = 'X'
    })
})







