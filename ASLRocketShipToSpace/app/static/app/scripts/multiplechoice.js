//each image has a image source and a letter
class ASLQuestion {
    constructor(character) {
        this.letter = character;
        this.image = "/static/app/signs/letter_" + character + ".png";
    }
}

loadGame();

function loadGame() {
    //GAME SETUP
    //array of alphabet and numbers, index is 0 to 25
    const ASLArray = "ABCDEFHIJKLMNOPQRSTUVWXYZ".split('');

    //grab buttons as vars to manipulate thier text with DOM
    var buttonOne = document.getElementById("optionOne");
    var buttonTwo = document.getElementById("optionTwo");
    var buttonThree = document.getElementById("optionThree");
    var buttonFour = document.getElementById("optionFour");

    //grab image to replace
    var questionImage = document.getElementById("questionImage");

    //store buttons in an array to traverse through
    const buttonList = [buttonOne, buttonTwo, buttonThree, buttonFour]

    //QUESTION GENERATION
    //create alphabet to be the question, random selection from 0-25
    const randNum = Math.floor(Math.random() * 25);
    //use randNum as index in the alphabet, this will be the letter the user has to figure out
    const question = new ASLQuestion(ASLArray[randNum]);
    
    //make the image, the question
    questionImage.src = question.image;

    //SET UP USER CHOICES
    //one of the 4 choices has to be the question.letter, randomly choose a button
    const randButton = Math.floor(Math.random() * 4);
    //change text of the button to the answer
    buttonList[randButton].innerText = question.letter;

    //new list of characters that DOESNT have the answer
    wrongCharacterList = [...ASLArray];
    wrongCharacterList.splice(randNum, 1); //takes out the answer

    //new list of buttons that are NOT the answers
    wrongButtonList = [...buttonList];
    wrongButtonList.splice(randButton, 1);

    //for loop to set the text of the buttons
    var charRange = 24;
    for (i = 0; i < wrongButtonList.length; i++) {
        //random choice with one letter removed
        const randWrongChoice = Math.floor(Math.random() * charRange);
        wrongButtonList[i].innerText = wrongCharacterList[randWrongChoice];

        //remove that letter that was just used so its not used again
        wrongCharacterList.splice(randWrongChoice, 1);
        charRange--;

    }

    //add an event listener for all the buttons
    for (i = 0; i < buttonList.length; i++) {
        buttonList[i].addEventListener("click", function () {
            determineWinner(this, question);
        });
    }

    //when a button is clicked, determine if they are the winner
    function determineWinner(btn, qstn) {
        if (btn.innerText == qstn.letter) {
            console.log("Correct!");
        }
    }
};

//todo this should repeat the game 5 times but it doesnt work
// var numGamesPlayed = 1;
// while (numGamesPlayed < 6) {
//     document.getElementById("gameCounter").textContent = numGamesPlayed
//     loadGame();
//     numGamesPlayed++;
// }


