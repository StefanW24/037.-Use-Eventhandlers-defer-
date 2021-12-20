// part 1

const AlertKnopEvent = function () {
    const AlertKnop = document.getElementById("mybutton");
    AlertKnop.addEventListener("click", function () { alert("button clicked"); });
};

// part 2

const SwitchKleur = function () {
    const bodykleur = document.body;
    bodykleur.classList.toggle("red-background");
};

// part 3

const SwitchKleurTerug = function () {
    const KleurKnop = document.getElementById("changeBackgroundButton");
    KleurKnop.addEventListener("click", function () { SwitchKleur(); });
};

AlertKnopEvent();
SwitchKleurTerug();