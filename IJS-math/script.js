//Values for all jump elements
var singleToe = 0.4;
var singleSal = 0.4;
var singleLoop = 0.5;
var singleEuler = 0.5;
var singleFlip = 0.5;
var singleLutz = 0.6;
var singleAxel = 1.1;
var doubleSal = 1.3;
var doubleToe = 1.3;
var doubleLoop = 1.8;
var doubleFlip = 1.9;
var doubleLutz = 2.1;
var doubleAxel = 3.3;
var tripleSal = 4.4;
var tripleToe = 4.3;
var tripleLoop = 5.1;
var tripleFlip = 5.3;
var tripleLutz = 6.0;
var tripleAxel = 8.5;
var totalScore = 0;

//Creating return values for all buttons


document.getElementById("singleSalchow").onclick = function() {
  totalScore = totalScore + singleSal;
  console.log(totalScore);
};

document.getElementById("singleToe").onclick = function() {
  totalScore = totalScore + singleToe;
  console.log(totalScore);
};

document.getElementById("singleEuler").onclick = function() {
  totalScore = totalScore + singleEuler;
  console.log(totalScore);
};

document.getElementById("singleLoop").onclick = function() {
  totalScore = totalScore + singleLoop;
  console.log(totalScore);
};

document.getElementById("singleFlip").onclick = function() {
  totalScore = totalScore + singleFlip;
  console.log(totalScore);
};

document.getElementById("singleLutz").onclick = function() {
  totalScore = totalScore + singleLutz;
  console.log(totalScore);
};

document.getElementById("singleAxel").onclick = function() {
  totalScore = totalScore + singleAxel;
  console.log(totalScore);
};

document.getElementById("doubleSalchow").onclick = function() {
  totalScore = totalScore + doubleSal;
  console.log(totalScore);
};

document.getElementById("doubleToe").onclick = function() {
  totalScore = totalScore + doubleToe;
  console.log(totalScore);
};

document.getElementById("doubleLoop").onclick = function() {
  totalScore = totalScore + doubleLoop;
  console.log(totalScore);
};

document.getElementById("doubleFlip").onclick = function() {
  totalScore = totalScore + doubleFlip;
  console.log(totalScore);
};

document.getElementById("doubleLutz").onclick = function() {
  totalScore = totalScore + doubleLutz;
  console.log(totalScore);
};

document.getElementById("doubleAxel").onclick = function() {
  totalScore = totalScore + doubleAxel;
  console.log(totalScore);
};

document.getElementById("tripleSalchow").onclick = function() {
  totalScore = totalScore + tripleSal;
  console.log(totalScore);
};

document.getElementById("tripleToe").onclick = function() {
  totalScore = totalScore + tripleToe;
  console.log(totalScore);
};

document.getElementById("tripleLoop").onclick = function() {
  totalScore = totalScore + tripleLoop;
  console.log(totalScore);
};

document.getElementById("tripleFlip").onclick = function() {
  totalScore = totalScore + tripleFlip;
  console.log(totalScore);
};

document.getElementById("tripleLutz").onclick = function() {
  totalScore = totalScore + tripleLutz;
  console.log(totalScore);
};

document.getElementById("tripleAxel").onclick = function() {
  totalScore = totalScore + tripleAxel;
  console.log(totalScore);
};

function finalScore(){
  document.getElementById(totalScore);
}
