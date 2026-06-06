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

    const isOpen = answer.classList.contains("max-h-96");

    const answers = document.querySelectorAll(".faq-answer");

    // 1. fermer toutes les réponses
    answers.forEach((faqAnswer) => {
      faqAnswer.classList.remove("max-h-96");
      faqAnswer.classList.add("max-h-0");
    });

    // 2. reset icônes
    document.querySelectorAll(".icon-plus").forEach((icon) => {
      icon.classList.remove("hidden");
    });

    document.querySelectorAll(".icon-minus").forEach((icon) => {
      icon.classList.add("hidden");
    });

    // 3. ouvrir si nécessaire
    if (!isOpen) {
      answer.classList.remove("max-h-0");
      answer.classList.add("max-h-96");

      plusIcon.classList.add("hidden");
      minusIcon.classList.remove("hidden");
    }
  });
});