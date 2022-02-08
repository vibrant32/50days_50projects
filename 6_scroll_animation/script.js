const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        // gets the info about element having size and position relative to viewport
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop < triggerBottom) {
            box.classList.add('show');
        }
        else {
            box.classList.remove('show');
        }
    })
}