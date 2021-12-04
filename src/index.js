let degreeInfo = document.getElementById('degreeInfo');
let degreeInfoDiv = document.getElementById('degreeInfoDiv');
let button = document.getElementById("button");

button.addEventListener("click", getDegrees);

/**
 * Fetches the Degrees JSON file and processes the response
 */
async function getDegrees() {
  await fetch("./src/degrees.json")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      degreeInfo.innerHTML = parseData(data);
      button.style.display = "none";
      degreeInfoDiv.style.display = "block";
    })
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
    let degreeText = `School: ${degree['school']}<br>` +
                     `Program: ${degree['program']}<br>` +
                     `Degree Type: ${degree['degreeType']}<br>` +
                     `Graduation Year: ${degree['graduationYear']}<br><br>`;
    textToDisplay += degreeText;
  });

  return textToDisplay;
}