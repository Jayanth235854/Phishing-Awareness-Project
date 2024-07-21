let questionCount = 0;
let questionNumb = 1;
let userScore = 0;
let answeredQuestions = new Array(20).fill(false);
// Shuffle the questions array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
// Shuffle the questions array before using it
shuffleArray(questions);

const nextBtn = document.querySelector('.next-btn');
const resultBox = document.querySelector('.result-box');
const finishBtn = document.querySelector('.finish-btn');
const quizBox = document.querySelector('.quiz-box');
const prevBtn = document.querySelector('.prev-btn');
const questionButtons = document.querySelectorAll(".question-button");
const questionList = document.querySelector('.question-list');
const attemptedQuestions = new Array(20).fill(false);

function updateSidebar() {
    const questionList = document.querySelectorAll('.question-list li');

    // Loop through each question in the sidebar
    questionList.forEach((question, index) => {
        if (answeredQuestions.includes(index)) {
            question.classList.remove('unattempted');
        } else {
            question.classList.add('unattempted');
        }

        if (index === questionCount) {
            question.classList.add('current');
        } else {
            question.classList.remove('current');
        }

        // Add event listener to each question in the sidebar
        question.addEventListener('click', () => {
            if (!question.classList.contains('unattempted')) {
                questionCount = index;
                showQuestions(questionCount);
                questionCounter(questionNumb + questionCount);
                updateSidebar();
            }
        });
    });
}

function updateButtonStyles() {
    questionButtons.forEach((button, index) => {
        if (index === questionCount) {
            button.classList.add('current');
            button.classList.remove('attempted');
            button.classList.remove('unattempted');
        } else if (answeredQuestions.includes(index)) {
            button.classList.remove('current');
            button.classList.add('attempted');
            button.classList.remove('unattempted');
        } else {
            button.classList.remove('current');
            button.classList.remove('attempted');
            button.classList.add('unattempted');
        }
    });
}

updateButtonStyles();

questionButtons.forEach(button => {
    const questionIndex = parseInt(button.getAttribute('data-question-index'));

    // Check if the question has been answered
    if (answeredQuestions.includes(questionIndex)) {
        button.classList.add('attempted');
    } else {
        button.classList.remove('attempted');
    }

    // Check if the question is currently being attended
    if (questionIndex === questionCount) {
        button.classList.add('current');
    } else {
        button.classList.remove('current');
    }

    button.addEventListener('click', () => {
        questionCount = questionIndex;
        showQuestions(questionCount);
        questionCounter(questionNumb + questionCount);

        // Update the button's appearance to indicate attempted/unattempted
        if (answeredQuestions.includes(questionIndex)) {
            button.classList.add('attempted');
        } else {
            button.classList.remove('attempted');
        }
    });
});



nextBtn.addEventListener('click', () => {
    if (questionCount < 20) {
        questionCount++;
        showQuestions(questionCount);
        questionCounter(questionNumb + questionCount);
        answeredQuestions.push(questionCount - 1); // Track answered questions
        attemptedQuestions[questionCount] = true; 
        updateButtonStyles(); 
        updateSidebar();
    }
    if(questionCount == 19)  {
        console.log('Question completed');
        nextBtn.classList.add('none');
        finishBtn.style.display = 'block';
       
    
    }
});

finishBtn.addEventListener('click', () => {
    console.log('Quiz finished');
    resultBox.classList.add('active');
    quizBox.classList.add('active');
    showResultBox();
});

// Add an event listener to the "Previous" button
prevBtn.addEventListener('click', () => {
    if (questionCount > 0) {
        questionCount--;
        showQuestions(questionCount);
        questionCounter(questionNumb + questionCount);
        updateSidebar();
    }
});

// Initialize the sidebar when the page loads
updateSidebar();

function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].question}`;

    const optionList = document.querySelector('.option-list');
    const options = questions[index].options;
    optionList.innerHTML = '';

    for (let i = 0; i < options.length; i++) {
        const option = document.createElement('button');
        option.className = 'option';
        option.textContent = options[i];
        optionList.appendChild(option);

        // Closure to capture the option value
        option.addEventListener('click', (event) => optionSelected(event.target, index));
    }
}

function optionSelected(selectedOption, questionIndex) {
    const options = document.querySelectorAll('.option');
    const correctAnswer = questions[questionIndex].answer;

    let userAnswerIsCorrect = false; // Flag to track correctness of user's answer

    options.forEach(option => {
        if (option.textContent === correctAnswer) {
            option.classList.add('correct');
            if (selectedOption === option) {
                userAnswerIsCorrect = true;
            }
        } else if (option === selectedOption) {
            option.classList.add('wrong');
        }
        option.disabled = true;
    });

    if (userAnswerIsCorrect) {
        userScore += 1;
    }

    headerScore();
    saveUserAnswer(questionIndex, selectedOption.textContent);
}
window.addEventListener('load', () => {
    const previousAnswer = loadUserAnswer(questionCount);
    if (previousAnswer !== null) {
        const options = document.querySelectorAll('.option');
        options[previousAnswer].click();
    }
});

showQuestions(questionCount);

function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of 20 Questions`; // Show only 20 questions
}

function headerScore() {
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent = `Score: ${Math.max(userScore, 0)}/20`; // Show only 20 questions
}

function showResultBox() {
    const scoreText = document.querySelector('.score-text');
    scoreText.textContent = `Your score is  ${userScore} out of 20`; // Show only 20 questions
    const circularProgress = document.querySelector('.circular-progress');
    const progressValue = document.querySelector('.progress-value');
    let progressStartValue = 0;
    let progressEndValue = (userScore / 20) * 100; // Show only 20 questions
    let speed = 20;
    let progress = setInterval(() => {
        progressStartValue++;
        progressValue.textContent = `${progressStartValue}%`;
        if (progressStartValue >= progressEndValue) {
            clearInterval(progress);
        }
    }, speed);
}