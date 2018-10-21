var yourScore = document.getElementById('yourScore');
//var yourScore = getElementById(red, blue, yellow, green.onclick(math.sum));
yourScore.innerHTML = 0; //
var targetScore = document.getElementById('targetScore');
targetScore.innerHTML = getRandomValue(25, 45);

function addToScore(val) {
  var numberToAdd = parseInt(val);
  var currentScore = parseInt(yourScore.innerHTML);
  yourScore.innerHTML = numberToAdd + currentScore;
}

var red = document.getElementById("red");
//red.setAttribute("value", "5");
console.log(red.value);

var blue = document.getElementById("blue");
//console.log(blue.value);

var yellow = document.getElementById("yellow");
//console.log(yellow.value);

var green = document.getElementById("green");
//console.log(green.value);

// adding an event listener to red crystal
red.addEventListener('click', function() {
  //this refers to the red crystal
  addToScore(this.value);
  checkPlayerScore();
});

// adding an event listener to blue crystal
blue.addEventListener('click', function() {
  // this refers to the blue crystal
  addToScore(this.value);
  checkPlayerScore();
});

// adding an event listener to yellow crystal
yellow.addEventListener('click', function() {
  // this refers to the yellow crystal
  addToScore(this.value);
  checkPlayerScore();
});

// adding an event listener to green crystal
green.addEventListener('click', function() {
  // this refers to the green crystal
  addToScore(this.value);
  checkPlayerScore();
});
//var sum = parseInt(red.value) + parseInt(blue.value) + parseInt(yelow.value) + parseInt(green.value);

// console.log (sum);
function getRandomValue (a, b){
  return Math.floor((Math.random() * a) + b);
}

function checkPlayerScore() {
  //yourScore, targetScore (parseFloat() is for decimals)
  var playerInt = parseInt(yourScore.innerHTML);
  var targetInt = parseInt(targetScore.innerHTML);
  if (playerInt === targetInt) {
      alert('You win!');
  } else if (playerInt > targetInt) {
    alert('You lose!');
  } 
}
console.log(getRandomValue(25, 45));