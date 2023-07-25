var number = Math.floor(Math.random() * 5 + 1);

function checkName() {
  if (number == 1) {
    console.log("Blieve in yourself! Everything is possible!");
    number = Math.floor(Math.random() * 5 + 1);
  } else if (number == 2) {
    console.log(
      "When you have a dream, you've got to grab it and never let go!"
    );
    number = Math.floor(Math.random() * 5 + 1);
  } else if (number == 3) {
    console.log("Nothing is impossible. The word itself says 'I'm possible!");
    number = Math.floor(Math.random() * 5 + 1);
  } else if (number == 4) {
    console.log(
      "The bad news is time flies. The good news is you're the pilot"
    );
    number = Math.floor(Math.random() * 5 + 1);
  } else {
    console.log(
      "Keep your face always toward the sunshine, and shadows will fall behind you"
    );
    number = Math.floor(Math.random() * 5 + 1);
  }
  
  document.getElementById("main").style.display = "none";
  document.getElementById("notMain").style.display = "block"; 
}

function back(){
  document.getElementById("main").style.display = "block";
  document.getElementById("notMain").style.display = "none";
}
