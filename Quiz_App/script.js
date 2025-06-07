const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      {
        text: "Hyper Text Markup Language",
        correct: true,
      },
      {
        text: "High Text Machine Language",
        correct: false,
      },
      {
        text: "Hyper Text Machine Learning",
        correct: false,
      },
      {
        text: "Hyper Text Marking Language",
        correct: false,
      },
    ],
  },
  {
    question: "What is the purpose of the `alt` attribute in an `<img>` tag?",
    answers: [
      {
        text: "To specify the URL of the image",
        correct: false,
      },
      {
        text: "To provide alternative text for the image",
        correct: true,
      },
      {
        text: "To align the image",
        correct: false,
      },
      {
        text: "To style the image with CSS",
        correct: false,
      },
    ],
  },
  {
    question: "Which CSS property is used to change the text color?",
    answers: [
      {
        text: "color",
        correct: true,
      },
      {
        text: "font-color",
        correct: false,
      },
      {
        text: "text-color",
        correct: false,
      },
      {
        text: "background-color",
        correct: false,
      },
    ],
  },
  {
    question: "Which is the correct JavaScript syntax to write 'Hello World'?",
    answers: [
      {
        text: "print('Hello World');",
        correct: false,
      },
      {
        text: "document.write('Hello World');",
        correct: true,
      },
      {
        text: "echo('Hello World');",
        correct: false,
      },
      {
        text: "console.print('Hello World');",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which of the following is a valid way to add comments in JavaScript?",
    answers: [
      {
        text: "// This is a comment",
        correct: true,
      },
      {
        text: "/* This is a comment */",
        correct: true,
      },
      {
        text: "# This is a comment",
        correct: false,
      },
      {
        text: "!-- This is a comment --",
        correct: false,
      },
    ],
  },
  {
    question: "Which CSS property controls the layout of elements?",
    answers: [
      {
        text: "display",
        correct: true,
      },
      {
        text: "position",
        correct: false,
      },
      {
        text: "float",
        correct: false,
      },
      {
        text: "visibility",
        correct: false,
      },
    ],
  },
  {
    question: "How do you declare a JavaScript variable?",
    answers: [
      {
        text: "let myVariable;",
        correct: true,
      },
      {
        text: "var = myVariable;",
        correct: false,
      },
      {
        text: "variable myVariable;",
        correct: false,
      },
      {
        text: "myVariable: var;",
        correct: false,
      },
    ],
  },
  {
    question: "What is the purpose of the <head> tag in HTML?",
    answers: [
      {
        text: "To contain meta information about the document",
        correct: true,
      },
      {
        text: "To display the title of the page",
        correct: false,
      },
      {
        text: "To include the main content of the page",
        correct: false,
      },
      {
        text: "To declare the doctype",
        correct: false,
      },
    ],
  },
  {
    question: "Which JavaScript method is used to find an HTML element by ID?",
    answers: [
      {
        text: "document.getElementById",
        correct: true,
      },
      {
        text: "document.getElementsById",
        correct: false,
      },
      {
        text: "document.querySelector",
        correct: false,
      },
      {
        text: "document.getElement",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which CSS property is used to create space inside an element, between the content and the border?",
    answers: [
      {
        text: "padding",
        correct: true,
      },
      {
        text: "margin",
        correct: false,
      },
      {
        text: "border-spacing",
        correct: false,
      },
      {
        text: "spacing",
        correct: false,
      },
    ],
  },
  // --- ADDED QUESTIONS START ---
  {
    question: "What does the CSS property 'z-index' control?",
    answers: [
      { text: "Stacking order of elements", correct: true },
      { text: "Zoom level of elements", correct: false },
      { text: "Font size of elements", correct: false },
      { text: "Opacity of elements", correct: false },
    ],
  },
  {
    question: "Which HTML tag is used to define a table row?",
    answers: [
      { text: "<tr>", correct: true },
      { text: "<td>", correct: false },
      { text: "<table>", correct: false },
      { text: "<row>", correct: false },
    ],
  },
  {
    question: "What does the 'type' attribute in HTML <input> tag specify?",
    answers: [
      { text: "The kind of data input", correct: true },
      { text: "The format of the page", correct: false },
      { text: "The CSS style", correct: false },
      { text: "The width of the element", correct: false },
    ],
  },
  {
    question: "Which JavaScript keyword is used to define a constant?",
    answers: [
      { text: "const", correct: true },
      { text: "let", correct: false },
      { text: "var", correct: false },
      { text: "constant", correct: false },
    ],
  },
  {
    question: "Which HTML tag is used to display a numbered list?",
    answers: [
      { text: "<ol>", correct: true },
      { text: "<ul>", correct: false },
      { text: "<li>", correct: false },
      { text: "<dl>", correct: false },
    ],
  },
  {
    question: "In CSS, what does the 'position: absolute' property do?",
    answers: [
      { text: "Removes the element from normal flow and positions it relative to the nearest positioned ancestor", correct: true },
      { text: "Fixes it to the top of the page", correct: false },
      { text: "Centers it horizontally", correct: false },
      { text: "Hides the element", correct: false },
    ],
  },
  {
    question: "Which HTML tag is used to add a line under the text?",
    answers: [
      { text: "<u>", correct: true },
      { text: "<underline>", correct: false },
      { text: "<ul>", correct: false },
      { text: "<li>", correct: false },
    ],
  },
  {
    question: "Which method is used to remove the last element from an array in JavaScript?",
    answers: [
      { text: "pop()", correct: true },
      { text: "push()", correct: false },
      { text: "shift()", correct: false },
      { text: "splice()", correct: false },
    ],
  },
  {
    question: "What does the 'this' keyword refer to in JavaScript?",
    answers: [
      { text: "The object from which it was called", correct: true },
      { text: "The global object always", correct: false },
      { text: "The parent object only", correct: false },
      { text: "A new object", correct: false },
    ],
  },
  {
    question: "What is the default background color of an HTML page?",
    answers: [
      { text: "White", correct: true },
      { text: "Gray", correct: false },
      { text: "Blue", correct: false },
      { text: "Transparent", correct: false },
    ],
  },
  {
    question: "Which HTML tag is used to play a video file?",
    answers: [
      { text: "<video>", correct: true },
      { text: "<media>", correct: false },
      { text: "<movie>", correct: false },
      { text: "<play>", correct: false },
    ],
  },
  {
    question: "Which JavaScript function is used to convert a string to lowercase?",
    answers: [
      { text: "toLowerCase()", correct: true },
      { text: "lower()", correct: false },
      { text: "tolower()", correct: false },
      { text: "LowerCase()", correct: false },
    ],
  },
  {
    question: "Which CSS unit is relative to the parent element?",
    answers: [
      { text: "em", correct: true },
      { text: "px", correct: false },
      { text: "cm", correct: false },
      { text: "pt", correct: false },
    ],
  },
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "High Text Machine Language", correct: false },
      { text: "Hyperlinks Text Management Language", correct: false },
      { text: "None of these", correct: false },
    ],
  },
  {
    question: "Which HTML tag is used to display an image?",
    answers: [
      { text: "<img>", correct: true },
      { text: "<src>", correct: false },
      { text: "<image>", correct: false },
      { text: "<pic>", correct: false },
    ],
  },
  {
    question: "Which method joins two or more arrays in JavaScript?",
    answers: [
      { text: "concat()", correct: true },
      { text: "append()", correct: false },
      { text: "combine()", correct: false },
      { text: "merge()", correct: false },
    ],
  },
  {
    question: "Which CSS property sets the space outside the border?",
    answers: [
      { text: "margin", correct: true },
      { text: "padding", correct: false },
      { text: "border-spacing", correct: false },
      { text: "outline", correct: false },
    ],
  },
  {
    question: "What does DOM stand for?",
    answers: [
      { text: "Document Object Model", correct: true },
      { text: "Document Object Map", correct: false },
      { text: "Data Object Model", correct: false },
      { text: "Digital Object Model", correct: false },
    ],
  },
  {
    question: "Which attribute specifies the source file of an image?",
    answers: [
      { text: "src", correct: true },
      { text: "href", correct: false },
      { text: "alt", correct: false },
      { text: "link", correct: false },
    ],
  },
  {
    question: "What is the correct way to write a comment in HTML?",
    answers: [
      { text: "<!-- This is a comment -->", correct: true },
      { text: "// This is a comment", correct: false },
      { text: "# This is a comment", correct: false },
      { text: "/* This is a comment */", correct: false },
    ],
  }
  // --- ADDED QUESTIONS END ---
];

