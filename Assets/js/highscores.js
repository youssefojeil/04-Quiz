var clearEl = document.getElementById("clr-scores");
var highScoresList = document.getElementById("highscores-list");

// print highscores function
function printHighscores() {
    
    // get data from local storage and store into highscore
    var highscore = JSON.parse(localStorage.getItem("userScores")) || [];     
    
    // sort user scores in descending order storing into soortedhighscore
    var sortedHighscore = highscore.sort((user1, user2) => {
        return user2.userScores - user1.userScores;
    });

    // create new li for every new high score
    if (sortedHighscore !== null) {
        for(var i = 0; i < sortedHighscore.length; i ++){
            console.log(sortedHighscore[i].userInitials);
            console.log(sortedHighscore[i].userScores);
            var li = document.createElement("li");
            li.textContent = sortedHighscore[i].userInitials + " - " + sortedHighscore[i].userScores
            console.log(li);
            console.log(li.textContent);
            highScoresList.appendChild(li);        
        }
    }   
}

// clear local storage of highscores
function clearScores(event) {
    event.preventDefault();
    localStorage.clear();
    console.log("test");
    window.location.reload();
}

// runs on page load 
printHighscores();

// event listener to clear score button
clearEl.addEventListener("click", clearScores);
