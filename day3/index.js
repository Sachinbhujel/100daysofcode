function checkName() {
  function whosPaying(names) {
    var numberofPeople = names.length;
    var randompersonPosition = Math.floor(Math.random() * numberofPeople);
    var randomPerson = names[randompersonPosition];

    document.getElementById("personName").innerHTML = randomPerson + " is paying!";
  }

  var firstName = prompt("Enter first person name:");
  var secondName = prompt("Enter second person name:");
  var thirdName = prompt("Enter third person name:");

  var names = [firstName, secondName, thirdName];
  whosPaying(names);
  
  document.getElementById("main").style.display = "none";
  document.getElementById("notMain").style.display = "block"; 
}

function back(){
  document.getElementById("main").style.display = "block";
  document.getElementById("notMain").style.display = "none";
}
