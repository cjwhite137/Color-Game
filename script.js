var numSquares = 6; 
var colors = [];
var squares = document.getElementsByClassName("square");
var pickedColor; 
var rgbDisplay = document.querySelector("h1 span"); 
var answerDisplay = document.getElementById("answer");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode"); 

init(); 

/**********************
	   Functions
*//////////////////////

function init(){
	"use strict"; 
	resetButton.addEventListener("click", reset); 
	setupMode();
	squareChanger();
	reset();	
}

function setupMode(){
	"use strict"; 		
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", changeMode);
	}
}

function changeMode(){
	"use strict"; 
	modeButtons[0].classList.remove("selected"); 
	modeButtons[1].classList.remove("selected"); 
	this.classList.add("selected");	
	this.textContent === "Easy" ? numSquares = 3: numSquares = 6; 
	reset();	
}

function squareChanger(){
	"use strict"; 
	for (var i = 0; i < squares.length; i++){
		
		//Add Initial Color to Squares
		squares[i].style.backgroundColor = colors[i]; 
		
		//Add Click Listeners to Squares
		squares[i].addEventListener("click",showAnswer);		
	}
}

function showAnswer() {
	"use strict"; 
	//Grab Color of Clicked Square
	var clickedColor = this.style.backgroundColor; 
	
	//Compare color to pickedColor
	if(clickedColor === pickedColor){
		answerDisplay.textContent = "Correct!";
		changeColors(clickedColor); 
		h1.style.backgroundColor = clickedColor;
		resetButton.textContent = "Play Again?"; 			
	} else { 
		this.style.backgroundColor = "#222222";
		answerDisplay.textContent = "Try again"; 
		//this.classList.add("incorrect");		
	}
}

function changeColors(color){
	"use strict"; 
	//Loop through all squares 
	for (var i = 0; i < squares.length; i++){
		//Change each color to match given color
		squares[i].style.backgroundColor = color; 	
	}
}

function pickColor(){
	"use strict"; 
	//Pick a random number	
	var random = Math.floor(Math.random() * colors.length);
	return colors[random]; 
}

function generateRandomColors(num){
	"use strict"; 
	//Make an Array
	var arr = []; 
	
	//Get Random Color & Repeat Num Times	
	for (var i = 0; i < num; i++){
		// Get Random Color & Push into Array
		arr.push(randomColor());		
	}
	
	//Return that array
	return arr; 
}

function randomColor(){
	"use strict"; 
	//pick a "red" from 0 - 255	
	var r = Math.floor(Math.random() *  256);
	
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() *  256);
		
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() *  256);
	
	return "rgb(" + r + ", " + g + ", " + b + ")"; 
			
}

function reset(){
	"use strict"; 
	//Generate All New Colors
	
	colors = generateRandomColors(numSquares);
	
	//Pick A new Random Color from Array
	
	pickedColor = pickColor(); 
	
	//Change ColorDisplay to match picked Color 
	
	rgbDisplay.textContent = pickedColor;
	
	//Change colors of Squares	
	
	//squareChanger();
	
	for (var i = 0; i < squares.length; i++){
		
		//Add Initial Color to Squares & Hide Squares if Necessary
		
		if(colors[i]){
			squares[i].style.display = "block";	
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";	
		}
		
	}
	
	h1.style.backgroundColor = "#4682b4";
	answerDisplay.textContent = "";
	resetButton.textContent = "New Colors";
}




