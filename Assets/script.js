/*```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
*/

// Set Up Global Variables
var currentQuestion = 0;
var time = 100;
var timerId = 0;

var questions = [
    {
        question: "Question 1",
        choices: [
            "Choice A",
            "Choice B",
            "Choice C",
            "Choice D"
        ],
        answer: "Choice A"
    },

    {
        question: "Question 2",
        choices: [
            "Choice D",
            "Choice C",
            "Choice B",
            "Choice A"
        ],
        answer: "Choice B"
    },

    {
        question: "Question 3",
        choices: [
            "Choice A",
            "Choice B",
            "Choice C",
            "Choice D"
        ],
        answer: "Choice C"
    },
    
    {
        question: "Question 4",
        choices: [
            "Choice D",
            "Choice C",
            "Choice B",
            "Choice A"
        ],
        answer: "Choice D"
    },
    
    {
        question: "Question 5",
        choices: [
            "Choice A",
            "Choice B",
            "Choice C",
            "Choice D"
        ],
        answer: "Choice A"
    },
    {
        question: "Question 6",
        choices: [
            "Choice D",
            "Choice C",
            "Choice B",
            "Choice A"
        ],
        answer: "Choice A"
    },
]    
    


// set up vars to reference DOM elements
var startEl = document.getElementById("start");
var questionEl = document.getElementById("questions");
var startContainer = document.getElementById("start-screen");
var questionContainer = document.getElementById("questions");
var timerEl = document.getElementById("timer");


// start the quiz
function startQuiz(){
    // hide start screen
    startContainer.classList.remove("show");
    startContainer.classList.add("hide");
    // un-hide questions section
    questionContainer.classList.add("show");
    // start timer
    timerEl.textContent = time;
    // run getQuestion Function
    getQuestion();
}

function getQuestion() {
    // get current question object from array

    // update title with current question

    // clear out any old question choices

    // loop over choices 
        // create new buttons for each choice

        // display on the page
}

// function for clicking an answer

function questionClick(event) {

    // if the clicked element is not a choice button, do nothing.
    if (something) {

    }
  
    if (something) {
    // check if user guessed wrong
      // penalize time
  
      // display new time on page
  
      // give them feedback, letting them know it's wrong
    } 
    
    else {
      // give them feedback, letting them know it's right
    }
  
    // flash right/wrong feedback on page for a short period of time
  
    // move to next question
  
    // check if we've run out of questions
      // if so, end the quiz
      // else, get the next question
}

// End the quiz
function quizEnd() {
    // stop timer

    // show end screen

    // show final score

    // hide questions section

}

// function for updating time

function clocktick() {

    // update time

    // check to see if user ran out of time
}

function saveHighscore() {
    // get value of input box - for initials

    // make sure value wasnt empty
        // get saved scores from localstorage, or if not any set to empry array
        
        // format new score object for current user

        // save to local storage

        // redirect to next page
}

// click events
startEl.addEventListener("click", startQuiz);