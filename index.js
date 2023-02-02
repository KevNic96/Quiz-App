const quizData = [
  {
    question: "¿Cuál es el lenguaje de programación más usado en 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question:
      "¿Qué tipo de Selector selecciona a todos los elementos del HTML?",
    a: "Selector Universal",
    b: "Selector de elemetos",
    c: "Selector de clase",
    d: "Agrupación de selectores",
    correct: "a",
  },
  {
    question: "¿Que significan las siglas HTML?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "¿En qué año fue lanzado JavaScript?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "¿Cuál de las siguientes opciones NO es una pseudo-clase?",
    a: ":empty",
    b: ":first-child",
    c: ":last-child",
    d: "::before",
    correct: "d",
  },
  {
    question:
      "¿Cuál de los siguientes valores de Display permite ocultar elementos sin eliminarlos?",
    a: "block",
    b: "inline",
    c: "none",
    d: "table",
    correct: "c",
  },
  {
    question: "¿Cuál es la forma correcta de escribir en console.log?",
    a: "console.log('Hola Mundo');",
    b: "console.log(Hola Mundo);",
    c: "consolelog(`Hola Mundo`);",
    d: "console.log{'Hola Mundo');",
    correct: "a",
  },
  {
    question:
      "Seleccionar el tipo de dato que representa un valor mediante una secuencia de caracteres:",
    a: "Number",
    b: "Null",
    c: "Boolean",
    d: "String",
    correct: "d",
  },
  {
    question: "¿Qué es React?",
    a: "Un lenguaje de programación similar a JavaScript",
    b: "Una biblioteca de JavaScript utilizada para construir interfaces de usuario.",
    c: "Un operador lógico",
    d: "Ninguno de los anteriores",
    correct: "b",
  },
  {
    question: "¿Para qué se utilizan los comentarios en el código?",
    a: "Para agregar texto al .HTML",
    b: "Para borrar texto del .HTML",
    c: "Para describir aspectos importantes sin modificar el resto del código",
    d: "Para establecer valores numéricos",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
const f_text = document.getElementById("f_text");
const g_text = document.getElementById("g_text");
const h_text = document.getElementById("h_text");
const i_text = document.getElementById("i_text");
const j_text = document.getElementById("j_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  //check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>`;
    }
  }
});
