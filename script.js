const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const yesWrapper = document.getElementById("yesWrapper");

let noClickcount = 0;
let yesScale = 1;
let noScale = 1;

function moveNoButton() {
    const maxX = window.innerWidth - noButton.offsetwidth;
    const maxY = window.innerHeight - noButton.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = "fixed";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
}

noButton.addEventListener("click", function () {
    yesWrapper.classlist.remove("shake"); //shake the yes button
    void yesWrapper.offsetwidth;
    yesWrapper.classlist.add("shake");

    noClickcount++;
    console.log("No clicked:", noClickcount);

    if (yesScale<8) {
        yesScale += 0.5;

        if (yesScale>8) {
            yesScale = 8;
        }

        yesButton.style.transform = `scale(${yesScale})`;
    }

    else {
        noScale -=0.25;

        if (noScale < 0.25) {
            noScale = 0.25;
        }

        noButton.style.transform = 'scale(${noScale})';
        if(noScale <= 0.25) {
            moveNoButton();
        }
    }

});