var clearEl = document.getElementById("clr-scores");
var highScoresList = document.getElementById("highscores-list");

function printHighscores() {
    
    var highscore = JSON.parse(localStorage.getItem("userScores"));     
    var sortedHighscore = highscore.reverse();
        
    
    //console.log(sortedHighscore);
    // format new score object for current user
    if (sortedHighscore !== null) {
        for(var i = 0; i < sortedHighscore.length; i ++){
            console.log(sortedHighscore[i].userInitials);
            console.log(sortedHighscore[i].userScores);
            var li = document.createElement("li");
            li.textContent = sortedHighscore[i].userInitials + " " + sortedHighscore[i].userScores
            console.log(li);
            console.log(li.textContent);
            highScoresList.appendChild(li);        
        }
    }   

}

function clearScores(event) {
    event.preventDefault();
    localStorage.clear();
    console.log("test");
    window.location.reload();
}

printHighscores();


clearEl.addEventListener("click", clearScores);
