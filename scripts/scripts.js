let menuButton = document.getElementById("button1");
let numberButton = document.getElementById("numberToggle");
let letterButton = document.getElementById("letterToggle");

menuButton.addEventListener("click", dropdown);
numberButton.addEventListener("click", showNumbers);
letterButton.addEventListener("click", showLetters);

function dropdown(event) {
    document.getElementById("DropMenu").classList.toggle("show");
}

function showNumbers(event) {
    event.preventDefault();
    document.getElementById("numbers").style.display = "block";
    document.getElementById("letters").style.display = "none";
    document.getElementById("DropMenu").classList.toggle("show");
}

function showLetters(event) {
    event.preventDefault();
    document.getElementById("numbers").style.display = "none";
    document.getElementById("letters").style.display = "block";
    document.getElementById("DropMenu").classList.toggle("show");
}
