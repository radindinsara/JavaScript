const form = document.getElementById("searchForm");
const input = document.getElementById("showInput");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const value = input.value;

    fetch("https://api.tvmaze.com/search/shows?q=" + value)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
        });
});
