var scoresEl = $("#scores");
var highscoreEl = $("#highscoreBtn");

//prints out the highscores
function printScores(){
    console.log("Printing scores");
    scoresEl.empty();
    //function that retrieves scores from local storage
    //display on page
    var text = JSON.parse(localStorage.getItem('scores'));
    if(text && text.length > 0){
        text.forEach(function(item){
            scoresEl.append($("<h3>").text(item.name + ": " + item.score));
        });
    }
}

//Prints scores when the pages loads
window.addEventListener("load", printScores);