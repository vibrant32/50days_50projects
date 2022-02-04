const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        resizePreviousPanel();
        panel.classList.add('active')
    });
});

function resizePreviousPanel() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}
