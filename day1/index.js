var age = prompt("Enter your age");

function lifeInweeks(age){
  
  var yearsremaining = 90 - age;
  var days = yearsremaining * 365;
  var weeks = yearsremaining * 54;
  var months = yearsremaining * 12;
  
  console.log("You have " + days + " days, " + weeks + " weeks, " + months + " months.");
}

lifeInweeks(age)
