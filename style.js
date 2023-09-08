let QuizData = [
    {
        question: "Cricket was invented in:",
        a: "England",
        b: "India",
        c: "Pakistan",
        d: "Australia",
        correct: "a",
    },
    {
        question: "Cricket bats were shaped like:",
        a: "Hockey sticks",
        b: "Flat sticks",
        c: "Rackets",
        d: "Curved outwards",
        correct: "d",
    },
    {
        question: "Pakistan won its ICC world cup in:",
        a: "1982",
        b: "1992",
        c: "1999",
        d: "2003",
        correct: "b",
    },
    {
        question: "Who holds the record for the highest individual score in an ODI?",
        a: "Babar Azam",
        b: "Virat Kohli",
        c: "Sachin Tendulkar",
        d: "Brian Lara",
        correct: "c",
    },
    {
        question: "After how many years is the ICC 50 overs World Cup played again?",
        a: "1",
        b: "4",
        c: "5",
        d: "2",
        correct: "b",
    },
];
let quiz = document.getElementById('quiz');
let answerEls = document.querySelectorAll('.answer');
let questionEl = document.getElementById('question');
let a_text = document.getElementById('a_text');
let b_text = document.getElementById('b_text');
let c_text = document.getElementById('c_text');
let d_text = document.getElementById('d_text');
let submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
/*Function*/
loadQuiz();

function loadQuiz(){

    deselectAnswers()
     let currentQuizData = QuizData[currentQuiz]

     questionEl.innerText = currentQuizData.question;
     a_text.innerText = currentQuizData.a;
     b_text.innerText = currentQuizData.b;
     c_text.innerText = currentQuizData.c;
     d_text.innerText = currentQuizData.d;
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected(){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer;
}
submitBtn.addEventListener('click', ()=>{
    let answer = getSelected()
    if(answer){
        if(answer === QuizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < QuizData.length){
            loadQuiz();
        }
        else{
            // console.error('Hello');
            quiz.innerHTML = `
            <h2>You answered ${score}/${QuizData.length} question correctly!</h2>
            `
        }
    }
})