const container = document.querySelector('.container');

const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');

openBtn.addEventListener('click', () => container.classList.add('show-nav'));  

closeBtn.addEventListener('click', () => container.classList.remove('show-nav'));
