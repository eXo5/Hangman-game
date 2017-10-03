var guessesLeft;
	//our metaphorical toolbox
	var toolbox = ["hammer", "drill", "nails", "screws", "flathead screwdriver"];
	//where guesses get stored after they're clicked
	var guesses = [];
	var pickAWordAnyWord;
	pickAWordAnyWord = toolbox[Math.floor(Math.random() * toolbox.length)]
	//.split() is an inherent function in javascript that 'splits' a string into individual words or letters depending on the separator you use.
	var pickedWord = pickAWordAnyWord.split("");
	//Effectively, we'll use this to modify the pickedWord.
	var wordToGuess;

	//console.log the word for testing purposes that way you're not playing hangman while you're working on it haha
	console.log(pickAWordAnyWord)
	//Start the game by clicking "Play A Game" button

$("button").click(function(){
	$("#wordClue").html("<br /><p style='text-align:center'>This word can be found in a toolbox</p>")
	//declare vars

guessesLeft = 7;

	//alert(pickAWordAnyWord)
	//alert(toolbox[Math.floor(Math.random()* toolbox.length)])
	wordToGuess = [];
		for (var i = 0; i < pickAWordAnyWord.length; i++){
			wordToGuess.push("_")
		}
		console.log(wordToGuess)
	$("#word").html("<p style='text-align:center'>" + wordToGuess.join(" ") + "</p>");
	$("#pickALetter").html("<p style='text-align:center'>Press a key to guess a letter!</p>");
})
	
$(document).keyup(function(event) {
	var userKey = event.key;
		console.log(pickedWord)
		if (guessesLeft > 0){
			$("#guessesLeft").html("You have " + guessesLeft + " guesses left!")
		
	if (event.keyCode >= 65 && event.keyCode <= 90){
  	//check if the event that occurred was a letter 
		if (guesses.indexOf(userKey) == -1) {
			//check if the letter has been guessed before. 
			guesses.push(userKey);
			//then nest an if statement inside of an if statement to check if the key that hasn't been guessed before now is in the pickAWordAnyWord
			if (pickedWord.indexOf(userKey) > -1 ){
				var whereKey = pickedWord.indexOf(userKey); console.log(whereKey);
				//wordToGuess.splice(whereKey, 1, userKey); console.log(wordToGuess);
				//.map is what's called a higher level function. It's similar to the javascript built in methods, but it has predefined arguments that are required for functionality.
				pickedWord.map(function(element, i){
					if (element == userKey){
						wordToGuess[i] = userKey;
					}
				})
			 	$("#word").html("<p style='text-align:center'>" + wordToGuess.join(" ") + "</p>");
			}
		}	else if (guesses.indexOf(userKey) > -1 ) {
			alert("You already guessed that")
		} else if (pickedWord.indexOf(userKey) == -1){
			guessesLeft--;
			console.log(guessesLeft)
		}
		
		console.log(guesses); 
		$("#guessedLetters").html("<p style='text-align:center'>Guesses: " + guesses.join(" ") + "</p>")
	}else{
		alert("Please pick a letter :)")
	}//end if event.keyCode

	}else if (guessesLeft <= 0){
			$("#hangman").html("Better luck next time!" + "<button>Play again?</button>")
		}
	
})
