var colors = ["red", "black", "coral", "lightgreen", "#ffffff", "#633737", "blue", "yellow", "pink", "#b57d1b", "silver", "grey", "purple", "lime", "olive", "azure", "aqua", "blanchedalmond", "dodgerblue", "chocolate", "darkorchid", "fuchsia"]
var btn = document.getElementById('btn');
var color = document.querySelector(".color");

btn.addEventListener("click", function(){
  var randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.background = colors[randomNumber];
  color.textContent = colors[randomNumber]; 
});

function getRandomNumber(){
  return Math.floor(Math.random() * colors.length);
}
