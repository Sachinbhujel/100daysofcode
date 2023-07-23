function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var time = h + ":" + m + ":" + s;
  document.querySelector(".clock").textContent = time;
  setTimeout(showTime);
}
showTime();
