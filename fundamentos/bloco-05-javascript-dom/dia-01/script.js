function changeText() {
    let paragraph = document.getElementsByTagName('p')[1];
    paragraph.innerHTML = "Ser um programador pleno"
}
changeText();

function changeColor () {
    let color = document.getElementsByClassName('main-content')[0];
    color.style.background = "rgb(76,164,109)";
}
changeColor();

function changeInsideColor () {
    let insideColor = document.getElementsByClassName('center-content')[0];
    insideColor.style.background = "white";
}
changeInsideColor();

function textCorrection () {
    let correction = document.getElementsByTagName('h1')[0];
    correction.innerHTML = "Exercício 5.1 - JavaScript";
}
textCorrection();

function yelling () {
    let yel = document.getElementsByTagName('p')[0];
    yel.innerHTML = yel.innerHTML.toUpperCase();
}
yelling();

function showMyTags () {
    let myTags = document.getElementsByTagName('p');
    for (let index = 0; index < myTags.length; index += 1) {
        console.log(myTags[index].innerHTML)
    }
}
showMyTags();