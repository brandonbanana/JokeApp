const generateJokeBtn = document.querySelector(".generate-joke-btn");
const jokeContainer = document.querySelector(".jokes-container");


generateJokeBtn.addEventListener("click", function() {
    fetch("https://v2.jokeapi.dev/joke/Any").then(function(res) {
        return res.json();
    }).then(function(data) {
        console.log(data);
        jokeContainer.innerHTML = `
            <div class="joke-tiem">
                <div>${data.joke ? data.joke : data.setup}</div>
                <div>${data.delivery ? data.delivery : ""}</div>
            </div>
        `;
    });
});