# FinalProject

For my final project, I used Atom to write my code and stored it on Github

Resources:
International Judging system scale of values from U.S. figureskating: https://www.usfigureskating.org/content/2018-19%20SP%20Scale%20of%20Values.pdf
Score Keeper Example from codepen.io: https://codepen.io/nevan/pen/hAjtq/
Calculator Example from codepen.io:	https://codepen.io/cphemm/pen/reNwWd


I created this website to allow easier access to a calculator for figure skaters. During practice, it is very difficult to calculate
one's total score, because the scale of values is very long, daunting, and complex. With this website, one can simply press on the buttons
that correspond to the elements in their program and the website will automatically return their final technical score. 

This is targeted towards figure skaters and their coaches and serves to make practice sessions easeir and reduce the amount
of time wasted trying to calculate practice program scores. This also serves to inform skaters of what their practice programs
would have earned them in competition. 

How to Use:
Simply click the buttons that correspond to the jumps, spins, elements, and deductions that were performed in the program and 
look at the bottom of the HTML page for the total score. 

Within the HTML page I used tables to create the areas in which the code for the buttons and elements are kept. At first I created the 
buttons in java script, but later I realized that it was easier to format the buttons if they were created in HTML, rather than javascript.
I also changed the font of all of the buttons and the text in the tables to Cursive within CSS. I also used the <div> and <class>
dividers surrounding the tables, and the float in CSS to made the jumps and other elements tables display side by side. 
In Javascript, I imputed all of the values for the buttons and created a function for each button in which the button was clicked, 
the value of the variable associated with that button was either added or subtracted from the total score. 
