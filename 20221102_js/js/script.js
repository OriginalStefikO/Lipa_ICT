const player = document.getElementById("player");
var pStyle = getComputedStyle(player);
var posLeft = parseInt(pStyle.left);
var posTop = parseInt(pStyle.top);
const pSize = parseInt(pStyle.width);

const border = document.getElementById("border");
var borderStyle = getComputedStyle(border);
var borderPosLeft = parseInt(borderStyle.left);
var borderPosTop = parseInt(borderStyle.top);
const borderSize = parseInt(borderStyle.width);

var waiting = false;

var pole = [
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];


var playerPos = [0, 0];

document.onkeydown = function (event) {

    if (waiting == true) { return };

    pole[playerPos[1]][playerPos[0]] = 0;

    switch (event.key) {
        case "ArrowLeft":
            // Left pressed
            console.log("Left pressed");
            if (posLeft > borderPosLeft) {
                if (pole[playerPos[1]][playerPos[0] - 1] == 1) { break; }

                posLeft -= pSize;
                playerPos[0] -= 1;
            }
            break;
        case "ArrowRight":
            // Right pressed
            console.log("Right pressed");
            if (posLeft < (borderPosLeft + borderSize - pSize)) {
                if (pole[playerPos[1]][playerPos[0] + 1] == 1) { break; }
                posLeft += pSize;
                playerPos[0] += 1;
            }
            break;
        case "ArrowUp":
            // Up pressed
            console.log("Up pressed");
            if (posTop > borderPosTop) {
                if (pole[playerPos[1] - 1][playerPos[0]] == 1) { break; }
                posTop -= pSize;
                playerPos[1] -= 1;
            }
            break;
        case "ArrowDown":
            // Down pressed
            console.log("Down pressed");
            if (posTop < (borderPosTop + borderSize - pSize)) {
                if (pole[playerPos[1] + 1][playerPos[0]] == 1) { break; }

                posTop += pSize;
                playerPos[1] += 1;
            }
            break;
    }

    pole[playerPos[1]][playerPos[0]] = "X";
    console.clear();
    console.table(pole);

    waiting = true;
    const myTimeout = setTimeout(waitingSwitch, parseFloat(pStyle.transitionDuration) * 1000);

    player.style.left = posLeft + "px";
    player.style.top = posTop + "px";
};

function waitingSwitch() {
    waiting = false;
}