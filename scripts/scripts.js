let menuButton = document.getElementById("button1");
let numberButton = document.getElementById("numberToggle");
let letterButton = document.getElementById("letterToggle");

menuButton.addEventListener("click", dropdown);
numberButton.addEventListener("click", showNumbers);
letterButton.addEventListener("click", showLetters);

function dropdown(event) {
    document.getElementById("myDropdown").classList.toggle("show");
}

function showNumbers(event) {
    document.getElementById("numbers").style.display = "block";
    document.getElementById("letters").style.display = "none";
    document.getElementById("myDropdown").classList.toggle("show");
}

function showLetters(event) {
    document.getElementById("numbers").style.display = "none";
    document.getElementById("letters").style.display = "block";
    document.getElementById("myDropdown").classList.toggle("show");
}