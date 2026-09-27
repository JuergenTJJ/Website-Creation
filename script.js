const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const yesWrapper = document.getElementById("yesWrapper");
const questionPage = document.getElementById("questionPage");
const datePage = document.getElementById("datePage");
const confirmButton = document.getElementById("confirmationButton");
const confirmPage = document.getElementById("confirmPage");
const datePicker = document.getElementById("datePicker");
const dateError = document.getElementById("dateError");

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

yesButton.addEventListener("click", function () {
    questionPage.classList.add("hidden");
    datePage.classList.remove("hidden");
});

confirmButton.addEventListener("click", function () {
    const selectedDate = datePicker.value;

    // Uses the visitor's local date.
    const today = new Date();
    const todayString =
        today.getFullYear() + "-" +
        String(today.getMonth() + 1).padStart(2, "0") + "-" +
        String(today.getDate()).padStart(2, "0");

    if (!selectedDate || selectedDate < todayString) {
        dateError.classList.remove("hidden");
        return; // Stop here, so the confirmation page does not appear.
    }

    dateError.classList.add("hidden");
    datePage.classList.add("hidden");
    confirmPage.classList.remove("hidden");
    const message = `Our date is on ${selectedDate} ❤️`;
    const telegramUrl =
    `https://t.me/share/url?text=${encodeURIComponent(message)}`;

window.open(telegramUrl, "_blank");
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

const faceImage = new Image();
const daisyImage = new Image();

faceImage.src = "images/face.png";
daisyImage.src = "images/daisy.png";

Promise.all([
    faceImage.decode(),
    daisyImage.decode()
]).then(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 260;
    canvas.height = 260;

    const ctx = canvas.getContext("2d");

    // Opposite corners create a diagonal, spaced-out pattern.
    ctx.drawImage(faceImage, 15, 15, 80, 80);
    ctx.drawImage(daisyImage, 150, 145, 85, 110);

    document.body.style.backgroundImage = `url("${canvas.toDataURL("image/png")}")`;
    document.body.style.backgroundRepeat = "repeat";
}).catch(() => {
    console.error("Could not load face.png or daisy.png. Check the filenames and paths.");
});