document.addEventListener('DOMContentLoaded', () => {
    const start = document.querySelector('.start');
    const popupQuestion = document.querySelector('.popup-question');
    const tipBtn = document.querySelector('.tip-btn');
    const reason = document.querySelector('.reason');
    const nextBtn = document.querySelector('.next-btn');
    const startBtn = document.querySelector('.start-btn');
    const resultBox = document.querySelector('.result-box');
    const background = document.querySelector('.background');

   

    let tipCount = 0;
    tipBtn.addEventListener('click', () => {
        reason.classList.add('active');
        tipCount++;
        showTips(tipCount);
    });

    let imageCount = -1;

    startBtn.addEventListener('click', () => {
        popupQuestion.style.display = 'block';
        startBtn.classList.add('active');
        imageCount++;
        if (imageCount < images.length) {
            const shark = document.querySelector('.shark');
            shark.classList.remove('disappear');
            showQuestions(imageCount);
            reason.classList.remove('active');
            resetPopups();
            resetSharkPosition();
        } 
    });
    nextBtn.addEventListener('click', () => {
        imageCount++;
        if (imageCount < images.length) {
            const shark = document.querySelector('.shark');
            shark.classList.remove('disappear');
            showQuestions(imageCount);
            reason.classList.remove('active');
            resetPopups();
            resetSharkPosition();
        } else {
            const popup = document.querySelector('.popup');
            const popup1 = document.querySelector('.popup1');
            const shark = document.querySelector('.shark');
            const fish = document.querySelector('.fish');
            const tipBox = document.querySelector('.tip-box');
            popupQuestion.style.display = 'none';
            resultBox.style.display = 'block';
            displayResult((currentScore / totalScore) * 100);
            background.style.display = 'block';
            if (popup) {
                popup.classList.remove('active');
            }
            if (popup1) {
                popup1.classList.remove('active');
            }
            if (shark) {
                shark.style.display = 'none';
            }
            if (fish) {
                fish.style.display = 'none';
            }
            if (tipBox) {
                tipBox.style.display = 'none';
            }
        }
    });

    const themeLightBtn = document.getElementById('theme-light');
    const themeDarkBtn = document.getElementById('theme-dark');

    // Add event listeners to theme buttons
    if (themeLightBtn && themeDarkBtn) {
        themeLightBtn.addEventListener('click', () => {
            changeTheme('light');
        });

        themeDarkBtn.addEventListener('click', () => {
            changeTheme('dark');
        });
    }

    function changeTheme(theme) {
        if (theme === 'light') {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
        } else if (theme === 'dark') {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
        }
    }

    function showTips(index) {
        const tip = document.querySelector('.tip');
        if (images[index - 1]) {
            tip.innerText = images[index - 1].reason;
        } else {
            tip.innerText = ''; // Clear the reason if there's no data for the current question
        }
    }

    function showQuestions(index) {
        const questionImage = document.querySelector('.question-image');
        if (images[index]) {
            questionImage.src = images[index].questionImage;
        } else {
            console.log(`No question data found for index ${index}`);
        }
        const optionList = document.querySelector('.option-list');

        const options = images[index].options;

        optionList.innerHTML = '';

        for (let i = 0; i < options.length; i++) {
            const option = document.createElement('button');
            option.className = 'option';
            option.textContent = options[i];
            option.setAttribute('data-option', options[i]);
            optionList.appendChild(option);
            option.addEventListener('click', () => optionSelected(option.getAttribute('data-option'), index));
        }
    }

    let currentScore = 0; // Initialize score
    const totalScore = images.length;
    let answeredQuestions = 0;

    function resetSharkPosition() {
        const shark = document.querySelector('.shark');
        const fish = document.querySelector('.fish');
        // Reset the shark's position to its original location
       shark.classList.remove('me');
       fish.classList.remove('me');
    }

    function moveSharkToFish() {
        const shark = document.querySelector('.shark');
        const fish = document.querySelector('.fish');
        shark.classList.add('me');
        fish.classList.add('me');
        // Get the position of the fish
       /* const fishPosition = fish.getBoundingClientRect();
        const fishX = fishPosition.left;
        const fishY = fishPosition.top;

        // Set the shark's position to match the fish's position
        shark.style.transition = 'transform 1s ease-in-out';
        shark.style.transform = `translate(${fishX}px, ${fishY}px)`;

        // Delay to allow the shark to move before resetting its position
        setTimeout(() => {
            resetSharkPosition();
        }, 1000); // Adjust the delay as needed*/
    }

    function optionSelected(selectedOption, questionIndex) {
        console.log('Selected:', selectedOption);
        const options = document.querySelectorAll('.option');
        const correctAnswer = images[questionIndex].answer;
        const popup = document.querySelector('.popup');
        const popup1 = document.querySelector('.popup1');

        const popupMessage = popup?.querySelector('.popup-message');
        const popup1Message = popup1?.querySelector('.popup-message');

        let userAnswerIsCorrect = false;

        options.forEach(option => {
            if (option.textContent === correctAnswer) {
                option.classList.add('correct');
                if (selectedOption === correctAnswer) {
                    userAnswerIsCorrect = true;
                    // In the optionSelected function when the answer is correct:
                    const shark = document.querySelector('.shark');
                    shark.classList.add('disappear');
                }
            } else if (option.getAttribute('data-option') === selectedOption) {
                option.classList.add('wrong');
            }
            option.disabled = true;
        });

        if (userAnswerIsCorrect) {
            currentScore++;
            updateScoreDisplay();
            if (popup) {
                popupMessage.textContent = "Hurrah! Saved Fishes";
                popup.classList.add('active');

                // Change the background video source to the correct answer video
                /* backgroundVideo.src = 'https://mail.google.com/mail/u/0?ui=2&ik=6b3c010564&attid=0.1&permmsgid=msg-f:1775901646468086593&th=18a5452369c2fb41&view=att&disp=inline&realattid=18a544c728ef860cc191';
                backgroundVideo.style.display = 'block';*/
            }
        } else {
            if (popup1) {
                moveSharkToFish();
                popup1Message.textContent = "Oops! Failed to Save";
                popup1.classList.add('active');

                // Change the background video source to the wrong answer video
                /* backgroundVideo.src = 'https://mail.google.com/mail/u/0?ui=2&ik=6b3c010564&attid=0.1&permmsgid=msg-f:1775901514513098910&th=18a54504b0a1a89e&view=att&disp=safe&realattid=18a544c201af6e4517e1';
                backgroundVideo.style.display = 'block';*/
            }
        }
        answeredQuestions++;

        if (answeredQuestions === totalScore) {
            const percentage = (currentScore / totalScore) * 100;
            displayResult(percentage);
            popupQuestion.style.display = 'none'; // Hide the question popup
            resultBox.style.display = 'block';
        }
    }

    function displayResult(percentage) {
        const resultBox = document.querySelector('.result-box');
        const progressValue = document.querySelector('.progress-value');
        const scoreText = document.querySelector('.score-text');

        const currentScoreElement = document.querySelector('.current-score'); // Declare currentScoreElement
        const totalScoreElement = document.querySelector('.total-score'); // Declare totalScoreElement
        const shark = document.querySelector('.shark');
        const fish = document.querySelector('.fish');
        resultBox.style.display = 'block';
        progressValue.textContent = `${Math.round(percentage)}%`;
        scoreText.textContent = `Your score is ${currentScore} out of ${totalScore}`;
        startBtn.style.display = 'none';
        tipBtn.style.display = 'none';
        shark.style.display='none';
        fish.style.display='none';
        currentScoreElement.textContent = currentScore; // Update currentScoreElement
        totalScoreElement.textContent = totalScore;

    }

    function updateScoreDisplay() {
        const currentScoreElement = document.querySelector('.current-score');
        const totalScoreElement = document.querySelector('.total-score');
        currentScoreElement.textContent = currentScore;
        totalScoreElement.textContent = totalScore;
    }

    function resetPopups() {
        const popup = document.querySelector('.popup');
        const popup1 = document.querySelector('.popup1');
        const shark = document.querySelector('.shark');
        const fish = document.querySelector('.fish');

        // Check if elements exist before accessing their style property
        if (popup) {
            popup.classList.remove('active');
        }

        if (popup1) {
            popup1.classList.remove('active');
        }

        if (shark) {
            shark.style.display = 'block';
        }

        if (fish) {
            fish.style.display = 'block';
        }
    }
});
