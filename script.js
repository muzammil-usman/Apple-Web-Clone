let obtainedMarks = Number(prompt("Enter your Number"));
function percentage(a, b) {
  let per = (a / b) * 100;
  return per;
}

var StudentPercentage = percentage(obtainedMarks, 550);

function studentGrades() {
  if (StudentPercentage >= 80 && StudentPercentage <= 100) {
    document.write("Congrats! For Grade A");
  } else if (StudentPercentage >= 60 && StudentPercentage < 80) {
    document.write("Congrats! For Grade B");
  } else if (StudentPercentage >= 40 && StudentPercentage < 60) {
    document.write("Congrats! For Grade C");
  } else {
    document.write("You are failed ! Keep it up");
  }
}
document.write(
  "You're Percentage is : ".concat(percentage(obtainedMarks, 550) + "<br>")
);
studentGrades();
