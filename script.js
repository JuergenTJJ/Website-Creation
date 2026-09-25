const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const yesWrapper = document.getElementById("yesWrapper");


let noClickCount = 0;
let noScale = 1;
let escapeMode = false;


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


    // PHASE 1
    if (noClickCount <= 8) {

        const yesScale = growthLevels[noClickCount];

        yesButton.style.fontSize =
            (originalFontSize * yesScale) + "px";

        yesButton.style.padding =
            (originalVerticalPadding * yesScale) + "px " +
            (originalHorizontalPadding * yesScale) + "px";


        noScale -= 0.07;

        noButton.style.transform =
            `scale(${noScale})`;
    }


    // PHASE 2
    else {

        escapeMode = true;

        noScale = 0.7;

        noButton.style.transform =
            `scale(${noScale})`;

        moveNoButton();
    }


    // Shake Yes
    yesWrapper.classList.add("shake");

});



yesWrapper.addEventListener("animationend", function () {

    yesWrapper.classList.remove("shake");

});



noButton.addEventListener("mouseenter", function () {

    if (escapeMode) {

        moveNoButton();

    }

});



function moveNoButton() {

    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    const padding = 20;

    const maxX =
        window.innerWidth - buttonWidth - padding;

    const maxY =
        window.innerHeight - buttonHeight - padding;

    const randomX =
        padding + Math.random() * (maxX - padding);

    const randomY =
        padding + Math.random() * (maxY - padding);


    noButton.style.position = "fixed";

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    noButton.style.zIndex = "1000";

}