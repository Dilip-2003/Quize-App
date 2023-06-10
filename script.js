// Quiz Questions
const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Rome", "Berlin", "London"],
      answer: "Paris"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
      answer: "Leonardo da Vinci"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturn", "Mars", "Earth"],
      answer: "Jupiter"
    }
  ];
  
  // Shuffle Questions
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  shuffleArray(questions);
  
  // Initialize Quiz
  function initializeQuiz() {
    const quizContainer = document.getElementById('quiz');
  
    // Clear previous quiz content
    quizContainer.innerHTML = '';
  
    // Create and append question elements
    questions.forEach((question, index) => {
      const questionElement = document.createElement('div');
      questionElement.classList.add('question');
  
      const questionText = document.createElement('h3');
      questionText.textContent = `Q${index + 1}. ${question.question}`;
  
      questionElement.appendChild(questionText);
  
      question.options.forEach(option => {
        const optionElement = document.createElement('input');
        optionElement.setAttribute('type', 'radio');
        optionElement.setAttribute('name', `question${index}`);
        optionElement.setAttribute('value', option);
  
        const optionLabel = document.createElement('label');
        optionLabel.textContent = option;
  
        questionElement.appendChild(optionElement);
        questionElement.appendChild(optionLabel);
      });
  
      quizContainer.appendChild(questionElement);
    });
  }
  
  // Show Quiz Results
  function showResults() {
    const quizContainer = document.getElementById('quiz');
    const selectedOptions = quizContainer.querySelectorAll('input[type="radio"]:checked');
  
    let score = 0;
    selectedOptions.forEach(option => {
      const questionIndex = parseInt(option.getAttribute('name').replace('question', ''));
      const selectedAnswer = option.value;
      const correctAnswer = questions[questionIndex].answer;
  
      if (selectedAnswer === correctAnswer) {
        score++;
      }
    });
  
    alert(`Your score is ${score} out of ${questions.length}`);
  }
  
  // Initialize quiz on page load
  initializeQuiz();
  