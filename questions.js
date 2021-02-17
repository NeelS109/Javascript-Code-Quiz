// Variables set with array for questions and answers
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
var score = 0;
var currentquestionIndex = 0;

// Variables to reference DOM elements
var currentClock = document.querySelector("#currentClock");
var clock = document.querySelector("#startTime");
var quizInfo = document.querySelector("#quizInfo");
var questionsDiv = document.querySelector("#questionsDiv");

// Clock left is for amount of seconds per question:
var clockLeft = 101;
// wrongAnswer time
var wrongAnswer = 15;
// Holds interval time
var holdInterval = 0;
// Creates new element
var ulCreate = document.createElement("ul");

// Triggers clock to start and shows clock on screen
clock.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            clockLeft--;
            currentClock.textContent = "Time: " + clockLeft;

            if (clockLeft <= 0) {
                clearInterval(holdInterval);
                completed();
                currentClock.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(currentquestionIndex);
});

// function to show questions and choices on page: 
function render(currentquestionIndex) {
    // Clears page 
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    // For loops to display the questions and choices
    for (var i = 0; i < questions.length; i++) {
        // Displays new question only
        var userQuestion = questions[currentquestionIndex].question;
        var userChoices = questions[currentquestionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }
    // Displays new choices in list form for each question
    userChoices.forEach(function (newItem) {
        var newChoices = document.createElement("li");
        newChoices.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(newChoices);
        newChoices.addEventListener("click", (compare));
    })
}