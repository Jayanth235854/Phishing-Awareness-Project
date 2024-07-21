import paragraphs from './introductory_paragraphs.js';
import option from './questions3.js';
import question from './Ques.js';
import answer from './answer.js';

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const boxes = document.querySelectorAll(".box");
  const buttons = document.querySelectorAll(".button");
  const resolveButtons = document.querySelectorAll(".resolve");
  const popups = document.querySelectorAll(".popup");
  const scoreDisplays = document.querySelectorAll(".score-display");
  let score = 0;

  function populateBox(boxNumber) {
    const questionDiv = document.getElementById(`questions${boxNumber}`);
    const optionDiv = document.getElementById(`options${boxNumber}`);
    const continueButton = document.getElementById(`continue${boxNumber}`);
    const paraIntro = document.getElementById(`para${boxNumber}_intro`);
    const answerIssueButton = document.getElementById(`answerIssue${boxNumber}`);

    const correctAnswer = answer[boxNumber - 1][0];

    function showQuestions() {
      paraIntro.style.display = "none";
      continueButton.removeEventListener("click", showQuestions);
      answerIssueButton.addEventListener("click", function () {
        optionDiv.style.display = "none";
      });
    }

    continueButton.addEventListener("click", showQuestions);
    paraIntro.textContent = paragraphs[boxNumber - 1];
    const questionQuestions = question[boxNumber - 1];
    questionDiv.innerHTML = '';
    const questionOptions = option[boxNumber - 1];
    optionDiv.innerHTML = '';

    questionQuestions.forEach((questionText) => {
      const index = document.createElement('index');
      const input = document.createElement('input');
      input.name = `question${index}`;
      index.appendChild(document.createTextNode(questionText));
      optionDiv.appendChild(index);
      optionDiv.appendChild(document.createElement('br'));
    });

    questionOptions.forEach((optionText, index) => {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'button';
      input.name = `option${boxNumber}`;
      input.value = String.fromCharCode(65 + index);
      label.appendChild(input);
      label.appendChild(document.createTextNode(optionText));
      optionDiv.appendChild(label);
      optionDiv.appendChild(document.createElement('br'));

      input.addEventListener("click", function () {
        const selectedOption = String.fromCharCode(65 + index);
        if (selectedOption === correctAnswer) {
          label.classList.add("correct-answer");
          console.log("Correct answer!");
          score++;
          updateScoreDisplays();
        } else {
          label.classList.add("incorrect-answer");
          console.log("Incorrect answer!");
        }
        questionOptions.forEach((option, optionIndex) => {
          if (optionIndex !== index) {
            const otherInput = optionDiv.querySelector(`input[value="${String.fromCharCode(65 + optionIndex)}"]`);
            otherInput.disabled = true;
          }
        });
      });
    });
  }

  function updateScoreDisplays() {
    scoreDisplays.forEach((display) => {
      display.textContent = score;
    });
  }

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      boxes[index].classList.remove("active");
      boxes[index].classList.add("inactive");

      const nextIndex = (index + 1) % boxes.length;
      container.style.transform = `translateX(-${nextIndex * 20}%)`;
      setTimeout(() => {
        boxes[nextIndex].classList.remove("inactive");
        boxes[nextIndex].classList.add("active");
        populateBox(nextIndex + 1);

        if (nextIndex === 4) {
          showResult(score);
        }
      }, 500);
    });
  });

  const continueButtons = document.querySelectorAll(".continue");
  continueButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const questions = document.querySelectorAll(".questions");
      questions.forEach((questions) => {
        questions.style.display = "block";
      });
      const options = document.querySelectorAll(".options");
      options.forEach((options) => {
        options.style.display = "block";
      });
      continueButtons[index].style.display = "none";
    });
  });

  resolveButtons.forEach((resolveButton, index) => {
    resolveButton.addEventListener("click", () => {
      popups[index].style.display = "block";
      const meetElements = boxes[index].querySelectorAll(".meet");
      const imageElements = boxes[index].querySelectorAll(".image");

      meetElements.forEach((meetElement) => {
        meetElement.style.display = "none";
      });

      imageElements.forEach((imageElement) => {
        imageElement.style.display = "none";
      });
      populateBox(index + 1);
    });
  });

  const resultLink = document.getElementById('resultLink');
resultLink.addEventListener('click', function () {
    // Retrieve the final score from wherever you're storing it
    const finalScore = score;
    
    // Store the final score in local storage
    localStorage.setItem('finalScore', finalScore);
});

  populateBox(1);
});
