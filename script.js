// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.querySelector(".letter-window h1");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-button");
const finalText = document.getElementById("final-text");

// Click Envelope
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// NO button moves
noBtn.addEventListener("mouseover", () => {
    const min = 80;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// YES button grows, then moves on
let yesScale = 1;
let yesClicks = 0;

yesBtn.style.transformOrigin = "center center";
yesBtn.style.transition = "transform 0.3s ease";

yesBtn.addEventListener("click", () => {
    yesClicks++;
    yesScale += 0.2;
    yesBtn.style.transform = `scale(${yesScale})`;

    if (yesClicks >= 5) {
        title.textContent = "FINALLLYYY!!! 🎉";
        catImg.src = "orangecat.gif";
        document.querySelector(".letter-window").classList.add("final");

        buttons.style.display = "none";
        finalText.style.display = "block";
    }
});