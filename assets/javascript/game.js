var wordList = ["Lighthouse", "Boardwalk", "Beach", "Sand", "Waves", "Seagull", "Seashell", "Shark", "Dolphin"];
	
	//declared variables
	var randomWord = wordList[Math.floor(Math.random() * wordList.length)]; //generate word to be guessed from list
	var wordlength = randomWord.length //redundant  
	var guessesArr = []; //userKey guesses pushed here for comparison
	var wordArr = randomWord.split(""); //generates strings of individual letters from randomWord
	var underSarray = []; //array of underscores == wordArr
	var ans = document.querySelector("#answer");
	var score = document.querySelector("#score");
	var guess = document.querySelector("#guess");
	var guesses = document.querySelector("#guesses");
	var lettersArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var answer = document.querySelector("#answer");

	
	//userKey = guess a letter && push guess into array for guesses.
	document.onkeyup = function(event) {
		var userKey = event.key;
		guess.textContent = " " + userKey;
		if (guess !== lettersArr.indexOf(guess);
			alert("Please choose a letter");
		
		else(guessesArr.push(userKey));


		console.log("Guess Array: " + guessesArr);	

			function checkGuess(guess) {
					if (guess !== lettersArr.indexOf(guess)); {
				alert("Please choose a letter");
					};

				//if (guess !== guessesArr.indexOf(guess));{ 
				//	for (var i = 0; [i] < wordArr; i++){
				//	if (i == wordArr.indexOf(guess));
				//	};
				//	
				//	}

					//else (guess == guessesArr.indexOf(guess))
					//}
						
			};



		};	
		//insUndScore takes random word and pushes 
			function insUndScore(randomWord) {
			for (var i = 0;  i < randomWord.length; i++) { 
				underSarray.push("_");
				answer.innerHTML += "_ ";
			}
			console.log(underSarray);
			console.log(wordArr);

		
	};

			


			 
		


//		function 

//		var underScores = insUndScore(randomWord)

//		var checkGuess = function(wordArr) {
//			if (wordArr.indexOf(userKey) == true){
//				wordArr.splice(userKey)
//			}

//		};
//gamestart();
	
insUndScore(randomWord);

console.log(wordArr);
checkGuess(guess);
console.log(guessesArr.indexOf(wordArr));

	
	//	function checkGuess(userKey) {
	//		for (var i = 0;  i < indexOf(wordArr); i++) { 
	//	 	console.log(indexOf(wordArr));
	//	 		};
	
	//console.log(wordArr);
//	insUndScore();

//	document.write(insUndScore(wordLength));

//    for(var i = 0; i < wordUsed.length; i++)
 //   {
//        if(input == wordUsed.substring(i, i + 1))
 //       {
//            correctGuess = true;
//            placeHolder = placeHolder.substring(0, i) + input + placeHolder.substring(i + 1, placeHolder.length + 1);
//            document.getElementById("placeHolder").innerHTML = placeHolder;
 //       }
//    }