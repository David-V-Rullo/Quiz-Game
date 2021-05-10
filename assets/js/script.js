var questions = [
   questionOne = {
    question: "What amendment to the Constitution protects the freedom of speech?",
    optA: "14th",
    optB: "2nd",
    optC: "5th",
    optD: "1st",
    correctAnswer: "D",
}, questionTwo = {
    question: "What element of a crime reflects an individual's state of mind?",
    optA: "Res Judicata",
    optB: "Mens Rea",
    optC: "Proximate Cause",
    optD: "Fault",
    correctAnswer: "B" 
}, questionThree = {
    question: "Which of the following is not required to form a contract under the UCC?",
    optA: "A price",
    optB: "Acceptance",
    optC: "Consideration",
    optD: "An Offer",
    correctAnswer: "A"
}, questionFour = {
    question: "What year did the U.S. ratify it's current Constitution?",
    optA: "1789",
    optB: "1776",
    optC: "1985",
    optD: "1781",
    correctAnswer: "A" 
}, questionFive = {
    question: "What amendment to the Constitution grants the right to a jury trial",
    optA: "5th",
    optB: "8th",
    optC: "14th",
    optD: "6th",
    correctAnswer: "D" 
}]

//Use a function to randomly choose the next question
//Function to render the question in the box. 
function pullQuestion(questions) {
    var random = Math.floor(Math.random(questions.length));
    var randQuestion = questions[random];
    
    return randQuestion;
}



