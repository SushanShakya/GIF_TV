var url = "https://api.giphy.com/v1/gifs/trending?api_key=2N9XGkXK1KURyFWNLWJUqG4apHRUZPMk&limit=25&rating=g";

let count = 0;

let json;

let button = document.querySelector(".next");

button.addEventListener('click', () => {
    count += 1;
    render(json)
});

function getGifs() {
    fetch(url).then((d) => d.json()).then(
        (e) => {
            json = e.data;
            console.log(json)
            render(json);
        }
    );
}

function render(json) {
    let tv = document.querySelector(".tv");
    tv.innerHTML = "<img src = \"" + json[count % json.length].images.fixed_height.url + "\" >";

}

getGifs();
