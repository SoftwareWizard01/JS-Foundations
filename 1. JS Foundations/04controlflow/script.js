//if else, else if
//switch case
//early return pattern

/*
(1) Write a function getGrade(score) that:
 • Takes a student's marks (0 to 100)
 • Returns the grade based on this logic
 90-100 A+
 80-89 A
 70-79 B
 60-69 C
 33-59 D
 0-32 Fail
 Anything else      --> Invalid Marks
*/

function getGrade(score) {
  if (score >= 90 && score <= 100) {
    return "A+";
  } else if (score >= 80 && score <= 89) {
    return "A";
  } else if (score >= 70 && score <= 79) {
    return "B";
  } else if (score >= 60 && score <= 69) {
    return "C";
  } else if (score >= 33 && score <= 59) {
    return "D";
  } else if (score >= 0 && score <= 32) {
    return "Fail";
  } else {
    return "Inavlid Marks";
  }
}

console.log(getGrade(68));

//Solving using early return

function getGrade(marks) {
  if (marks >= 90 && marks <= 100) return "A+";
  if (marks >= 80 && marks <= 89) return "A";
  if (marks >= 70 && marks <= 79) return "B";
  if (marks >= 60 && marks <= 69) return "C";
  if (marks >= 33 && marks <= 59) return "D";
  if (marks >= 0 && marks <= 32) return "Fail";
  return "Invalid Marks";
}

console.log(getGrade(23));

//rock-paper-scissors logic

function rps(user, computer) {
  if (user === "rock" && computer === "paper") return "Computer Wins";
  if (user === "paper" && computer === "rock") return "User Wins";
  if (user === "paper" && computer === "scissor") return "Computer Wins";
  if (user === "scissor" && computer === "paper") return "User Wins";
  if (user === "scissor" && computer === "rock") return "Computer Wins";
  if (user === "rock" && computer === "scissor") return "User Wins";
  if (user === computer) return "Match Tie";
  else return "Invalid Input";
}
console.log(rps("scissor", "scissor"));
