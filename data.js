// Array met quizvragen
const questions = [
    "Wat betekent DOM?",
    "Welke taal draait in de browser?",
    "Hoe selecteer je een element met id?",
    "Welke keyword gebruik je voor een functie?",
    "Wat doet addEventListener?"
];

// Array met antwoordopties
const answers = [
    ["Document Object Model", "Data Object Method", "Digital Order Model"],
    ["Python", "JavaScript", "PHP"],
    ["getElementById", "querySelectorAll", "getClassName"],
    ["function", "method", "def"],
    ["Stijlen toevoegen", "Events afhandelen", "HTML laden"]
];

// Array met juiste antwoorden (index)
const correctAnswers = [0, 1, 0, 0, 1];

// Variabelen voor voortgang
let currentQuestion = 0;
let score = 0;

// Testen met console.log
console.log("Vragen:", questions);
console.log("Antwoorden:", answers);
console.log("Juiste antwoorden:", correctAnswers);
console.log("Huidige vraag:", currentQuestion);
console.log("Score:", score);
