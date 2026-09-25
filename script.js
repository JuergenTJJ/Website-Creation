const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const yesWrapper = document.getElementById("yesWrapper");

let yesScale = 1;

noButton.addEventListener("click", function () {

    // Increase Yes button size
    yesScale = yesScale + 0.5;

    yesButton.style.transform = `scale(${yesScale})`;

    // Shake Yes
    yesWrapper.classList.add("shake");
});


// When shaking finishes, remove the class.
// This allows the next click to trigger it again.
yesWrapper.addEventListener("animationend", function () {
    yesWrapper.classList.remove("shake");
});