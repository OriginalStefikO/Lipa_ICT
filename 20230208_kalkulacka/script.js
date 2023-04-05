const NUMBERBTNS = document.querySelectorAll("[data-numberBtn]");
const OPERATORBTNS = document.querySelectorAll("[data-operatorBtn]");
const DELETEBTN = document.querySelector("[data-deleteBtn]");
const CLEARBTN = document.querySelector("[data-clearBtn]");
const EQUALBTN = document.querySelector("[data-equalBtn]");
const DISPLAY = document.querySelector("[data-display]");

NUMBERBTNS.forEach(button => {
    button.addEventListener("click", e => {
        console.log(button.innerHTML);
        updateDisplay(DISPLAY, button.innerHTML)
    })
})

function updateDisplay(display, value) {
    display.innerHTML += value
}