var guestList = ["Angela", "Jack", "Calie", "Binod", " Jessie", "Sachin", "Akshu", "Saajan", "Shoaib"];

var guestName = prompt("What is your name? ");

if (guestList.includes(guestName)) {
  console.log("Great to meet you, I’m Nikko!");
} else {
  console.log("Sorry! Maybe next time.");
}
