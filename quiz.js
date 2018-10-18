let userScore = 0;
let index = 0;

let preQuestions = [
    {
        "question": "Grand Central Terminal, Park Avenue, New York is the world's",
        "correct_answer": "answerA",
        "answerA": "largest railway station",
        "answerB": "highest railway station",
        "answerC": "longest railway station",
        "answerD": "None of the above",
    },
    {
        "question": "Entomology is the science that studies",
        "correct_answer": "answerB",
        "answerA": "Behavior of human beings",
        "answerB": "Insects",
        "answerC": "The origin and history of technical and scientific terms",
        "answerD": "The formation of rocks",
    },
    {
        "question": "Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",
        "correct_answer": "answerB",
        "answerA": "Asia",
        "answerB": "Africa",
        "answerC": "Europe",
        "answerD": "Australia",
    },
    {
        "question": "Garampani sanctuary is located at",
        "correct_answer": "answerB",
        "answerA": "Junagarh, Gujarat",
        "answerB": "Diphu, Assam",
        "answerC": "Kohima, Nagaland",
        "answerD": "Gangtok, Sikkim",
    },
    {
        "question": "For which of the following disciplines is Nobel Prize awarded?",
        "correct_answer": "answerD",
        "answerA": "Physics and Chemistry",
        "answerB": "Physiology or Medicine",
        "answerC": "Literature, Peace and Economics",
        "answerD": "All of the above",
    }
];

let question = document.querySelector('#question');
let answerA = document.querySelector('#answerA');
let answerB = document.querySelector('#answerB');
let answerC = document.querySelector('#answerC');
let answerD = document.querySelector('#answerD');
let jumbotron = document.querySelector('.jumbotron');

function clearClass() {
    let list = document.querySelectorAll('.answer');
    list.forEach(function (element) {
        element.classList.remove('alert-success');
        element.classList.remove('alert-danger');
    })
}

function bindData(index) {
     if (finishQuiz()) {

        let points = document.querySelector('#points');
        let jumbotronFinish = document.querySelector('.jumbotron-finish');
        let jumbotronQuiz = document.querySelector('.jumbotron-quiz');
        let userScores = localStorage.getItem('userScores');

         if (!(userScores)) {
            let scores = {
                sumPoints : userScore
            };
            localStorage.setItem('userScores', JSON.stringify(scores));
        } else {
            let scores = JSON.parse(localStorage.getItem('userScores'));
            scores.sumPoints += userScore;
            localStorage.setItem('userScores', JSON.stringify(scores));
        }
         points.innerHTML = userScore;
         jumbotronFinish.classList.remove('jumbotron-visible');
        jumbotronQuiz.classList.add('jumbotron-visible');
     } else {
        clearClass();
        jumbotron.classList.remove("pointer-events");
        question.innerHTML = preQuestions[index].question;
        answerA.innerHTML = preQuestions[index].answerA;
        answerB.innerHTML = preQuestions[index].answerB;
        answerC.innerHTML = preQuestions[index].answerC;
        answerD.innerHTML = preQuestions[index].answerD;
    }
}

function checkResult(e) {
    jumbotron.classList.add("pointer-events");

    if (e === preQuestions[index].correct_answer) {
        userScore++;
        let element = document.querySelector('#' + e);
        element.classList.add('alert-success')

    } else {

        let element = document.querySelector('#' + e)
        element.classList.add('alert-danger')
    }
    index++;
    setTimeout(function () {
        bindData(index)
    }, 1000);
}

bindData(index)
document.querySelector('.jumbotron-start').classList.add('jumbotron-visible');
document.querySelector('.jumbotron-quiz').classList.remove('jumbotron-visible');
function finishQuiz() {
    if (index === preQuestions.length) {
        return true
    }
    return false
}

