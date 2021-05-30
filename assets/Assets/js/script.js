var rootEl = $("#root");
var timer;
var timerCount;
var questionText = $("#question-text");
var answerButton = $("#answer-button");
var startButton = $("#start-button");
var timerText = $("#timer-counter");
//Variables for storing correct and incorrect answers; to be passed to high score and local storage.
var correctAnswer = 0;
var wrongAnswer = 0;
var chosenQuestion = {};
const questions = [
  {
    question:
      "What amendment to the Constitution protects the freedom of speech?",
    answers: [
      { text: "14th", correct: false },
      { text: "2nd", correct: false },
      { text: "5th", correct: false },
      { text: "1st", correct: true },
    ],
  },
  {question:
      "What element of a crime reflects an individual's state of mind?",
    answers: [
      { text: "Res Judicata", correct: false },
      { text: "Mens Rea", correct: true },
      { text: "Proximate Cause", correct: false },
      { text: "Fault", correct: false },
    ],
  },
  {question:
      "Which of the following is not required to form a contract under the UCC",
    answers: [
      { text: "A price", correct: true },
      { text: "Acceptance", correct: false },
      { text: "Consideration", correct: false },
      { text: "An Offer", correct: false },
    ]
},
  {question:
      "What year did the U.S. ratify it's current Constitution?",
    answers: [
      { text: "1789", correct: true },
      { text: "1776", correct: false },
      { text: "1985", correct: false },
      { text: "1781", correct: false },
    ]
},
  {question:
    "What amendment to the Constitution grants the right to a jury trial",
    answers: [
      { text: "5th", correct: false },
      { text: "8th", correct: false },
      { text: "14th", correct: false },
      { text: "6th", correct: true },
    ]
  }]

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
  timerCount = 75;
  renderQuestion();
  startTimer();
}
function renderQuestion() {
  //Uses random number to pull a question
  chosenQuestion = pullQuestion(questions);
  //Populate the various fields needed to show the question and possible answers to user
  questionText.text(chosenQuestion.question);
  var answers = $(".btn").toArray()
    for (i=0; i < answers.length;i++){
     answers[i].text(chosenQuestion.answers[i])
    }
  console.log(answers)
  console.log(chosenQuestion)
  }


  //Traverse DOM and create all the elements based on the object.
  //First element is chosenQuestion.question
  //Create children using radio buttons with chosenQuestion.optA,B,C,D...etc
renderQuestion(questions)

// Check the input and compare against the correct answer key in obj(questions)
function handleAnswerSubmit(event) {
  event.preventDefault();
  }

startButton.on("click", startGame);
