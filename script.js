const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const yesWrapper = document.getElementById("yesWrapper");

let yesScale = 1;

const originalFontSize = 18;
const originalVerticalPadding = 12;
const originalHorizontalPadding = 30;


noButton.addEventListener("click", function () {

    if (yesScale < 8) {

        yesScale += 0.5;

        if (yesScale > 8) {
            yesScale = 8;
        }


        // Increase actual dimensions of Yes
        yesButton.style.fontSize =
            (originalFontSize * yesScale) + "px";

        yesButton.style.padding =
            (originalVerticalPadding * yesScale) + "px " +
            (originalHorizontalPadding * yesScale) + "px";


        // Shake Yes
        yesWrapper.classList.add("shake");

    }

});


yesWrapper.addEventListener("animationend", function () {

    yesWrapper.classList.remove("shake");

});