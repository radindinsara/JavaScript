const form = document.getElementById("myForm");
const input = document.getElementById("myInput");
const resultsDiv = document.getElementById("results");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let value = input.value;

    // clear previous results
    resultsDiv.innerHTML = "";

    fetch("https://api.tvmaze.com/search/shows?q=" + value)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            data.forEach(function(tvShow) {

                // make article
                const article = document.createElement("article");

                // name
                const title = document.createElement("h2");
                title.textContent = tvShow.show.name;
                article.appendChild(title);

                // link
                const link = document.createElement("a");
                link.href = tvShow.show.url;
                link.target = "_blank";
                link.textContent = "Show details";
                article.appendChild(link);

                // image (with optional chaining)
                const img = document.createElement("img");
                img.src = tvShow.show.image?.medium || "";
                img.alt = tvShow.show.name;
                article.appendChild(img);

                // summary (already contains <p>, so use div)
                const summaryDiv = document.createElement("div");
                summaryDiv.innerHTML = tvShow.show.summary;
                article.appendChild(summaryDiv);

                // add article to the page
                resultsDiv.appendChild(article);
            });

        })
        .catch(function(error) {
            console.log("Error:", error);
        });
});
