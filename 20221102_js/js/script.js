window.addEventListener("load", function () {
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

    document.onkeydown = function (event) {

        if (waiting == true) {return};

        switch (event.key) {
            case "ArrowLeft":
                // Left pressed
                console.log("Left pressed");
                if (posLeft > borderPosLeft) {
                    posLeft -= pSize;
                }
                break;
            case "ArrowRight":
                // Right pressed
                console.log("Right pressed");
                posLeft += pSize;
                break;
            case "ArrowUp":
                // Up pressed
                console.log("Up pressed");
                posTop -= pSize;
                break;
            case "ArrowDown":
                // Down pressed
                console.log("Down pressed");
                posTop += pSize;
                break;
        }
        waiting = true;
        const myTimeout = setTimeout(waitingSwitch, parseFloat(pStyle.transitionDuration) * 1000);

        player.style.left = posLeft + "px";
        player.style.top = posTop + "px";
    };

    function waitingSwitch() {
        waiting = false;
    }
});