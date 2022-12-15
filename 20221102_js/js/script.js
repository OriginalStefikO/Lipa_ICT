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

var playerPos = [4, 3];
posLeft = borderPosLeft + playerPos[0] * pSize;
posTop = borderPosTop + playerPos[1] * pSize;
player.style.left = borderPosLeft + playerPos[0] * pSize + "px";
player.style.top = borderPosTop + playerPos[1] * pSize + "px";

for (let radek = 0; radek < pole.length; radek++) {
    for (let sloupec = 0; sloupec < pole[radek].length; sloupec++) {
        // console.log(pole[radek][sloupec]);
        if (pole[radek][sloupec] == 1 && inCircle(playerPos[0], playerPos[1], renderDistance, sloupec, radek)) {
            createWall([sloupec * pSize, radek * pSize], pSize, 0.92, 5+"px", "black");
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

    pole[playerPos[1]][playerPos[0]] = "x";
    console.clear();
    console.table(pole);

    document.getElementById("border").innerHTML = "";
    for (let radek = 0; radek < pole.length; radek++) {
        for (let sloupec = 0; sloupec < pole[radek].length; sloupec++) {
            // console.log(pole[radek][sloupec]);
            if (pole[radek][sloupec] == 1 && inCircle(playerPos[0], playerPos[1], renderDistance, sloupec, radek)) {
                createWall([sloupec * pSize, radek * pSize], pSize, 0.92, 5 + "px", "black");
            }
        }
    }

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

function createWall(position, size, multiplier, borderRadius, color) {
    var newDiv = document.createElement("div");
    newDiv.classList.add("wall");
    newDiv.style.left = position[0] + "px";
    newDiv.style.top = position[1] + "px";
    newDiv.style.width = size * multiplier + "px";
    newDiv.style.height = size * multiplier + "px";
    newDiv.style.backgroundColor = color;
    newDiv.style.position = "absolute";
    newDiv.style.borderRadius = borderRadius;
    document.getElementById("border").appendChild(newDiv);
}