const buttons = document.querySelectorAll(".faq-btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const article = button.closest("article");

    const plusIcon = button.querySelector(".icon-plus");
    const minusIcon = button.querySelector(".icon-minus");

    const answer = article.querySelector(".faq-answer");

    const isOpen = answer.classList.contains("max-h-96");

    const answers = document.querySelectorAll(".faq-answer");

    answers.forEach((faqAnswer) => {
      faqAnswer.classList.remove("max-h-96");
      faqAnswer.classList.add("max-h-0");
    });

    document.querySelectorAll(".icon-plus").forEach((icon) => {
      icon.classList.remove("hidden");
    });

    document.querySelectorAll(".icon-minus").forEach((icon) => {
      icon.classList.add("hidden");
    });

    if (!isOpen) {
      answer.classList.remove("max-h-0");
      answer.classList.add("max-h-96");

      plusIcon.classList.add("hidden");
      minusIcon.classList.remove("hidden");
    }
  });
});
