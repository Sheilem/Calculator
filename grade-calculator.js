
function calculateGrade() {
    // Get input values
    var numAssignments = parseFloat(document.getElementById("num-assignments").value);
    var assignmentWeights = [];
    var assignmentScores = [];
    for (var i = 1; i <= numAssignments; i++) {
        var score = parseFloat(document.getElementById("assignment-score-" + i).value);
        if (score > 100) {
            alert("Assignment score cannot be greater than 100");
            return;
        }
        assignmentWeights.push(parseFloat(document.getElementById("assignment-weight-" + i).value));
        assignmentScores.push(score);
    }
    var totalAssignmentWeight = assignmentWeights.reduce((a, b) => a + b, 0);
    var finalWeight = 100 - totalAssignmentWeight;
    var finalScore = parseFloat(document.getElementById("final-score").value);

    if (finalScore > 100) {
        alert("Final exam score cannot be greater than 100");
        return;
    }

    // Calculate final grade
    var assignmentTotalScore = 0;
    for (var i = 0; i < assignmentWeights.length; i++) {
        assignmentTotalScore += ((assignmentWeights[i]) * assignmentScores[i]) / 100;
    }

    if (totalAssignmentWeight > 30) {
        alert("Total assignment weight cannot be greater than 30");
        return;
    }

    var finalGrade = (assignmentTotalScore) + (finalScore * (finalWeight / 100));

    // Display final grade and assignment weight sum
    document.getElementById("final-grade").innerHTML = finalGrade.toFixed(2);
    document.getElementById("total-assignment-weight").innerHTML = totalAssignmentWeight.toFixed(2);
}



function generateAssignmentFields() {
    // Get number of assignments
    var numAssignments = parseFloat(document.getElementById("num-assignments").value);
  
    // Check if number of assignments is greater than 20
    if (numAssignments > 20) {
      alert("Number of assignments cannot be greater than 20");
      document.getElementById("num-assignments").value = 20;
      numAssignments = 20;
    }
  
    // Store existing input values
    var assignmentWeights = [];
    var assignmentScores = [];
    var assignmentWeightInputs = document.querySelectorAll('input[id^="assignment-weight-"]');
    var assignmentScoreInputs = document.querySelectorAll('input[id^="assignment-score-"]');
    for (var i = 0; i < assignmentWeightInputs.length; i++) {
      assignmentWeights.push(assignmentWeightInputs[i].value);
      assignmentScores.push(assignmentScoreInputs[i].value);
    }
  
    // Generate assignment input fields
    var assignmentFields = "";
    for (var i = 1; i <= numAssignments; i++) {
      assignmentFields += '<div class="assignment-input">';
      assignmentFields += '<label for="assignment-weight-' + i + '">' + i + '.)</label>';
      assignmentFields += '<input type="number" pattern="[0-9]*" class="simple-input expandable" id="assignment-weight-' + i + '" min="0" max="100" oninput="updateExamScore()" placeholder="Assignment ' + i + ' Weight" value="' + assignmentWeights[i-1] + '">';
      //assignmentFields += '<label for="assignment-score-' + i + '">Score:</label>';
      assignmentFields += '<input type="number" pattern="[0-9]*" class="simple-input expandable" id="assignment-score-' + i + '" min="0" max="100" oninput="updateExamScore()" placeholder="Assignment ' + i + ' Score" value="' + assignmentScores[i-1] + '">';
      assignmentFields += '</div>';
    }
  
    // Display assignment input fields
    var assignmentFieldsElement = document.getElementById("assignment-fields");
    assignmentFieldsElement.innerHTML = assignmentFields;
  }
  