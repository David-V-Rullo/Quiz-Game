var rootEl = $("#root");

var timer;
var timerCount;
var answerA = $("#answer-A");
var answerB = $("#answer-B");
var answerC = $("#answer-C");
var answerD = $("#answer-D");
var questionText = $("#question-text");
var submitButton = $("#submit-button");
var startButton = $("#start-button");
var timerText = $("#timer-counter");
//Variables for storing correct and incorrect answers; to be passed to high score and local storage.
var correctAnswer = 0;
var wrongAnswer = 0;
var chosenQuestion = {};
//Use a function to randomly choose the next question
//Function to render the question in the box.
function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerText.text(timerCount);
    if (timerCount === 0) {
      return;
    }
  }, 1000);
}
function pullQuestion(arr) {
  var random = Math.floor(Math.random() * arr.length);
  var randQuestion = arr[random];

  return randQuestion;
}
function startGame() {
  console.log("It started");
  timerCount = 15;
  renderQuestion();
  startTimer();
}
function renderQuestion() {
  //Uses random number to pull a question
  chosenQuestion = pullQuestion(questions);
  //Populate the various fields needed to show the question and possible answers to user
  questionText.text(chosenQuestion.question);
  answerA.next().text(chosenQuestion.optA);
  answerB.next().text(chosenQuestion.optB);
  answerC.next().text(chosenQuestion.optC);
  answerD.next().text(chosenQuestion.optD);
  answerA.val(chosenQuestion.optA);
  answerB.val(chosenQuestion.optB);
  answerC.val(chosenQuestion.optC);
  answerD.val(chosenQuestion.optD);
  return chosenQuestion;

  //Traverse DOM and create all the elements based on the object.
  //First element is chosenQuestion.question
  //Create children using radio buttons with chosenQuestion.optA,B,C,D...etc
}

// console.log(chosenQuestion)
// console.log($('input:checked'))

// Check the input and compare against the correct answer key in obj(questions)
function handleAnswerSubmit(event) {
  event.preventDefault();
  timerCount = 15;
  var submittedAnswer = $("input:checked");
  console.log(submittedAnswer);
  if (submittedAnswer === chosenQuestion.correctAnswer) {
    correctAnswer++;
  } else {
    wrongAnswer++;
  }
  localStorage.setItem("Correct", correctAnswer);
  localStorage.setItem("Wrong", wrongAnswer);
}

startButton.on("click", startGame);
submitButton.on("submit", handleAnswerSubmit);
