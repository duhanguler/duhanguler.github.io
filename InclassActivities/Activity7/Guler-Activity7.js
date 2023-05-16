var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) {
  return document.getElementById(id);
};

window.onload = function () {
  $("display_results").onclick = displayResults;
  $("display_scores").onclick = displayScores;
  $("add").onclick = addScore;
  // Set focus
  $("name").focus();
};

function displayResults() {
	console.log("Results showing triggered.");	
  var average = 0;
  var highestScore = -Infinity;

  for (var i = 0; i < scores.length; i++) {
    average = (average * i + scores[i]) / (i + 1);

    if (scores[i] > highestScore) {
      highestScore = scores[i];
    }
  }

  var resultsDiv = $("results");
  resultsDiv.innerHTML =
    "<h2> Results </h2><br /> Average score is " +
    average.toFixed(2) +
    "<br /> Highest score is " +
    highestScore +
    "<br />";
	console.log("Results showed succesfully on the table.");
}

function displayScores() {
  var table = $("scores_table");
  // Clear table before displaying scores so our data will not display twice.
  table.innerHTML = "";

  // Create table header
  var headerRow = document.createElement("tr");
  var nameHeader = document.createElement("th");
  nameHeader.textContent = "Name";
  var scoreHeader = document.createElement("th");
  scoreHeader.textContent = "Score";
  headerRow.appendChild(nameHeader);
  headerRow.appendChild(scoreHeader);
  table.appendChild(headerRow);

  // Add rows for each name and score with loop
  for (var i = 0; i < names.length; i++) {
    var row = document.createElement("tr");
    var nameCell = document.createElement("td");
    nameCell.textContent = names[i];
    var scoreCell = document.createElement("td");
    scoreCell.textContent = scores[i];
    row.appendChild(nameCell);
    row.appendChild(scoreCell);
    table.appendChild(row);
	console.log("Row added. Name " + names[i] + " Score " + scores[i]);
  }
}

function addScore() {
  var nameInput = $("name");
  var scoreInput = $("score");
  var name = nameInput.value.trim();
  var score = parseInt(scoreInput.value);

  if (name === "" || isNaN(score) || score < 0 || score > 100) {
    alert("You must enter a name and a valid score!");
  } else {
	console.log("Appending something.");
    names.push(name);
    scores.push(score);
	console.log("Appended succesfully. Name " + name + " Score " + score);
    // Clear input fields
    nameInput.value = "";
    scoreInput.value = "";
	console.log("Inputs cleared.");
    // Update scores
    displayScores();
	console.log("Scores updated.");
    // Set focus to name.
    $("name").focus();
	console.log("Focus set to name.");
  }
}