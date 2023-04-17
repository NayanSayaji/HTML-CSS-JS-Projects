const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener('click', generateJoke)


generateJoke();

// using async await


async function generateJoke() {

    const URL = "https://icanhazdadjoke.com";
    
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    const res = await fetch(URL, config)

    const data = await res.json()
    
    jokeEl.innerHTML = data.joke

}


// const URL = "https://icanhazdadjoke.com";
// // const URL = "https://backend-omega-seven.vercel.app/api/getjoke";

// const config = {
//     headers: {
//         'Accept': 'application/json'
//     }
// };

// function generateJoke() {
//     fetch(URL, config)
//         .then((res) => res.json())
//         .then((data) => {
//             jokeEl.innerHTML = data.joke;
//         })

// }