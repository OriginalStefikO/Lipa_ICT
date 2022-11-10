window.addEventListener("load", function () {
    const player = document.getElementById("player");

    var pStyle = getComputedStyle(player);

    var posLeft = parseInt(pStyle.left);
    var posTop = parseInt(pStyle.top);

    document.onkeydown = function (event) {
        


        switch (event.key) {
            case "ArrowLeft":
                // Left pressed
                console.log("Left pressed");
                posLeft -= 40;
                break;
            case "ArrowRight":
                // Right pressed
                console.log("Right pressed");
                posLeft += 40;
                break;
            case "ArrowUp":
                // Up pressed
                console.log("Up pressed");
                posTop -= 40;
                break;
            case "ArrowDown":
                // Down pressed
                console.log("Down pressed");
                posTop += 40;
                break;
        }
        player.style.left = posLeft + "px";
        player.style.top = posTop + "px";
    };
});