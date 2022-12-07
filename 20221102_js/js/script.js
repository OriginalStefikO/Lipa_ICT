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

var playerVision = 2.5;	

var pole = [
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 2, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 9, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var playerPos = [0, 0];

for (let i = 0; i < pole.length; i++) {
    for (let j = 0; j < pole[i].length; j++) {
        if (pole[i][j] == 9) {
            playerPos = [j, i];
            player.style.left = posLeft + pSize * (j) + "px";
            player.style.top = posTop + pSize * (i) + "px";
            posLeft = parseInt(player.style.left);
            posTop = parseInt(player.style.top);
        }
    }
}

for (let i = 0; i < pole.length; i++) {
    for (let j = 0; j < pole[i].length; j++) {
        if (pole[i][j] == 1 && inCircle(playerPos[0], playerPos[1], playerVision, j, i)) {
            var wall = document.createElement("div");
            wall.className = "wall";
            wall.style.backgroundColor = "black";
            wall.style.width = pSize - 2 + "px";
            wall.style.height = pSize - 2 + "px";
            wall.style.position = "absolute";
            wall.style.left = pSize * j + "px";
            wall.style.top = pSize * i + "px";
            wall.style.borderRadius = "5px";
            border.appendChild(wall);
        }
    }
}


document.onkeydown = function (event) {

    if (waiting == true) {return};

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

    pole[playerPos[1]][playerPos[0]] = 9;
    console.clear();
    console.table(pole);

    document.getElementById("border").innerHTML = "";
    for (let i = 0; i < pole.length; i++) {
        for (let j = 0; j < pole[i].length; j++) {
            if (pole[i][j] == 1 && inCircle(playerPos[0], playerPos[1], playerVision, j, i)) {
                var wall = document.createElement("div");
                wall.className = "wall";
                wall.style.backgroundColor = "black";
                wall.style.width = pSize - 2 + "px";
                wall.style.height = pSize - 2 + "px";
                wall.style.position = "absolute";
                wall.style.left = pSize * j + "px";
                wall.style.top = pSize * i + "px";
                wall.style.borderRadius = "5px";
                border.appendChild(wall);
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