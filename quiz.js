let score = 0;
let userAnswers = [];
let index = 0;

let preQuestions = [
    {
        "question": "Question 1",
        "correct_answer": "A",
        "answerA": "A",
        "answerB": "B",
        "answerC": "C",
        "answerD": "D",
    },
    {
        "question": "Question 2",
        "correct_answer": "B",
        "answerA": "A",
        "answerB": "B",
        "answerC": "C",
        "answerD": "D",
    },
    {
        "question": "Question 3",
        "correct_answer": "B",
        "answerA": "A",
        "answerB": "B",
        "answerC": "C",
        "answerD": "D",
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

function bindData(index) {

    if (finishQuiz()) {
        //localStorage.setItem('average', 'score');

        let points = document.querySelector('#points');
        let average = document.querySelector('#average');
        let jumbotronfinish = document.querySelector('.jumbotron-finish');
        let jumbotronQuiz = document.querySelectorAll('.jumbotron-quiz');

        points.innerHTML(score);
        average.innerHTML(average);
        jumbotronfinish.classList.remove('jumbotron-visible');
        jumbotronQuiz.class.add('jumbotron-visible');
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