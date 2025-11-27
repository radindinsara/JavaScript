const form = document.getElementById("myForm");
const input = document.getElementById("myInput");
const resultsDiv = document.getElementById("results");

const DEFAULT_IMAGE = "https://placehold.co/210x295?text=Not%20Found";

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let value = input.value;

    resultsDiv.innerHTML = "";

    fetch("https://api.tvmaze.com/search/shows?q=" + value)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            data.forEach(function(tvShow) {

                const article = document.createElement("article");

                const title = document.createElement("h2");
                title.textContent = tvShow.show.name;
                article.appendChild(title);

                const link = document.createElement("a");
                link.href = tvShow.show.url;
                link.target = "_blank";
                link.textContent = "Show details";
                article.appendChild(link);

                const img = document.createElement("img");
                img.src = tvShow.show.image ? tvShow.show.image.medium : DEFAULT_IMAGE;
                img.alt = tvShow.show.name;
                article.appendChild(img);

                const summaryDiv = document.createElement("div");
                summaryDiv.innerHTML = tvShow.show.summary;
                article.appendChild(summaryDiv);

                resultsDiv.appendChild(article);
            });

        })
        .catch(function(error) {
            console.log("Error:", error);
        });
});
