const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const yesWrapper = document.getElementById("yesWrapper");

let yesScale = 1;

noButton.addEventListener("click", function () {

    // Increase Yes button size
    yesScale = yesScale + 0.5;

    yesButton.style.transform = `scale(${yesScale})`;


    // Remove previous shake
    yesWrapper.classList.remove("shake");

    // Restart the animation
    void yesWrapper.offsetWidth;

    // Add shake again
    yesWrapper.classList.add("shake");

});