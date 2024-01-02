const questions = [
    {
        question: "Which is Largest Animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Lion", correct: false },
            { text: "Elephant", correct: false },
            { text: "Blue Whale", correct: true },
        ]
    },
    {
        question: "Which is Largest planet in the world?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Guru", correct: true },
            { text: "Pluto", correct: false },
            { text: "Neptune", correct: false },
        ]
    },
    {
        question: "Which is Largest Food in the world?",
        answers: [
            { text: "Bhai ka Samosa", correct: false },
            { text: "Anda Fry", correct: false },
            { text: "Pav Bhaji", correct: false },
            { text: "Blue Whale", correct: true },
        ]
    },
    {
        question: "Which is Largest bird in the world?",
        answers: [
            { text: "Teracota", correct: false },
            { text: "peacock", correct: false },
            { text: "OStrich", correct: true },
            { text: "crow", correct: false },
        ]
    },
    {
        question: "Which is smallest Animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Lion", correct: true },
            { text: "Elephant", correct: false },
            { text: "Blue Whale", correct: false },
        ]
    },
]

const questionElement = document.querySelector('.quiz .question')
const answerBtn = document.getElementById("answer-btn")
const nextBtn = document.getElementById('next-btn')

let currentQuestionIndex = 0
let score = 0


// * Start Quiz is a function that initialize the content 
function startQuiz() {
    currentQuestionIndex = 0
    score = 0

    nextBtn.innerHTML = "Next"
    showQuestion()
}

function showQuestion() {

    resetThePreviousList()

    // * it takes a question from the nested array object 
    let currentQuestion = questions[currentQuestionIndex]

    // * increment the Index while Display
    let questionNo = currentQuestionIndex + 1;

    console.log(questionNo + ". " + currentQuestion.question)
    // * Add the value in the question element (in h2 element)
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // * Now pick the current question and display answer items in the Web.
    currentQuestion.answers.forEach(answer => {
        // * Create a new element called Button
        const button = document.createElement('button');

        // * now set the answer in each field
        button.innerHTML = answer.text;

        // * Add Class Properties.
        button.classList.add('btn');

        // * Append all the child elements into AnswerBtn
        answerBtn.appendChild(button);

        // * collection of answer. 
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }

        // * now when we click on those button we have to specifies whether this answer is false or true.
        button.addEventListener("click", (e) => {

            // * e.target is use for the selection & Toggle the attribute of particular class.

            // * now show in the Dataset and if the answer is correct or false.
            if (e.target.dataset.correct == "true") {
                e.target.classList.add('correct')
                score++
            }
            else {
                e.target.classList.add('incorrect')
            }

            Array.from(answerBtn.children).forEach(
                button => {
                    if (button.dataset.correct === "true") {
                        button.classList.add("correct")
                    }
                    button.disable = true
                }
            )

            nextBtn.style.display = "block"
        })
    });
}

function resetThePreviousList() {
    nextBtn.style.display = "none"
    while (answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild)
    }
}

function showScore() {
    // reSetState();
    questionElement.innerHTML = `Your Scored ${score} out of ${questions.length}`
    nextBtn.innerHTML = "play Again"
    nextBtn.style.display = "block"
    resetThePreviousList()
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion()
    } else {
        showScore()
    }
}

nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz()
    }
})

startQuiz()