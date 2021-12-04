let container = document.getElementById('container');

let button = document.getElementById("button");
button.addEventListener("click", getDegrees);

async function getDegrees() {
  // fetch the url
  await fetch("./src/degrees.json")
    // get your data here, and check for the response status. If it's not 200, throw an error
    .then((response) => response.json())
    .then((data) =>
      container.innerHTML = (
        `Received degree data: ${data}`
      )
    );
}