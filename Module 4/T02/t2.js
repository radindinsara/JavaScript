const form = document.getElementById("myForm");
const input = document.getElementById("myInput");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let value = input.value;

    fetch("https://api.tvmaze.com/search/shows?q=" + value)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
        })
        .catch(function(error) {
            console.log("Error:", error);
        });
});
