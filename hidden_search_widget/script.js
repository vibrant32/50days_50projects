const searchContainer = document.querySelector('.search');
const searchButton = document.querySelector('.btn');
const input = document.querySelector('.input');

searchButton.addEventListener('click', () => {
    // toggles between removing a desired class or adding it
    searchContainer.classList.toggle('active');
    input.focus();
    // console.log(searchContainer.classList.length);
});
