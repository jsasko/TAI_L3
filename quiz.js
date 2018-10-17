let score = 0;
let userAnswers = [];
let index = 0;

let preQuestions = [
    {
        "question": "Grand Central Terminal, Park Avenue, New York is the world's",
        "correct_answer": "A",
        "answerA": "largest railway station",
        "answerB": "highest railway station",
        "answerC": "longest railway station",
        "answerD": "None of the above",
    },
    {
        "question": "Entomology is the science that studies",
        "correct_answer": "B",
        "answerA": "Behavior of human beings",
        "answerB": "Insects",
        "answerC": "The origin and history of technical and scientific terms",
        "answerD": "The formation of rocks",
    },
    {
        "question": "Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",
        "correct_answer": "B",
        "answerA": "Asia",
        "answerB": "Africa",
        "answerC": "Europe",
        "answerD": "Australia",
    },
    {
        "question": "Garampani sanctuary is located at",
        "correct_answer": "B",
        "answerA": "Junagarh, Gujarat",
        "answerB": "Diphu, Assam",
        "answerC": "Kohima, Nagaland",
        "answerD": "Gangtok, Sikkim",
    },
    {
        "question": "For which of the following disciplines is Nobel Prize awarded?",
        "correct_answer": "D",
        "answerA": "Physics and Chemistry",
        "answerB": "Physiology or Medicine",
        "answerC": "Literature, Peace and Economics",
        "answerD": "All of the above",
    }
];

let question1 = document.querySelector('#question');
let answer1 = document.querySelector('#one');
let answer2 = document.querySelector('#two');
let answer3 = document.querySelector('#three');
let answer4 = document.querySelector('#four');
let jumbotron = document.querySelector('.jumbotron');

function clearClass() {
    let list = document.querySelectorAll('.answer');
    list.forEach(function (element) {
        element.classList.remove('alert-success');
        element.classList.remove('alert-danger');
    })
}

function average()
{

}

function bindData(index) {

    if (finishQuiz()) {
        localStorage.setItem('average', 'score');

        let points = document.querySelector('#points');
        let average = document.querySelector('#average');
        let jumbotronfinish = document.querySelector('.jumbotron-finish');
        let jumbotronQuiz = document.querySelectorAll('.jumbotron-quiz');

        //points.innerHTML(score);
        //average.innerHTML(average);
        jumbotronfinish.classList.remove('jumbotron-visible');
        //jumbotronQuiz.class.add('jumbotron-visible');
    } else {

        clearClass();
        jumbotron.classList.remove("pointer-events");
        question1.innerHTML = preQuestions[index].question;
        answer1.innerHTML = preQuestions[index].answerA;
        answer2.innerHTML = preQuestions[index].answerB;
        answer3.innerHTML = preQuestions[index].answerC;
        answer4.innerHTML = preQuestions[index].answerD;
    }
}

function checkResult(e) {
    jumbotron.classList.add("pointer-events");

    if (e === preQuestions[index].correct_answer) {
        score++;
        let element = document.querySelector('#' + e)
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

bindData(index);

function finishQuiz() {
    if (index === preQuestions.length) {
        return true
    }
    return false
}