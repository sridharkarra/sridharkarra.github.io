/**
 * Created by DEY8083 on 3/24/2015.
 */

var thefrog = document.querySelector("#frog");
var theant = document.querySelector("#ant");
var thepond = document.querySelector("#pond");
var themsg = document.querySelector("#messageBox");
var height = window.screen.height;
var width = window.screen.width;
var frogcnt = 0;
var antcnt = 0;

function startgame() {
  alert("yes");
  resetgame();
  thepond.addEventListener("click", getClickPosition, false);
  refreshinterval =setInterval(antmove, Math.random()*10000);
  document.addEventListener('keydown', function(event) {
    if(event.keyCode == 40) {
      alert('Left was pressed');
    }
    else if(event.keyCode == 38) {
      alert('Right was pressed');
    }
  });
}


function antmove(){
    theant.style.left = Math.random()*1500 + "px";
    theant.style.top = Math.random()*700  + "px";
    theant.style.visibility = "visible";
}

function getClickPosition(e) {
    var parentPosition = getPosition(e.currentTarget);
    var xPosition = e.clientX - parentPosition.x - (thefrog.clientWidth / 2);
    var yPosition = e.clientY - parentPosition.y - (thefrog.clientHeight / 2);
    thefrog.style.left = xPosition + "px";
    thefrog.style.top = yPosition + "px";
    didIgetyou();
    winorlose();
}

function getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;

    while (element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
    return { x: xPosition, y: yPosition };
}

function didIgetyou() {

  if (((parseInt(theant.style.left) + 50 >= (parseInt(thefrog.style.left))) && (parseInt(theant.style.left) + 50 <= (parseInt(thefrog.style.left)) + 50)) &&
    ((parseInt(theant.style.top) + 50 >= (parseInt(thefrog.style.top))) && (parseInt(theant.style.top) + 50 <= (parseInt(thefrog.style.top)) + 50))) {
    document.getElementById("yummy").value = ++frogcnt;
  }
  else {
    document.getElementById("hungry").value = ++antcnt;
  }
}

function winorlose(){
    if(frogcnt == 10){
      stopgame();
      document.getElementById("msg").innerHTML = "Frog Wins";
      themsg.style.visibility = "visible";
      document.getElementById("yummy").style.backgroundColor = 'green';
      document.getElementById("hungry").style.backgroundColor = 'red';
    }
    else if (antcnt == 10) {
      stopgame();
      document.getElementById("msg").innerHTML = "Ant Wins";
      themsg.style.visibility = "visible";
      document.getElementById("yummy").style.backgroundColor = 'red';r
      document.getElementById("hungry").style.backgroundColor = 'green';
    }
}

function stopgame(){
  thepond.removeEventListener("click", getClickPosition, false);
  console.log("test");
  clearInterval(refreshinterval);
}


function resetgame(){
  frogcnt = 0;
  antcnt = 0;
  theant.style.visibility = "hidden";
  thefrog.style.visibility = "visible";
  themsg.style.visibility = "hidden";
  thefrog.style.left = 1 + "px";
  thefrog.style.top = 1 + "px";
  document.getElementById("hungry").value = 0;
  document.getElementById("yummy").value = 0;
  document.getElementById("yummy").style.backgroundColor = 'lightblue';
  document.getElementById("hungry").style.backgroundColor = 'lightblue';
}


