/* =========================
   ELEMENTS
========================= */

const intro = document.getElementById("intro");
const main = document.getElementById("main");

const openBtn = document.getElementById("openBtn");
const againBtn = document.getElementById("againBtn");

const colorButtons = document.querySelectorAll(".color-btn");

const flowers = document.querySelectorAll(".flower");

const particles = document.getElementById("particles");


/* =========================
   OPEN EXPERIENCE
========================= */

openBtn.addEventListener("click", () => {

    intro.classList.add("hide");

    setTimeout(() => {

        intro.style.display = "none";

        main.classList.add("show");

        startHearts();

    }, 1000);

});


/* =========================
   REPLAY
========================= */

againBtn.addEventListener("click", () => {

    main.classList.remove("show");

    particles.innerHTML = "";

    setTimeout(() => {

        intro.style.display = "flex";

        intro.classList.remove("hide");

    }, 300);

});


/* =========================
   FLOWER COLORS
========================= */

colorButtons.forEach(button => {

    button.addEventListener("click", () => {

        const color = button.dataset.color;

        let flowerColor;

        switch (color) {

            case "pink":
                flowerColor = "#ff72ad";
                break;

            case "red":
                flowerColor = "#ff4545";
                break;

            case "purple":
                flowerColor = "#b56cff";
                break;

            case "blue":
                flowerColor = "#66baff";
                break;

            case "yellow":
                flowerColor = "#ffd85c";
                break;

            default:
                flowerColor = "#ff72ad";
        }


        flowers.forEach(flower => {

            flower.style.setProperty(
                "--flower-color",
                flowerColor
            );

        });

    });

});


/* =========================
   FLOATING HEARTS
========================= */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart-particle");

    heart.innerHTML = Math.random() > 0.5 ? "♥" : "♡";


    heart.style.left =
        Math.random() * 100 + "%";


    const duration =
        5 + Math.random() * 6;


    heart.style.animationDuration =
        duration + "s";


    heart.style.fontSize =
        (10 + Math.random() * 15) + "px";


    particles.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, duration * 1000);

}


/* =========================
   START HEART ANIMATION
========================= */

let heartInterval;


function startHearts() {

    clearInterval(heartInterval);

    heartInterval = setInterval(() => {

        createHeart();

    }, 700);

}


/* =========================
   INITIAL FLOWER COLOR
========================= */

flowers.forEach(flower => {

    flower.style.setProperty(
        "--flower-color",
        "#ff72ad"
    );

});