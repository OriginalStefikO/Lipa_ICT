const player = document.getElementById("player");
var pStyle = getComputedStyle(player);
var posLeft = parseInt(pStyle.left);
var posTop = parseInt(pStyle.top);
const pSize = parseInt(pStyle.width);

let renderDistance = 2.5;

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

for (let radek = 0; radek < pole.length; radek++) {
    for (let sloupec = 0; sloupec < pole[radek].length; sloupec++) {
        if (inCircle(playerPos[0], playerPos[1], renderDistance, sloupec, radek) == false) {break}

        console.log(pole[radek][sloupec]);
        if (pole[radek][sloupec] == 1) {
            var newDiv = document.createElement("div");
            newDiv.classList.add("wall");
            newDiv.style.left = (borderPosLeft + sloupec * pSize) + "px";
            newDiv.style.top = (borderPosTop + radek * pSize) + "px";
            newDiv.style.width = pSize-2 + "px";
            newDiv.style.height = pSize-2 + "px";
            newDiv.style.backgroundColor = "black";
            newDiv.style.position = "absolute";
            newDiv.style.borderRadius = "5px";
            document.body.appendChild(newDiv);
            
        }
    }
}

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

function inCircle(circle_x, circle_y, rad, x, y) {
    if ((x - circle_x) * (x - circle_x) + (y - circle_y) * (y - circle_y) <= rad * rad)
        return true;
    else
        return false;
}