document.addEventListener("DOMContentLoaded", () => {

    const music = document.getElementById("bgMusic");
    const loveBtn = document.getElementById("loveBtn");

    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");
    const page3 = document.getElementById("page3");
    const page4 = document.getElementById("page4");

    const envelope = document.getElementById("envelope");
    const heartsContainer = document.getElementById("hearts-container");
    const floating = document.getElementById("floating-container");

    loveBtn.onclick = () => {
        music.play();

        for (let i = 0; i < 50; i++) {
            let heart = document.createElement("img");
            heart.src = "images/heart.png"; // <-- fixed path
            heart.className = "heart";
            heart.style.left = Math.random() * 100 + "%";
            heartsContainer.appendChild(heart);
        }

        setTimeout(() => {
            page1.classList.remove("active");
            page2.classList.add("active");
            spawnAnimals();
        }, 1500);
    };

    function spawnAnimals() {
        setInterval(() => {
            let img = document.createElement("img");
            img.src = Math.random() > 0.5 ? "images/cat.png" : "images/bunny.png"; // <-- fixed path
            img.className = "float";
            img.style.left = Math.random() * 100 + "%";
            floating.appendChild(img);
        }, 1000);
    }

    envelope.onclick = () => {
        envelope.classList.add("open");

        setTimeout(() => {
            page2.classList.remove("active");
            page3.classList.add("active");
            typeText();
        }, 1200);
    };

    const text = `Cristina... I cannot stop thinking about you.

You are not temporary to me. You are the eternal. I love you to the point where even my pain itself wants to stay longer, so it could also  witness your perfection.

I want our love to reach the kinds of heights that make us absurd. Cosmic. Extraordinary. Beyond.

I want to walk this path with you.

Always.

Happy anniversary.

Ti amo, mio angelo. Lo sono tuo, per sempre. ❤️`;

    let i = 0;
    function typeText() {
        const el = document.getElementById("finalText");
        let interval = setInterval(() => {
            el.innerHTML += text[i];
            i++;
            if (i >= text.length) {
                clearInterval(interval);
                setTimeout(() => {
                    page3.classList.remove("active");
                    page4.classList.add("active");
                }, 5500);
            }
        }, 30);
    }

});

/* FINAL VOID OUTSIDE */
function enterVoid() {
    const voidScreen = document.getElementById("voidScreen");
    const voidText = document.getElementById("voidText");

    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.opacity = "1";
        voidScreen.style.display = "block";
        setTimeout(() => {
            voidText.style.opacity = "1";
        }, 500);
    }, 1500);
}
