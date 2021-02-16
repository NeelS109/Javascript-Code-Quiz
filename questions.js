// Variables set with array and object for questions and answers
var questions = [
    {
        question: "Which of the following best describes JavaScript?",
        choices: ["low-level programming language", "scripting language precompiled in the browser", "compiled scripting language", "an object-oriented scripting language"],
        answer: "an object-oriented scripting language"
    },
    {
        question: "Arrays in Javascript can be used to store ____.",
        choices: ["all the below", "other arrays", "booleans", "numbers and strings"],
        answer: "all the below"
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        question: "The _______ method of an Array object adds and/or removes elements from an array.",
        choices: ["reverse", "shift", "slice", "splice"],
        answer: "splice"
    },
    {
        question: "Which symbol is used for comments in Javascript?",
        choices: ["Two backslashes", "Two forward slashes", "Exclaimation Point", "One Forward Slash"],
        answer: "Two forward slashes"
    },

];


// Variables to keep track of quiz
var currentquestionindex;
var score

//Variables to reference DOM 
var timer = document.querySelector("#startTime");
var currentTime = document.querySelector("#currentTime");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");

