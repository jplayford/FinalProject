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
var fall = 1.0;

//spin Values
var ubase = 1.0;
var u1 = 1.2;
var u2 = 1.5;
var u3 = 1.9;
var u4 = 2.4;
var lbase = 1.2;
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
var combo4 = 3.0;
var ccospbase = 1.7;
var ccosp1 = 2.0;
var ccosp2 = 2.5;
var ccosp3 = 3.0;
var ccosp4 = 3.5;

//adding step sequence and choreo step Values
var stepsqb = 1.5;
var stepsq1 = 1.8;
var stepsq2 = 2.6;
var stepsq3 = 3.3;
var stepsq4 = 3.9;
var chstep = 3.0;

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
  totalScore = totalScore - singleLutz + esingleLutz;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("edgedoubleL").onclick = function() {
  totalScore = totalScore - doubleLutz + edoubleLutz;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("edgetripleL").onclick = function() {
  totalScore = totalScore - tripleLutz + etripleLutz;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("edgequadL").onclick = function() {
  totalScore = totalScore - quadLutz + equadLutz;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

//spins .onclick functions

document.getElementById("ub").onclick = function() {
  totalScore = totalScore + ubase;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("u1").onclick = function() {
  totalScore = totalScore + u1;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("u2").onclick = function() {
  totalScore = totalScore + u2;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("u3").onclick = function() {
  totalScore = totalScore + u3;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("u4").onclick = function() {
  totalScore = totalScore + u4;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("lb").onclick = function() {
  totalScore = totalScore + lbase;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("l1").onclick = function() {
  totalScore = totalScore + l1;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("l2").onclick = function() {
  totalScore = totalScore + l2;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("l3").onclick = function() {
  totalScore = totalScore + l3;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("l4").onclick = function() {
  totalScore = totalScore + l4;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("cb").onclick = function() {
  totalScore = totalScore + cbase;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("c1").onclick = function() {
  totalScore = totalScore + c1;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("c2").onclick = function() {
  totalScore = totalScore + c2;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("c3").onclick = function() {
  totalScore = totalScore + c3;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("c4").onclick = function() {
  totalScore = totalScore + c4;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("sb").onclick = function() {
  totalScore = totalScore + sbase;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("s1").onclick = function() {
  totalScore = totalScore + s1;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("s2").onclick = function() {
  totalScore = totalScore + s2;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("s3").onclick = function() {
  totalScore = totalScore + s3;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("s4").onclick = function() {
  totalScore = totalScore + s4;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("cob").onclick = function() {
  totalScore = totalScore + combobase;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("co1").onclick = function() {
  totalScore = totalScore + combo1;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("co2").onclick = function() {
  totalScore = totalScore + combo2;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("co3").onclick = function() {
  totalScore = totalScore + combo3;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("co4").onclick = function() {
  totalScore = totalScore + combo4;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("ccob").onclick = function() {
  totalScore = totalScore + ccospbase;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("cco1").onclick = function() {
  totalScore = totalScore + ccosp1;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("cco2").onclick = function() {
  totalScore = totalScore + ccosp2;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("cco3").onclick = function() {
  totalScore = totalScore + ccosp3;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("cco4").onclick = function() {
  totalScore = totalScore + ccosp4;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

//adding step sequence and choreo step buttons
document.getElementById("stsqb").onclick = function() {
  totalScore = totalScore + stepsqb;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("stsq1").onclick = function() {
  totalScore = totalScore + stepsq1;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("stsq2").onclick = function() {
  totalScore = totalScore + stepsq2;
  console.log(totalScore);
  document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("stsq3").onclick = function() {
    totalScore = totalScore + stepsq3;
    console.log(totalScore);
    document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("stsq4").onclick = function() {
    totalScore = totalScore + stepsq4;
    console.log(totalScore);
    document.getElementById('result').innerHTML = totalScore;
};

document.getElementById("chsp").onclick = function() {
    totalScore = totalScore + chstep;
    console.log(totalScore);
    document.getElementById('result').innerHTML = totalScore;
};

//displays total score on the html page
function finalScore() {
  document.getElementById('totalScore').innerHTML = totalScore;
}
