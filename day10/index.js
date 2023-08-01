function change() {
  document.getElementById("circle").style.background = "red";
  document.getElementById("text").style.color = "red";
}

function change2() {
  document.getElementById("circle").style.background = "silver";
  document.getElementById("text").style.color = "silver";
}

function change3() {
  document.getElementById("circle").style.background = "coral";
  document.getElementById("text").style.color = "coral";
}

function change4() {
  document.getElementById("circle").style.background = "burlywood";
  document.getElementById("text").style.color = "burlywood";
}

function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var time = h + ":" + m + ":" + s;
  document.querySelector(".clock").textContent = time;
  setTimeout(showTime);
}

function hideTime() {
  clockDiv = window.getComputedStyle(document.querySelector(".clock")).display;

  if (clockDiv == "flex") {
    document.getElementById("clock").style.display = "none";
  } else if (clockDiv == "none") {
    document.getElementById("clock").style.display = "flex";
  }
}
