function calculateBmi() {
  var weight = document.getElementById("weight").value
  var height = document.getElementById("height").value
  
  var bmi = (weight / (height * height)).toFixed(2);
  

  document.getElementById('bmi').style.display = "block";
  document.getElementById('bmi-heading').innerHTML = "Your Bmi is :"
  document.getElementById('bmi-output').innerHTML = bmi;
}

function clearBmi(){
  document.getElementById('bmi').style.display = "none";
  document.getElementById('weight').value = "";
  document.getElementById('height').value = "";
}

