// Array met quizvragen (coderingsvragen, ~20)
const questions = [
    {
        question: "Wat betekent DOM?",
        answers: ["Document Object Model", "Data Output Method", "Dynamic Object Model", "Direct Object Module"],
        correct: 0
    },
    {
        question: "Welke taal draait in de browser?",
        answers: ["Python", "JavaScript", "PHP", "C++"],
        correct: 1
    },
    {
        question: "Hoe selecteer je een element met ID?",
        answers: ["getElementById()", "querySelectorAll()", "getElementsByClassName()", "getElementByClass()"],
        correct: 0
    },
    {
        question: "Met welk keyword maak je een functie in JavaScript?",
        answers: ["function", "def", "method", "fun"],
        correct: 0
    },
    {
        question: "Wat doet addEventListener()?",
        answers: ["Events afhandelen", "HTML laden", "CSS toepassen", "Variabelen declareren"],
        correct: 0
    },
    {
        question: "Welke datatype is tekst in JavaScript?",
        answers: ["string", "number", "boolean", "object"],
        correct: 0
    },
    {
        question: "Wat is een array?",
        answers: ["Een lijst met meerdere waarden", "Een functie", "Een conditie", "Een object"],
        correct: 0
    },
    {
        question: "Hoe maak je een comment in JavaScript?",
        answers: ["// comment", "/* comment */", "# comment", "A en B"],
        correct: 3
    },
    {
        question: "Wat doet 'console.log()'?",
        answers: ["Geeft output in de console", "Maakt een variabele", "Voegt een event toe", "Stopt de code"],
        correct: 0
    },
    {
        question: "Welke waarde heeft een boolean?",
        answers: ["true of false", "0 of 1", "tekst", "null"],
        correct: 0
    },
    {
        question: "Hoe begin je een for-lus?",
        answers: ["for(let i=0; i<10; i++)", "for i in range(10)", "loop(i=0; i<10; i++)", "foreach(i in 10)"],
        correct: 0
    },
    {
        question: "Wat doet 'document.createElement()'?",
        answers: ["Maakt een nieuw HTML-element", "Verwijdert een element", "Verandert een ID", "Laadt CSS"],
        correct: 0
    },
    {
        question: "Hoe haal je de waarde van een inputveld op?",
        answers: ["element.value", "element.innerHTML", "element.textContent", "element.getValue()"],
        correct: 0
    },
    {
        question: "Wat is 'NaN' in JavaScript?",
        answers: ["Not a Number", "Nieuw element", "Null waarde", "Boolean type"],
        correct: 0
    },
    {
        question: "Welke operator is gelijk aan \"niet gelijk\"?",
        answers: ["!=", "==", "===", "!=="],
        correct: 3
    },
    {
        question: "Hoe declareer je een constante?",
        answers: ["const pi = 3.14", "let pi = 3.14", "var pi = 3.14", "constant pi = 3.14"],
        correct: 0
    },
    {
        question: "Wat doet 'innerHTML'?",
        answers: ["Wijzigt de inhoud van een element", "Creëert een nieuwe variabele", "Voegt een class toe", "Laadt een script"],
        correct: 0
    },
    {
        question: "Wat is een object in JavaScript?",
        answers: ["Een verzameling van key-value paren", "Een functie", "Een array", "Een string"],
        correct: 0
    },
    {
        question: "Wat doet 'JSON.stringify()'?",
        answers: ["Zet een object om in een string", "Parse een JSON file", "Maakt een array", "Verwijdert een element"],
        correct: 0
    },
    {
        question: "Welke methode voegt een item toe aan het einde van een array?",
        answers: ["push()", "pop()", "shift()", "unshift()"],
        correct: 0
    }
];

// Variabelen voor voortgang
let currentQuestion = 0;

// DOM-elementen
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("next-btn");

// Functie: toont de huidige vraag + antwoordknoppen
function showQuestion() {
    // Oude inhoud overschrijven
    questionEl.textContent = "";
    answersEl.innerHTML = "";
    resultEl.textContent = "";
    nextBtn.style.display = "none";

    const q = questions[currentQuestion];

    // Vraag tonen
    questionEl.textContent = q.question;

    // Antwoorden tonen als knoppen
    q.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;

        // Feedback bij selectie (voor deze stap)
        button.addEventListener("click", () => {
            resultEl.textContent = `Je koos: ${answer}`;
            nextBtn.style.display = "inline-block";
        });

        answersEl.appendChild(button);
    });
}

// Volgende knop
nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        // Einde quiz
        questionEl.textContent = "Quiz afgelopen!";
        answersEl.innerHTML = "";
        resultEl.textContent = "Goed gedaan 🎉";
        nextBtn.style.display = "none";
    }
});

// Start de quiz
showQuestion();
