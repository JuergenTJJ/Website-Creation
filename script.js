const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

let yesScale = 1;

noButton.addEventListener("click", function () {

    yesScale = yesScale + 0.5;

    yesButton.style.transform = `scale(${yesScale})`;

});