function checkName() {
  var bill = prompt("Enter your bill");
  var tipPercent = (bill * 10) / 100;
  var peoples = prompt("How many many peoples");
  var numberofPeoples = "₹" + Math.floor(tipPercent / peoples);

    document.getElementById("personName").innerHTML = numberofPeoples + " Each!";
  
  
  document.getElementById("main").style.display = "none";
  document.getElementById("notMain").style.display = "block"; 
}


function back(){
  document.getElementById("main").style.display = "block";
  document.getElementById("notMain").style.display = "none";
}
