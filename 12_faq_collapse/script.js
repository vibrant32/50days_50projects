const toggleBtns = document.querySelectorAll('.faq-toggle');
const faqContainer = document.querySelectorAll('.faq');

toggleBtns.forEach(btn => {
    // console.log(btn);
    btn.addEventListener('click', () => {
        btn.parentNode.classList.toggle('active');
    });
});