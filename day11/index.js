var i = 0;
document.getElementById("num").innerHTML = i;

function plus(){
  i++;
  document.getElementById("num").innerHTML = i;
}

function minus(){
  i--;
  document.getElementById("num").innerHTML = i;
}

function erase(){
  i = 0;
  document.getElementById("num").innerHTML = i;
}
