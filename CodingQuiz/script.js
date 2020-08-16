var generateBtn = document.querySelector(".btn");
generateBtn.addEventListener("click", beginQuiz);


var questions = [
{
    question: 'Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?',
    answerChoices: ["src", "title", "alt", "href"],
    correctAnswer: 2,
},
{
    question: 'Choose which HTML element is used to define the navigation links?',
    answerChoices: ['<navigation>', '<nave>', '<navigate', '<nav>'],
    correctAnswer: 3,
},
{
    question: 'How can you add a background color for all <h1> elements?',
    answerChoices: ["#h1 {background-color:#dddd;}", ".h1 {background-color:#dddd;}", "h1 {background-color=#dddd;}", "h1 {background-color:#dddd;}"],
    correctAnswer: 2,

},
{
    question: 'How do you start a FOR loop?',
    answerChoices: ["for(i=0; i <=5; i++)", "for(i <=5: i+)", "for(i=0; i<5; i++)", "for(i++ <=5; i=0;)"],
    correctAnswer: 0,
},
{
    question: 'In Javascript, how do you declare a variable?',
    answerChoices: ["variable textHere;", "var textHere;", "var= textHere;", "v: textHere;"],
    correctAnswer: 1,
},
{
    question: 'Which class is used to create a big box for calling extra attention?',
    answerchoices: [".container", ".jumbotron", ".wrapper",".popup"],
    correctAnswer: 1,
},
]
var getTime = document.querySelector(".timer");
var primaryEle = document.getElementById("container");
var newItem = document.querySelector("#card-body");
var timerSec = 120;
var timerInterval;
var numberQues = 0;
var finalScore = 0;

function beginQuiz() {
    document.getElementById("mainQues").innerHTML = questions[0].question;
    var btn = document.getElementById("beginQuiz");
   
    var yourChoices = [questions[0].answerChoices[0], questions[0].answerChoices[1], questions[0].answerChoices[2], questions[0].answerChoices[3]]
    //loop creating answer buttons
    for (var i = 0; i < 4; i++) {
        var choices = document.createElement("button");
        choices.className = "btn ansButtons";
        choices.id = "choice" + i;
        choices.value = i;
        choices.innerHTML = yourChoices[i];
        primaryEle.appendChild(choices);
    }
    function setTimer() {
        timerInterval = setInterval(function () {
            timerSec--;
            getTime.textContent = timerSec + "seconds remaining";

            if (timerSec === 0) {
                clearInterval(timerInterval);
              
            }

        }, 1000); 
    
}

setTimer()
    document.getElementById("choice0").addEventListener("click", nextQues);
    document.getElementById("choice1").addEventListener("click", nextQues);
    document.getElementById("choice2").addEventListener("click", nextQues);
    document.getElementById("choice3").addEventListener("click", nextQues);
 }

function nextQues() {
    if (event.target.value == questions[numberQues].correctAnswer) {
        numberQues++;
    } else {
        //This will decrease the timer when the wrong answer is inputed
        timerSec = timerSec - 10;
    }

    
    if (numberQues === questions.length - 1) {
        clearInterval(timerInterval);
    } else {
     
        getQues();
    }
}
function getQues() {
    document.getElementById("mainQues").innerHTML = questions[numberQues].question; 
    document.getElementById("choice0").innerHTML = questions[numberQues].correctAnswer[0];
    document.getElementById("choice1").innerHTML = questions[numberQues].correctAnswer[1];
    document.getElementById("choice2").innerHTML = questions[numberQues].correctAnswer[2];
    document.getElementById("choice3").innerHTML = questions[numberQues].correctAnswer[3];
    document.getElementById("choice4").innerHTML = questions[numberQues].correctAnswer[4];
    document.getElementById("choice5").innerHTML = questions[numberQues].correctAnswer[5];

}