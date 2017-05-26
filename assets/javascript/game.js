	
	var wordList = ["lighthouse", "boardwalk", "beach", "sand", "waves", "seagull", "seashell", "shark", "dolphin"];
	//$ not defined = no jQuery 
	//declared variables
	var randomWord = wordList[Math.floor(Math.random() * wordList.length)]; //generate word to be guessed from list
	var wordlength = randomWord.length //redundant  
	var guessesArr = []; //userKey guesses pushed here for comparison
	var wordArr = randomWord.split(""); //generates strings of individual letters from randomWord
	var underSarray = []; //array of underscores == wordArr
	var ans = document.querySelector("#answer");
	var score = document.querySelector("#score");
	var guess = document.querySelector("#guess");
	var guessLeft = document.querySelector("#guessesLeft");
	var g1 = document.querySelector("#guesses");
	var guesses = 7; //use document.querySelector to html guesses into the span id=guessesLeft.
	//var document.querySelector("#guesses");
	var lettersArr = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var answer = document.querySelector("#answer");

//this function doesn't work as intended, but it was supposed to start a new word =\
	

		function checkGuess(userKey){
			if (lettersArr.indexOf(userKey) == -1){ 
				alert("Please choose a letter");
			}
					//if not in word and not in guessArr
				if ((wordArr.indexOf(userKey) == -1) && (guessesArr.indexOf(userKey) == -1)) {
					guessesArr.push(userKey);
					--guesses;
					guessLeft.textContent = (guesses + " guesses left."); 
				}
			else {
					for (var i = 0; i < wordArr.length; i++)
					 	if (userKey == wordArr[i]) {
					 	//var x = wordArr.indexOf(userKey);
						underSarray[i] = userKey;
						

						//x = wordArr.indexOf(userKey, x+1);
						answer.innerHTML = underSarray.join(" ");
					}
				}
		 };
		 //insUndScore takes random word and pushes underscores onto span #answer
		function insUndScore(randomWord) {
			for (var i = 0;  i < randomWord.length; i++) { 
				underSarray.push("_");
				answer.innerHTML = underSarray.join(" ");
				//answer.innerHTML = underSarray; left this out because it included the commas associated with the underscore array
			}

			console.log(underSarray);
			console.log(wordArr);	
		}	

		console.log("randomword:" + randomWord);
		insUndScore(randomWord);

	function game(guesses) {
		var losses = x;
		if (guesses = 0);
			insUndScore(randomWord);
		alert("Please Try Again");
	};
	//userKey = guess a letter && push guess into array for guesses.
	document.onkeyup = function(event) {
		var userKey = event.key;
		guess.textContent = " " + userKey;
		g1.textContent = guessesArr.join(" ");
		checkGuess(userKey)
		console.log("guessesArr: " + guessesArr);
		

		}

		//game(guesses);