// Set Up Global Variables
var currentQuestionIndex = 0;
var currentQuestion;
var timerCount;
var timer;

var questions = [
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        choices: [
            "var",
            "let",
            "Both A and B",
            "None of the above"
        ],
        answer: "Both A and B"
    },

    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        choices: [
            "getElementbyId()",
            "getIdbyElement()",
            "var",
            "get.Element.by.Id()"
        ],
        answer: "getElementbyId()"
    },

    {
        question: "Which of the following tag is used for inserting the largest heading in HTML?",
        choices: [
            "<h3>",
            "<h1>",
            "<h6>",
            "<h5>"
        ],
        answer: "<h1>"
    },
    
    {
        question: "How do you create an unordered list in HTML?",
        choices: [
            "<ol>",
            "<li>",
            "<i>",
            "<ul>"
        ],
        answer: "<ul>"
    },
    
    {
        question: "The property in CSS used to change the background color of an element is?",
        choices: [
            "bgcolor",
            "color",
            "background-color",
            "all of the above"
        ],
        answer: "background-color"
    },
    {
        question: "The HTML attribute used to define the internal stylesheet is?",
        choices: [
            "<style>",
            "style",
            "<link>",
            "<script>"
        ],
        answer: "<style>"
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




// start the quiz
function startQuiz(){
    // hide start screen
    hideStart();
    // un-hide questions section
    questionEl.classList.add("show");
    // start timer
    startTimer();
    // run getQuestion Function
    getQuestion();
}

function getQuestion() {
    // get current question object from array
    currentQuestion = questions[currentQuestionIndex];
  
    // update title with current question
    questionTitle.textContent = currentQuestion.question;
    
    // clear out any old question choices
    choices.innerHTML = "";
    
    // loop over choices 
    for(var i = 0; i < currentQuestion.choices.length; i ++) {
        
         // create new buttons for each choice
        var button = document.createElement("button");
           
        // add the choices to button texts & data attribute, append to screen
        button.textContent = currentQuestion.choices[i];
        button.setAttribute("data", currentQuestion.choices[i]);
        choices.appendChild(button);
    }        
}

// function for clicking an answer
function userAnswer(event) {

    // stores event in element
    var element = event.target;

    // checks if element is a button
    if (element.matches("button") === true) {
        // get data out of button clicked
        var userInput = element.getAttribute("data");
    }
    
    var feedback = document.createElement("p");
   
    // check if user guessed wrong
    if (userInput !== currentQuestion.answer) {
    // penalize time
    timerCount = timerCount - 10;
    // display new time on page
    timerEl.textContent = timerCount;
    // give them feedback, letting them know it's wrong
    feedback.textContent = "Wrong Answer!";
    feedback.classList.add("wrong");
    questionEl.append(feedback);
    } 
    
    else {
      // give them feedback, letting them know it's right
      feedback.textContent = "Correct Answer!";
      feedback.classList.add("correct");
      questionEl.append(feedback);
    }
  
    // flash right/wrong feedback on page for a short period of time
    setTimeout(function(){
        feedback.innerHTML = "";
        feedback.classList.remove("correct");
        feedback.classList.remove("wrong");
    }, "1000");
  
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
    questionEl.classList.add("hide");
    // show final score
    finalScoreEl.textContent = timerCount;
    
}


// start timer function from 100 to 0 - 1 sec intervals
function startTimer() {
    timerCount = 100;
    timer = setInterval(function() {
        timerCount--;
        if(timerCount == 0){
            quizEnd();
        }
        timerEl.textContent = timerCount;
    }, 1000);
}

// save highscore to local storage
function saveHighscore() {

    // get value of input box - for initials
    var initials = document.getElementById("initials").value;
    
    // if has value then it will grab them if not then empty array.
    var localScores = JSON.parse(localStorage.getItem("userScores")) || [];
    
    var userScores = {
        userInitials: initials,
        userScores: timerCount
    }
    
    // push object userScores into array localScores
    localScores.push(userScores);

    // save to local storage as string
    localStorage.setItem("userScores", JSON.stringify(localScores));
    
    // goes to highsore.html page
    location.href = "./highscores.html";
}

// hides start container
function hideStart() {
    startContainer.classList.remove("show");
    startContainer.classList.add("hide");
}

// click event to start quiz
startEl.addEventListener("click", startQuiz);
// click event for user choice
choices.addEventListener("click", userAnswer);
// click event to save highscore
submitEl.addEventListener("click", saveHighscore);
