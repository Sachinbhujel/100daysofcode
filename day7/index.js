prompt("What is your name?");
prompt("What is your partner name?")

var lovescore = Math.random() * 100;
lovescore = Math.floor(lovescore) + 1;

if (lovescore > 70){
  alert("Your lovescore is " +  lovescore + "%. " + "You love each other like kanye loves kanye.");
} 
else if (lovescore >= 30 && lovescore < 70){
  alert("Your lovescore is " +  lovescore + "%. " + "You love each other like oil and water.");
} 
else{
  alert("Your lovescore is " + lovescore + "%");
}

