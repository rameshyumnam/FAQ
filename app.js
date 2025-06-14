const arrow = document.querySelectorAll(".arrow");
const faqData = document.querySelectorAll(".faq-data");

arrow.forEach((arr, faq) => {
    arr.addEventListener("click", () => {
        faqData[faq].classList.toggle("active")
    })
})