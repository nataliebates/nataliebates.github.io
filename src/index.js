async function getDegrees(url) {
  // fetch the url
  await fetch(url)
    // get your data here, and check for the response status. If it's not 200, throw an error
    .then((response) => response.json())
    .then((data) =>
      document.write(
        `Received degree data`
      )
    );
}

const button = document.getElementById("button");
button.addEventListener("click", getDegrees("./src/degrees.json"));
