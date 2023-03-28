function clearTextFields() {
// REMOVING ALL INPUTS IN TEXT FIELDS
  var textFields = document.getElementsByClassName('in');
  for (var i = 0; i < textFields.length; i++) {
    textFields[i].value = '';
  }
// REMOVING ALL OUTPUTS ON AVERAGE, REMARKS, DESCRIPTO
var descriptor = document.getElementById("descriptor");
var remarks = document.getElementById("remarks");
var average = document.getElementById("avg");

average.innerHTML = "";
descriptor.innerHTML = "";
remarks.innerHTML = "";
}

function calculate() {
// ASSIGNING SUBJECT GRADE TO ITS VALUES
var subj1 = document.getElementById("subj1").value;
var subj2 = document.getElementById("subj2").value;
var subj3 = document.getElementById("subj3").value;
var subj4 = document.getElementById("subj4").value;
var subj5 = document.getElementById("subj5").value;
var subj6 = document.getElementById("subj6").value;
var subj7 = document.getElementById("subj7").value;
// GETTING THE AVERAGE VALUE OF ALL THE GRADE
 var avg = (parseFloat(subj1) + parseFloat(subj2) + parseFloat(subj3) +
           parseFloat(subj4) + parseFloat(subj5) + parseFloat(subj6) + parseFloat(subj7)) / 7;
// ASSIGNING THE AVG AVERAGE AND GET THE AVG
 var average = document.getElementById("avg");
 average.innerHTML = avg.toFixed(2) + " %";

// ASSIGNING REMARKS AND DESCRIPTION 
var descriptor = document.getElementById("descriptor");
var remarks = document.getElementById("remarks");

// GRADE CONDITIONS FOR REMARK AND DESCRIPTOR
if (avg < 75) {
  descriptor.innerHTML = "Did Not Meet Expectation!";
  remarks.innerHTML = "FAILED!"
} else if (avg >= 75 && avg < 80) {
  descriptor.innerHTML = "Fairly Satisfactory!";
  remarks.innerHTML = "PASSED!"
} else if (avg >= 80 && avg < 85) {
  descriptor.innerHTML = "Satisfactory!";
  remarks.innerHTML = "PASSED!"
} else if (avg >= 85 && avg < 90) {
  descriptor.innerHTML = "Very Satisfactory!";
  remarks.innerHTML = "PASSED!"
} else if (avg >= 90 && avg <= 100) {
  descriptor.innerHTML = "Outstanding!";
  remarks.innerHTML = "PASSED!"
} else if (avg >= 101) {
  descriptor.innerHTML = "Does Not Exist!";
  remarks.innerHTML = "Does Not Exist!";
}
} 


document.querySelector("#calculateBtn").addEventListener("click", calculate);



