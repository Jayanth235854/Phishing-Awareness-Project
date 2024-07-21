const submitBtn = document.querySelector('.submit-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const  welcome= document.querySelector('.welcome');
const  body1= document.querySelector('.body1');
const  quizSection= document.querySelector('.quiz-section');
const  continueBtn= document.querySelector('.continue-btn');





submitBtn.addEventListener('click',(e) => {
    e.preventDefault();
    popupInfo.classList.add('active'); 
    body1.classList.add('active');
} )
exitBtn.addEventListener('click',() => {
    popupInfo.classList.remove('active');
    welcome.classList.remove('active');
    body1.classList.remove('active');
} )
continueBtn.addEventListener('click',() => {
    window.open('quiz.html');
    popupInfo.classList.remove('active');
    welcome.classList.remove('active');

    showQuestions(0);
    
} )
