var pickedWord;
var guessesLeft;
var guesses;
var wordToGuess;
var pickAWordAnyWord;
$(document).on("click", "button", function(){
	console.log("button click")
		//our metaphorical toolbox
	var toolbox = ["hammer", "drill", "nails", "screws", "flathead screwdriver"];
	pickAWordAnyWord = toolbox[Math.floor(Math.random() * toolbox.length)];
	pickedWord = pickAWordAnyWord.split("");
	//declare vars
	guessesLeft = 7;
	wordToGuess = [];
	guesses = [];
		for (var i = 0; i < pickAWordAnyWord.length; i++){
			wordToGuess.push("_")
		}
		console.log(wordToGuess)

	$("#wordClue").html("<br /><p style='text-align:center'>This word can be found in a toolbox</p>")
	$("#word").html("<p style='text-align:center'>" + wordToGuess.join(" ") + "</p>");
	$("#pickALetter").html("<p style='text-align:center'>Press a key to guess a letter!</p>");
})//end button click
	
$(document).keyup(function(event) {
	var userKey = event.key;
	//console.log(pickedWord)
if (guessesLeft > 0) {
	if (event.keyCode >= 65 && event.keyCode <= 90){
  	//check if the event that occurred was a letter 
		if (guesses.indexOf(userKey) == -1) {
			//check if the letter has been guessed before. 
			guesses.push(userKey);
			if (pickedWord.indexOf(userKey) > -1 ){
				//then nest an if statement inside of an if statement to check if the key that hasn't been guessed before now is in the pickAWordAnyWord by verifying the value returned from the index search is greater than -1(it will return the position value of the index of the letter)
				var whereKey = pickedWord.indexOf(userKey); console.log(whereKey);
				//wordToGuess.splice(whereKey, 1, userKey); console.log(wordToGuess);
				//.map is what's called a higher level function. It's similar to the javascript built in methods, but it has predefined arguments that are required for functionality.
				pickedWord.map(function(element, i){
					if (element == userKey){
						wordToGuess[i] = userKey;
					}
				})
			 	$("#word").html("<p style='text-align:center'>" + wordToGuess.join(" ") + "</p>");
			}else {
				--guessesLeft;
				$("#guessesLeft").html("<p style='text-align:center'>" + guessesLeft + "<p> guesses left!</p>")
			}
		}	else if (guesses.indexOf(userKey) > -1 ) {
			alert("You already guessed that")
		} else if (pickedWord.indexOf(userKey) == -1){
			--guessesLeft;
			console.log(guessesLeft)
		}
	}//end if event.keyCode
	
		console.log(guesses); 
		$("#guessedLetters").html("<p style='text-align:center'>Guesses: " + guesses.join(" ") + "</p>")
}else{
	$("#hangman").html("Better Luck Next Time!<br /><button>Play Again?</button>")
}	
	
})
