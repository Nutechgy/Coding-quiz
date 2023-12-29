<script.js>
    const questions= [
        
            question:'What is the correct way to declare a variable in JavaScript?',
            options: ['var x = 5;', 'let x = 5;', 'const x = 5;', 'Both let and const'],
            correctAnswer: 'Both let and const'
    
        
            question: 'Which operator is used for strict equality in JavaScript?',
            options: ['==', '===', '=', '!='],
            correctAnswer: '==='
        ,
        
            question: 'What is the purpose of the `typeof` operator in JavaScript?',
            options: ['To check if a variable is defined', 'To get the type of a variable', 'To create a new type', 'To compare two variables'],
            correctAnswer: 'To get the type of a variable'
        ,
        
            question: 'What is an example of a falsy value in JavaScript?',
            options: ['0', 'null', 'undefined', 'All of the above'],
            correctAnswer: 'All of the above'
        
        
            question: 'Which array method adds one or more elements to the end of an array and returns the new length?',
            options: ['push()', 'pop()', 'shift()', 'unshift()'],
            correctAnswer: 'push()'
    ,
        
            question: 'What does the acronym DOM stand for?',
            options: ['Document Object Model', 'Data Object Model', 'Dynamic Object Model', 'Document Oriented Model'],
            correctAnswer: 'Document Object Model'
        
        
            question: 'In JavaScript, what is the purpose of the `setTimeout` function?',
            options: ['To set the current time', 'To create a delay before executing a function', 'To measure the time elapsed during program execution', 'To stop the execution of a function'],
            correctAnswer: 'To create a delay before executing a function'
        ,
        
            question: 'Which keyword is used to declare a function in JavaScript?',
            options: ['function', 'method', 'class', 'procedure'],
            correctAnswer: 'function'
        ,
        
            question: 'What is the purpose of the `this` keyword in JavaScript?',
            options: ['To refer to the current function', 'To refer to the global object', 'To refer to the current object', 'To refer to the previous object'],
            correctAnswer: 'To refer to the current object'
        ,
        
            question: 'Which event is triggered when an element is clicked in the browser?',
            options: ['mouseover', 'keydown', 'click', 'submit'],
            correctAnswer: 'click'
        
    ];

    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options'); const messageElement = document.getElementById('message');
    const timerElement = document.getElementById('timer');
    const scoreElement = document.getElementById('score');
    const submitButton = document.getElementById('submitBtn');
    const startButton = document.getElementById('startBtn');

    let currentQuestionIndex = 0;
    let timer;
    let timeLeft = 60;
    let score = 0;

    function showQuestion() {}
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;

        optionsElement.innerHTML = '';
        currentQuestion.options.forEach(option, index) =</script.js> 
        {
            const optionButton = document.createElement('button');
            optionButton.textContent = option;
            optionButton.classList.add('option-btn');
            optionButton.addEventListener('click', () => checkAnswer(option));
            optionsElement.appendChild(optionButton);
        ;
    }
    function startQuiz() {
        startButton.disabled = true;
        timer = setInterval(() => {
        timeLeft--;timerElement.textContent = `Time: ${timeLeft}`;


    

            if (timeLeft <= 0) {
                endQuiz();
            }
        }, 1000);

        showQuestion();
    }



    function checkAnswer(selectedAnswer) {
        const currentQuestion = questions[currentQuestionIndex];

        if (selectedAnswer === currentQuestion.correctAnswer) {
            alert('CORRECT');
            score++;
        } else {
            alert('WRONG ANSWER');
            timeLeft -= 10;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            alert('Quiz Completed!');
        }
    }

     
    function endQuiz() {
        clearInterval(timer);
        alert('Quiz Completed!\nYour score: ' + timeLeft);
        const initials = prompt('Enter your initials:');
        displayScore(initials);
    }

    function displayScore(initials) {
        const scoreEntry = document.createElement('div');
        scoreEntry.textContent = `${initials}: ${score} points`;
        scoreElement.appendChild(scoreEntry);
    }    

    startButton.addEventListener('click', startQuiz);
    submitButton.addEventListener('click', () => checkAnswer());

