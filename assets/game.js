//Javascript Pseudocode:

//Variable Assignments: 
//1. Add variables to hold the values of the crystals 
//2. Add variable to hold randomly generated score
//3. Add varible to hold user's score
//4. Add variable to hold wins and losses 

//Jquery/onclick Assignments:
//   - crystals need random number assignment
//	 - need to add crystal value to existing score with each click 
//	 - wins/loss ++ --
//	 - notification saying "you win or lose"
//   - a link to the user's total score 

//Conditional Statements:
//	 - if user meets random number, they win 
//	 - if user goes over, they lose 

//1. documents needs a function to clear and restart 
$(document).ready(function() {


//crystal variables
//var indigoValue = Math.floor((Math.random() * 120) + 33);
//indigoValue.toString();


//number variables
var randomNumber = Math.floor((Math.random() * 120) + 30);
var indigoValue = Math.floor((Math.random() * 12) + 1 );
var violetValue = Math.floor((Math.random() * 12) + 1 );
var blueValue = Math.floor((Math.random() * 12) + 1 );
var roseValue = Math.floor((Math.random() * 12) + 1 );
var totalScore = 0;

//wins/losses variables
var wins = 0;
var losses = 0; 



//sets random number for user to match 
var randomNumber = Math.floor((Math.random() * 120) + 30);
$("#randomNumber").append(randomNumber);
  randomNumber = parseInt(randomNumber);




//sets click functions for Indigo Crystal 
$("#indigoCrystal").on("click", function() {
 indigoValue = parseInt(indigoValue);



totalScore += indigoValue;
$("#score").text(totalScore);
console.log(totalScore);

if (totalScore === randomNumber) { 
	$("#result").html("You Win!");
wins++};

if (totalScore > randomNumber) {
	$("#result").html("You Lose!");
losses++};

	});




//sets click functions for Violet Crystal
$("#violetCrystal").on("click", function() {

violetValue= parseInt(violetValue);

totalScore += violetValue;
$("#score").text(totalScore);
console.log(totalScore);

if (totalScore === randomNumber) { 
	$("#result").html("You Win!");
wins++};

if (totalScore > randomNumber) {
	$("#result").html("You Lose!");
losses++};


});

//sets click functions for Blue Crystal
$("#blueCrystal").on("click", function() {
blueValue= parseInt(blueValue);

totalScore += blueValue;
$("#score").text(totalScore);
console.log(totalScore);


if (totalScore === randomNumber) { 
	$("#result").html("You Win!");
wins++};

if (totalScore > randomNumber) {
	$("#result").html("You Lose!");
losses++};

	});



//sets click functions for Rose Crystal
$("#roseCrystal").on("click", function() {

roseValue= parseInt(roseValue);


totalScore += roseValue;
$("#score").text(totalScore);
console.log(totalScore);

if (totalScore === randomNumber) { 
	$("#result").html("You Win!");
wins++};

if (totalScore > randomNumber) {
	$("#result").html("You Lose!");
losses++};

	
	});

function reset() {
	randomNumber = Math.floor((Math.random() * 120) + 30);
	indigoValue = Math.floor((Math.random() * 12) + 1 );
	violetValue = Math.floor((Math.random() * 12) + 1 );
	blueValue = Math.floor((Math.random() * 12) + 1 );
	roseValue = Math.floor((Math.random() * 12) + 1 );
	totalScore = 0;


}

});



//resets random number and result, but keeps total wins and losses
// need to be able to add the clicks together instead of just appending them to screen 
//need to keep the values of each crystal constant through each session