// Add this constant at the top with other constants
const QUESTIONS_PER_ROUND = 5;

// DOM Elements
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");
const timerElement = document.getElementById("timer");
const feedbackElement = document.getElementById("feedback");

// Quiz State
let currentQuestionIndex = 0;
let score = 0;
let timeLeft;
let timerInterval;
let shuffledQuestions = [];

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 10;
  nextButton.innerHTML = "Next";
  feedbackElement.classList.remove("show");
  feedbackElement.textContent = "";
  timerElement.style.display = "block";
  timerElement.textContent = "⌛ Time Left: 10s";
  
  // Shuffle questions and take first 5
  shuffledQuestions = [...questions]
    .sort(() => Math.random() - 0.5)
    .slice(0, QUESTIONS_PER_ROUND);
    
  showQuestion();
  startTimer();
}

function showQuestion() {
  resetState();
  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  questionElement.innerHTML = `Question ${currentQuestionIndex + 1}/${QUESTIONS_PER_ROUND}: ${currentQuestion.question}`;

  // Shuffle answers
  const shuffledAnswers = [...currentQuestion.answers].sort(() => Math.random() - 0.5);

  shuffledAnswers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    if (answer.correct) button.dataset.correct = answer.correct;
    button.addEventListener("click", handleAnswer);
    answerButton.appendChild(button);
  });

  startTimer(); // Start fresh timer for each question
}

