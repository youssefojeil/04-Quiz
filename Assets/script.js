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
var currentQuestionIndex = 0;
var currentQuestion;
var timerCount;
var timer;

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
var endEl = document.getElementById("end-screen");
var questionEl = document.getElementById("questions");
var questionTitle = document.getElementById("question-titles");
var choices = document.getElementById("choices");
var startContainer = document.getElementById("start-screen");
var timerEl = document.getElementById("timer");
var finalScoreEl = document.getElementById("final-score");
var submitEl = document.getElementById("submit");
var highScoresList = document.getElementById("highscores-list");



// start the quiz
function startQuiz(){
    // hide start screen
    hideStart();
    // un-hide questions section
    questionEl.classList.add("show");
    // start timer
    timerEl.textContent = timerCount;
    startTimer();
    // run getQuestion Function
    getQuestion();
}

function getQuestion() {
    // get current question object from array
    currentQuestion = questions[currentQuestionIndex];
    console.log(currentQuestion);
    // update title with current question
    questionTitle.textContent = currentQuestion.question;
    // clear out any old question choices
    choices.innerHTML = "";

    console.log(currentQuestion.choices.length);
    // loop over choices 
    for(var i = 0; i < currentQuestion.choices.length; i ++) {
        
         // create new buttons for each choice
        var button = document.createElement("button");
        
        console.log(currentQuestion.choices[i]);
        
        // display on the page
        button.textContent = currentQuestion.choices[i];
        button.setAttribute("data", currentQuestion.choices[i]);
        choices.appendChild(button);
    }        
}

// function for clicking an answer

function userAnswer(event) {

    //log correct answer
    console.log(currentQuestion.answer);
    // stores event in element
    var element = event.target;
    console.log(element);

    // checks if element is a button
    if (element.matches("button") === true) {
        
        // get data out of button clicked
        var userInput = element.getAttribute("data");
        console.log(userInput);
    }

    // check if user guessed wrong
    if (userInput !== currentQuestion.answer) {
    // penalize time
    timerCount = timerCount - 10;
  
    // display new time on page
    timerEl.textContent = timerCount;
    // give them feedback, letting them know it's wrong
    alert("Answer Selected is Wrong!");
    } 
    
    else {
      // give them feedback, letting them know it's right
      alert("Answer Selected is Right!");
    }
  
    // flash right/wrong feedback on page for a short period of time
  
    // move to next question
    currentQuestionIndex++;
    console.log("current question index: " + currentQuestionIndex);
    console.log("Total number of questions: " + questions.length);
    // check if we've run out of questions
    if(currentQuestionIndex === questions.length){
        // if so, end the quiz
        quizEnd();
    }
      
    // else, get the next question
    else{
        getQuestion();
    }
}

// End the quiz
function quizEnd() {
    // stop timer
    clearInterval(timer);
    // show end screen
    endEl.classList.add("show");
    questionEl.classList.remove("show");
    //show final score
    finalScoreEl.textContent = timerCount;
    
}

// function for updating time

function startTimer() {
    timerCount = 100;
    timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;
    }, 1000);
}

function saveHighscore() {

    // get value of input box - for initials
    var initials = document.getElementById("initials").value;
    
    // if has value then it will grab them if not then empty array.
    var localScores = JSON.parse(localStorage.getItem("userScores")) || [];
    
    console.log(initials);
    //console.log(highScoresList);

    var userScores = {
        userInitials: initials,
        userScores: timerCount
    }
    
    // push object userScores into array localScores
    localScores.push(userScores);

    // save to local storage
    localStorage.setItem("userScores", JSON.stringify(localScores));
    
    // get saved scores from localstorage, or if not any set to empry array
    var highscore = JSON.parse(localStorage.getItem("userScores")); 
    
    var sortedHighscore = highscore.reverse();

    // redirect to next page
    //location.href = "./highscores.html";
    
    console.log(sortedHighscore);
    // format new score object for current user
    if (sortedHighscore !== null) {
        for(var i = 0; i < sortedHighscore.length; i ++){
            console.log(sortedHighscore[i].userInitials);
            console.log(sortedHighscore[i].userScores);
            var li = document.createElement("li");
            li.textContent = sortedHighscore[i].userInitials + " " + sortedHighscore[i].userScores
            console.log(li);
            console.log(li.textContent);
            //highScoresList.appendChild(li);        
        }
       
       //console.log("console logging li: " , li);
       //console.log("console logging highscore.userInitials: " , highscore.userInitials);
       //console.log("console logging highscore.userScores: " , highscore.userScores);
       //li.textContent = highscore.userInitials + " " , highscore.userScores;
       //console.log(li.textContent);
       //console.log(li);
      // highScoresList.appendChild(li);
    }

        
}

function hideStart() {
    startContainer.classList.remove("show");
    startContainer.classList.add("hide");
}


// click events
startEl.addEventListener("click", startQuiz);
choices.addEventListener("click", userAnswer);
submitEl.addEventListener("click", saveHighscore);