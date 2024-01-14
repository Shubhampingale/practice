// Quiz data
const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Berlin", "Paris", "Rome", "Madrid"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Earth", "Mars", "Venus", "Jupiter"],
      correctAnswer: "Mars",
    },
    // Add more questions...
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  // Function to display the current question
  function displayQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const scoreElement = document.getElementById("score");
  
    // Reset choices and score display
    choicesElement.innerHTML = "";
    scoreElement.textContent = "";
  
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
  
    currentQuestion.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.textContent = choice;
      button.onclick = () => checkAnswer(choice);
      choicesElement.appendChild(button);
    });
  }
  
  // Function to check the user's answer
  function checkAnswer(userChoice) {
    const currentQuestion = questions[currentQuestionIndex];
  
    if (userChoice === currentQuestion.correctAnswer) {
      score++;
    }
  
    // Move to the next question
    nextQuestion();
  }
  
  // Function to move to the next question
  function nextQuestion() {
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      // Quiz is finished, show the total score
      showScore();
    }
  }
  
  // Function to show the total score
  function showScore() {
    const quizContainer = document.getElementById("quiz-container");
    const scoreElement = document.getElementById("score");
  
    scoreElement.textContent = `Your Score: ${score} out of ${questions.length}`;
  }
  
  // Display the first question when the page loads
  window.onload = displayQuestion;
  