function handleAnswer(e) {
  stopTimer();
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  // Show feedback
  showFeedback(isCorrect, selectedBtn);

  // Disable all buttons and show correct answer
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  if (isCorrect) score++;
  nextButton.style.display = "block";
}

function showFeedback(isCorrect, selectedBtn) {
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    feedbackElement.innerHTML = `
            <p class="correct-feedback">✅ Correct!</p>
            <p class="feedback-detail">Well done!</p>
        `;
    feedbackElement.style.color = "#28a745";
  } else {
    selectedBtn.classList.add("incorrect");
    const correctAnswer = Array.from(answerButton.children).find(
      (button) => button.dataset.correct === "true"
    ).innerHTML;
    feedbackElement.innerHTML = `
            <p class="wrong-feedback">❌ Incorrect!</p>
            <p class="feedback-detail">The correct answer is: ${correctAnswer}</p>
        `;
    feedbackElement.style.color = "#dc3545";
  }
  feedbackElement.classList.add("show");
}

function resetState() {
  stopTimer();
  nextButton.style.display = "none";
  feedbackElement.classList.remove("show");
  feedbackElement.textContent = "";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);

  timeLeft = 10; // Reset to 10 seconds
  timerElement.style.color = "#fff";
  timerElement.textContent = `⌛ Time Left: ${timeLeft}s`;

  timerInterval = setInterval(() => {
    timeLeft--;
    timerElement.textContent = `⌛ Time Left: ${timeLeft}s`;

    if (timeLeft <= 3) {
      timerElement.style.color = "#ff9900";
    }

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      handleTimeout();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function handleTimeout() {
  stopTimer();
  disableAnswerButtons();
  showCorrectAnswer();

  feedbackElement.innerHTML = `
      <p class="wrong-feedback">⏰ Time's Up!</p>
      <p class="feedback-detail">Click Retry to start over</p>
  `;
  feedbackElement.classList.add("show");
  feedbackElement.style.color = "#dc3545";

  nextButton.innerHTML = "Retry";
  nextButton.classList.add("retry");
  nextButton.style.display = "block";
  nextButton.onclick = startQuiz;
}

function disableAnswerButtons() {
  Array.from(answerButton.children).forEach((button) => {
    button.disabled = true;
  });
}

function showCorrectAnswer() {
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
  });
}

function showScore() {
  resetState();
  stopTimer();
  timerElement.style.display = "none";
  questionElement.innerHTML = `Quiz Complete! Your score: ${score} out of ${QUESTIONS_PER_ROUND}`;
  feedbackElement.classList.remove("show");
  
  nextButton.innerHTML = "Play Again";
  nextButton.classList.add("play-again");
  nextButton.style.display = "block";
}

// Event Listeners
nextButton.addEventListener("click", () => {
  if (nextButton.classList.contains("play-again")) {
    nextButton.classList.remove("play-again");
    startQuiz();
  } else if (nextButton.classList.contains("retry")) {
    nextButton.classList.remove("retry");
    startQuiz();
  } else {
    currentQuestionIndex++;
    if (currentQuestionIndex < QUESTIONS_PER_ROUND) {
      showQuestion(); // This will now start a fresh 10-second timer
    } else {
      showScore();
    }
  }
});

// Start the quiz
startQuiz();
