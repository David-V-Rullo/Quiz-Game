var rootEl = $("#root")
var questions = [
  (questionOne = {
    question:
      "What amendment to the Constitution protects the freedom of speech?",
    optA: "14th",
    optB: "2nd",
    optC: "5th",
    optD: "1st",
    correctAnswer: "answer-D",
  }),
  (questionTwo = {
    question: "What element of a crime reflects an individual's state of mind?",
    optA: "Res Judicata",
    optB: "Mens Rea",
    optC: "Proximate Cause",
    optD: "Fault",
    correctAnswer: "answer-B",
  }),
  (questionThree = {
    question:
      "Which of the following is not required to form a contract under the UCC?",
    optA: "A price",
    optB: "Acceptance",
    optC: "Consideration",
    optD: "An Offer",
    correctAnswer: "answer-A",
  }),
  (questionFour = {
    question: "What year did the U.S. ratify it's current Constitution?",
    optA: "1789",
    optB: "1776",
    optC: "1985",
    optD: "1781",
    correctAnswer: "answer-A",
  }),
  (questionFive = {
    question:
      "What amendment to the Constitution grants the right to a jury trial",
    optA: "5th",
    optB: "8th",
    optC: "14th",
    optD: "6th",
    correctAnswer: "answer-D",
  }),
];
var timer;
var timerCount;
var answerA = $("#answer-A");
var answerB = $("#answer-B");
var answerC = $("#answer-C");
var answerD = $("#answer-D");
var questionText = $("#question-text");
var submitButton = $("#submit-button");
var startButton = $("#start-button");
var timerText = $("#timer-counter")
//Variables for storing correct and incorrect answers; to be passed to high score and local storage. 
var correctAnswer = 0;
var wrongAnswer = 0;
var chosenQuestion = {};
//Use a function to randomly choose the next question
//Function to render the question in the box.
function startTimer() {
    timer = setInterval(function(){
        timerCount--;
        timerText.text(timerCount);
        if (timerCount === 0) {
            return 
        }
    }, 1000)
}
function pullQuestion(arr) {
  var random = Math.floor(Math.random() * arr.length);
  var randQuestion = arr[random];

  return randQuestion;
}
function startGame() {
    console.log("It started")
    timerCount = 15;
    renderQuestion()
    startTimer()
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
    timerCount = 15
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
