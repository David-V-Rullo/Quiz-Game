// var rootEl = $("#root")
var questions = [
   questionOne = {
    question: "What amendment to the Constitution protects the freedom of speech?",
    optA: "14th",
    optB: "2nd",
    optC: "5th",
    optD: "1st",
    correctAnswer: "1st",
}, questionTwo = {
    question: "What element of a crime reflects an individual's state of mind?",
    optA: "Res Judicata",
    optB: "Mens Rea",
    optC: "Proximate Cause",
    optD: "Fault",
    correctAnswer: "Mens Rea" 
}, questionThree = {
    question: "Which of the following is not required to form a contract under the UCC?",
    optA: "A price",
    optB: "Acceptance",
    optC: "Consideration",
    optD: "An Offer",
    correctAnswer: "A price"
}, questionFour = {
    question: "What year did the U.S. ratify it's current Constitution?",
    optA: "1789",
    optB: "1776",
    optC: "1985",
    optD: "1781",
    correctAnswer: "1789"
}, questionFive = {
    question: "What amendment to the Constitution grants the right to a jury trial",
    optA: "5th",
    optB: "8th",
    optC: "14th",
    optD: "6th",
    correctAnswer: "6th" 
}]
var answerA = $("#answer-A")
var answerB = $("#answer-B")
var answerC = $("#answer-C")
var answerD = $("#answer-D")
var questionText = $("#question-text");
var submitButton = $(".question-card")
//Use a function to randomly choose the next question
//Function to render the question in the box. 
function pullQuestion(arr) {
    var random = Math.floor(Math.random() * arr.length);
    var randQuestion = arr[random];
    
    return randQuestion;
}
function renderQuestion() {
    var chosenQuestion = pullQuestion(questions)
    questionText.text(chosenQuestion.question)
    answerA.next().text(chosenQuestion.optA);
    answerB.next().text(chosenQuestion.optB);
    answerC.next().text(chosenQuestion.optC);
    answerD.next().text(chosenQuestion.optD);
    //Traverse DOM and create all the elements based on the object. 
    //First element is chosenQuestion.question
    //Create children using radio buttons with chosenQuestion.optA,B,C,D...etc
}

renderQuestion()

//Check the input and compare against the correct answer key in obj(questions)
function handleAnswerSubmit(event){
    event.preventDefault();

    var submittedAnswer = $('input[name= "flexRadioDefault"]:checked')
    console.log(submittedAnswer)
}
