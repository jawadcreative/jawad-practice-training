const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
        const isOpen = item.classList.contains("active");
        faqItems.forEach((faq) => {
            faq.classList.remove("active");
            const faqQuestion = faq.querySelector(".faq-question");
            faqQuestion.setAttribute("aria-expanded", "false");
        });
        if (!isOpen) {
            item.classList.add("active");
            question.setAttribute("aria-expanded", "true");
        }
    });
});
