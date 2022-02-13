const joke = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

// async function generateJoke() {
//     const config = {
//         headers: {
//             Accept: 'application/json',
//         },
//     }

//     const result = await fetch('https://icanhazdadjoke.com', config);

//     const data = await result.json();

//     joke.innerHTML = data.joke;
// }

async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    fetch('https://icanhazdadjoke.com', config)
        .then((res) => res.json())
        .then((data) => {
            joke.innerHTML = data.joke;
        })
}

