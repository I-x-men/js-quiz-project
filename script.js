// Stijlen toevoegen voor Kahoot-style layout
const style = document.createElement("style");
style.textContent = `
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        margin: 0;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        font-family: Arial, sans-serif;
    }
    
    #question {
        text-align: center;
        font-size: 2em;
        font-weight: bold;
        color: white;
        margin-bottom: 40px;
    }
    
    #answers {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        max-width: 600px;
        margin-bottom: 30px;
    }
    
    #answers button {
        padding: 30px;
        font-size: 1.2em;
        font-weight: bold;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.3s;
        color: white;
    }
    
    #answers button:nth-child(1) {
        background-color: #FF6B6B;
    }
    
    #answers button:nth-child(2) {
        background-color: #4ECDC4;
    }
    
    #answers button:nth-child(3) {
        background-color: #FFD93D;
        color: #333;
    }
    
    #answers button:nth-child(4) {
        background-color: #6BCB77;
    }
    
    #answers button:hover {
        transform: scale(1.05);
    }
    
    #result {
        text-align: center;
        font-size: 1.5em;
        color: white;
        margin-bottom: 20px;
    }
    
    #next-btn {
        padding: 15px 40px;
        font-size: 1.1em;
        background-color: white;
        color: #667eea;
        border: none;
        border-radius: 25px;
        cursor: pointer;
        font-weight: bold;
        transition: all 0.3s;
    }
    
    #next-btn:hover {
        transform: scale(1.05);
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }
    
    main {
        text-align: center;
        background: rgba(255,255,255,0.1);
        padding: 60px;
        border-radius: 20px;
        backdrop-filter: blur(10px);
        box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }

    #avatar {
        width: 100px;
        height: 100px;
        margin: 0 auto 30px;
        position: relative;
    }

    .avatar-head {
        width: 80px;
        height: 80px;
        background: #FFD93D;
        border-radius: 50%;
        margin: 0 auto 10px;
        position: relative;
        box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    }

    .avatar-eyes {
        position: absolute;
        width: 100%;
        top: 30%;
        display: flex;
        justify-content: center;
        gap: 20px;
    }

    .avatar-eye {
        width: 12px;
        height: 12px;
        background: #333;
        border-radius: 50%;
    }

    .avatar-mouth {
        position: absolute;
        width: 30px;
        height: 15px;
        border: 3px solid #333;
        border-top: none;
        border-radius: 0 0 30px 30px;
        left: 50%;
        transform: translateX(-50%);
        bottom: 15px;
    }

    .avatar-body {
        width: 60px;
        height: 50px;
        background: #6BCB77;
        margin: 0 auto;
        border-radius: 10px;
    }
`;
document.head.appendChild(style);

const questions = [
    {
        question: "Wat betekent DOM?",
        answers: ["Document Object Model", "Data Object Method", "Digital Order Model"],
        correct: 0
    },
    {
        question: "Welke taal draait in de browser?",
        answers: ["Python", "JavaScript", "PHP"],
        correct: 1
    },
    {
        question: "Hoe selecteer je een element met id?",
        answers: ["getElementById", "querySelectorAll", "getClassName"],
        correct: 0
    },
    {
        question: "Welke keyword gebruik je voor een functie?",
        answers: ["function", "method", "def"],
        correct: 0
    },
    {
        question: "Wat doet addEventListener?",
        answers: ["Stijlen toevoegen", "Events afhandelen", "HTML laden"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("next-btn");

function showQuestion() {
    resultEl.textContent = "";
    answersEl.innerHTML = "";
    nextBtn.style.display = "none";

    const q = questions[currentQuestion];
    questionEl.textContent = q.question;

    q.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.addEventListener("click", () => checkAnswer(index));
        answersEl.appendChild(button);
    });
}

function checkAnswer(index) {
    if (index === questions[currentQuestion].correct) {
        resultEl.textContent = "✅ Juist!";
        score++;
    } else {
        resultEl.textContent = "❌ Fout!";
    }
    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    questionEl.textContent = "Quiz afgerond!";
    answersEl.innerHTML = "";
    resultEl.textContent = `Je score: ${score} van ${questions.length}`;
    nextBtn.style.display = "none";
}

const main = document.createElement("main");

main.innerHTML = `
    <div id="avatar">
        <div class="avatar-head">
            <div class="avatar-eyes">
                <div class="avatar-eye"></div>
                <div class="avatar-eye"></div>
            </div>
            <div class="avatar-mouth"></div>
        </div>
        <div class="avatar-body"></div>
    </div>

    <p id="question"></p>
    <div id="answers"></div>
    <p id="result"></p>
    <button id="next-btn">Volgende vraag</button>
`;

document.body.appendChild(main);


showQuestion();
