import "./style.css";

// const buttons = document.querySelectorAll(".faq-btn");

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const article = button.closest("article");

//     const answer = article.querySelector(".faq-answer");
//     const plusIcon = button.querySelector(".icon-plus");
//     const minusIcon = button.querySelector(".icon-minus");

//     answer.classList.toggle("hidden");
//     plusIcon.classList.toggle("hidden");
//     minusIcon.classList.toggle("hidden");
//     console.log(answer);
//   });
// });

/* 
const buttons = document.querySelectorAll(".faq-btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {

    // 1. Fermer toutes les réponses
    const answers = document.querySelectorAll(".faq-answer");

    answers.forEach((answer) => {
      answer.classList.add("hidden");
    });

    // 2. Trouver l'article cliqué
    const article = button.closest("article");

    // 3. Trouver sa réponse
    const answer = article.querySelector(".faq-answer");

    // 4. Ouvrir cette réponse
    answer.classList.remove("hidden");

  });
}); */

const buttons = document.querySelectorAll(".faq-btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const article = button.closest("article");
    const plusIcon = button.querySelector(".icon-plus");
    const minusIcon = button.querySelector(".icon-minus");

    const answer = article.querySelector(".faq-answer");

    const isOpen = !answer.classList.contains("hidden");

    const answers = document.querySelectorAll(".faq-answer");

    answers.forEach((answer) => {
      answer.classList.add("hidden");
    });

    if (!isOpen) {
      answer.classList.remove("hidden");
    }

    plusIcon.classList.toggle("hidden");
    minusIcon.classList.toggle("hidden");
  });
});
