const questions = [
  {
    question: "Fathometer is used to measure",
    answer: [
      { text: "Earthquake", correct: false },
      { text: "Rainfall", correct: false },
      { text: "Ocean depth", correct: true },
      { text: "Sound intensity", correct: false },
    ],
  },

  {
    question: "Entomology is the science that studies?",
    answer: [
      { text: "Behaviour of huaman beings", correct: false },
      { text: "Insects", correct: true },
      { text: "The origin and history of technical and sceintific terms", correct: false },
      { text: "The formation of rocks", correct: false },
    ],
  },

  {
    question: "Exposure to sunlight helps a person improve his health because",
    answer: [
      { text: "the infrared light kills bacteria in the body", correct: false },
      { text: "resistance power increases", correct: false },
      { text: "the pigment cells in the skin get stimulated", correct: false },
      { text: "the ultraviolet rays convert skin oil into Vitamin D", correct: true },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function Start() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;
  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const Pukar = e.target;
  const Rimal = Pukar.dataset.correct === "true";
  if (Rimal) {
    Pukar.classList.add("correct");
    score++;
  } else {
    Pukar.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    Start();
  }
});

Start();