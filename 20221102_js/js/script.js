window.addEventListener("load", function () {
    const player = document.getElementById("player");

    var pStyle = getComputedStyle(player);

    var posLeft = parseInt(pStyle.left);
    var posTop = parseInt(pStyle.top);

    var waiting = false;

    const jump = 25;
    
    document.onkeydown = function (event) {
        
        if (waiting) { return; }

        switch (event.key) {
            case "ArrowLeft":
                // Left pressed
                console.log("Left pressed");
                posLeft -= jump;
                break;
            case "ArrowRight":
                // Right pressed
                console.log("Right pressed");
                posLeft += jump;
                break;
            case "ArrowUp":
                // Up pressed
                console.log("Up pressed");
                posTop -= jump;
                break;
            case "ArrowDown":
                // Down pressed
                console.log("Down pressed");
                posTop += jump;
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