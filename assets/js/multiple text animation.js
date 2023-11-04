const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Bloger";
    }, 0);
    setTimeout(() => {
        text.textContent = "Youtuber";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 8000);
    setTimeout(() => {
        text.textContent = "Entreprener";
    }, 12000);
    setTimeout(() => {
        text.textContent = "Vloger";
    }, 16000);


}

textLoad();
setInterval(textLoad,24000);
