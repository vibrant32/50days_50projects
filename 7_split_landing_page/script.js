const container = document.querySelector('.container');
const playStation = document.querySelector('.left');
const xbox = document.querySelector('.right');

playStation.addEventListener('mouseenter', () => container.classList.add('hover-left'));

playStation.addEventListener('mouseleave', () => container.classList.remove('hover-left'));

xbox.addEventListener('mouseenter', () => container.classList.add('hover-right'));

xbox.addEventListener('mouseleave', () => container.classList.remove('hover-right'));