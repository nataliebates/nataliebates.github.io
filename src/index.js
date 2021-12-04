let degreeInfo = document.getElementById('degreeInfo');

let button = document.getElementById("button");
button.addEventListener("click", getDegrees);

async function getDegrees() {
  await fetch("./src/degrees.json")
    .then(response => response.json())
    .then((data) =>
      button.style.display = "none",
      degreeInfo.innerHTML = parseData(data),
      degreeInfo.style.display = "block"
    )
    .catch(error => {
      console.error('Error:', error);
    });

}

/**
 * Parses the degree data retrieved from the JSON file.
 * @param {} data The JSON data
 * @returns The degree data placed in a readable string format.
 */
function parseData(data) {
  const degrees = data.degrees;
  let textToDisplay = "";

  degrees.forEach(degree => {
    let degreeText = `<br>School: ${degree['school']}` +
                     `<br>Program: ${degree['program']}` +
                     `<br>Degree Type: ${degree['degreeType']}` +
                     `<br>Graduation Year: ${degree['graduationYear']}`;
    textToDisplay += degreeText;
  });

  return textToDisplay;
}