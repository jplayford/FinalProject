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
var quadToe = 9.5;
var quadSal = 9.7;
var quadLoop = 10.5;
var quadFlip = 11;
var quadLutz = 11.5;
var quadAxel = 12.5;

//total score variable
var totalScore = 0;

//variables for edge buttons + deductions(fall)
var esingleLutz = 0.4;
var edoubleLutz = 1.58;
var etripleLutz = 4.43;
var equadLutz = 8.63;
var fall = 1;

//spin Values
var ubase = 1;
var u1 = 1.2;
var u2 = 1.5;
var u3 = 1.9;
var u4 = 2.4;
var lbase 1.2;
var l1 = 1.5;
var l2 = 1.9;
var l3 = 2.4;
var l4 = 2.7;
var cbase = 1.1;
var c1 = 1.4;
var c2 = 1.8;
var c3 = 2.3;
var c4 = 2.6;
var sbase = 1.1;
var s1 = 1.3;
var s2 = 1.6;
var s3 = 2.1;
var s4 = 2.5;
var combobase = 1.5;
var combo1 = 1.7;
var combo2 = 2;
var combo3 = 2.5;
var combo4 = 3;
var ccospbase = 1.7;
var ccosp1 = 2;
var ccosp2 = 2.5;
var ccosp3 = 3;
var ccosp4 = 3.5;


//creating .onclick functions for jump buttons
document.getElementById("singleSalchow").onclick = function() {
  totalScore = totalScore + singleSal;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("singleToe").onclick = function() {
  totalScore = totalScore + singleToe;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("singleEuler").onclick = function() {
  totalScore = totalScore + singleEuler;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("singleLoop").onclick = function() {
  totalScore = totalScore + singleLoop;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("singleFlip").onclick = function() {
  totalScore = totalScore + singleFlip;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("singleLutz").onclick = function() {
  totalScore = totalScore + singleLutz;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("singleAxel").onclick = function() {
  totalScore = totalScore + singleAxel;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("doubleSalchow").onclick = function() {
  totalScore = totalScore + doubleSal;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("doubleToe").onclick = function() {
  totalScore = totalScore + doubleToe;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("doubleLoop").onclick = function() {
  totalScore = totalScore + doubleLoop;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("doubleFlip").onclick = function() {
  totalScore = totalScore + doubleFlip;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("doubleLutz").onclick = function() {
  totalScore = totalScore + doubleLutz;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("doubleAxel").onclick = function() {
  totalScore = totalScore + doubleAxel;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("tripleSalchow").onclick = function() {
  totalScore = totalScore + tripleSal;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("tripleToe").onclick = function() {
  totalScore = totalScore + tripleToe;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("tripleLoop").onclick = function() {
  totalScore = totalScore + tripleLoop;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("tripleFlip").onclick = function() {
  totalScore = totalScore + tripleFlip;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("tripleLutz").onclick = function() {
  totalScore = totalScore + tripleLutz;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("tripleAxel").onclick = function() {
  totalScore = totalScore + tripleAxel;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("quadSalchow").onclick = function() {
  totalScore = totalScore + quadSal;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("quadToe").onclick = function() {
  totalScore = totalScore + quadToe;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("quadLoop").onclick = function() {
  totalScore = totalScore + quadLoop;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("quadFlip").onclick = function() {
  totalScore = totalScore + quadFlip;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("quadLutz").onclick = function() {
  totalScore = totalScore + quadLutz;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("quadAxel").onclick = function() {
  totalScore = totalScore + quadAxel;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};


//deductions and edge call .onclick functions

document.getElementById("fall").onclick = function() {
  totalScore = totalScore - fall;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("edgesingleL").onclick = function() {
  totalScore = totalScore - singleLutz + esingleL;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("edgedoubleL").onclick = function() {
  totalScore = totalScore - doubleLutz + edoubleL;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("edgetripleL").onclick = function() {
  totalScore = totalScore - tripleLutz + etripleL;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("edgequadL").onclick = function() {
  totalScore = totalScore - quadLutz + equadL;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};


//displays total score on the html page

function finalScore() {
  document.getElementById('totalScore').innerHTML = totalScore;
}
