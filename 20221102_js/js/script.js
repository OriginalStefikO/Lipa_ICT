window.addEventListener("load", function () {
    const player = document.getElementById("player");
    const playground = document.getElementById("border");


    var pStyle = getComputedStyle(player);
    var pgStyle = getComputedStyle(playground);

    var jump = parseInt(pStyle.width);

    var plLeft = parseInt(pStyle.left);
    var plTop = parseInt(pStyle.top);

    var pgLeft = parseInt(pgStyle.left);
    var pgTop = parseInt(pgStyle.top);


    var waiting = false;

    document.onkeydown = function (event) {

        if (waiting) { return; };

        switch (event.key) {
            case "ArrowLeft":
                // Left pressed
                console.log("Left pressed");
                if (plLeft > pgLeft) {
                    plLeft -= jump;
                }
                break;
            case "ArrowRight":
                // Right pressed
                console.log("Right pressed");
                if (plLeft + parseInt(pStyle.width) < pgLeft + parseInt(pgStyle.width)) {
                    plLeft += jump;
                }
                break;
            case "ArrowUp":
                // Up pressed
                console.log("Up pressed");
                if (plTop > pgTop) {
                    plTop -= jump;
                }
                break;
            case "ArrowDown":
                // Down pressed
                console.log("Down pressed");
                if (plTop + parseInt(pStyle.height) < pgTop + parseInt(pgStyle.height)) {
                    plTop += jump;
                }
                break;
        }

        waiting = true;
        const myTimeout = setTimeout(waitingSwitch, parseFloat(pStyle.transitionDuration) * 1000 / 2);

        player.style.left = plLeft + "px";
        player.style.top = plTop + "px";
    };

    function waitingSwitch() {
        waiting = false;
    }
});

