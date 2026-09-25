const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const yesWrapper = document.getElementById("yesWrapper");

let noClickCount = 0;
let noScale = 1;

const growthLevels = [
    1,
    1.3,
    1.6,
    2.0,
    2.5,
    3.1,
    3.8,
    4.6,
    5.5
];

const originalFontSize = 18;
const originalVerticalPadding = 12;
const originalHorizontalPadding = 30;


noButton.addEventListener("click", function () {

    noClickCount++;

    // FIRST PHASE:
    // Yes grows and No slowly shrinks
    if (noClickCount <= 8) {

        const yesScale = growthLevels[noClickCount];

        yesButton.style.fontSize =
            (originalFontSize * yesScale) + "px";

        yesButton.style.padding =
            (originalVerticalPadding * yesScale) + "px " +
            (originalHorizontalPadding * yesScale) + "px";


        // Slowly shrink No
        noScale -= 0.07;

        noButton.style.transform =
            `scale(${noScale})`;
    }


    // Shake Yes every time No is clicked
    yesWrapper.classList.add("shake");

});


yesWrapper.addEventListener("animationend", function () {

    yesWrapper.classList.remove("shake");

});