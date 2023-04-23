// Create element.
var button = document.getElementById("button");

// Set the initial level, timeout value and counter.
var level = 1;
var timeout = 500;
var counter = 0;

// Button randomize function.
function randomizeButtonPosition() {
  // Generator for my browser's settings.
  var marginTop = Math.random()*300;
  var marginLeft = Math.random()*300;

  // Set new position.
  button.style.marginTop = marginTop + "px";
  button.style.marginLeft = marginLeft + "px";
  //Console Check
  console.log("Randomized from randomizeButtonPosition. Timeout is " + timeout+ " Level is " + level);
}

// randomizeButtonPosition function every timeout.
setInterval(randomizeButtonPosition, timeout);

// Event Listener
button.addEventListener("click", function () {
  // Counter incrementation
  counter++;
  //Console Check
  console.log("Clicked. Counter is " + counter);

  // Check Won Level
  if (counter == 3) {
    // Show Alert if User Won Level
    alert("You won level " + level + "!");

    // Leveling Up
    counter = 0;
    timeout -= 100;
    console.log("Listener - Timeout decreased, timeout is " + timeout + " ms");
    level++;
    if (timeout < 0) {
      timeout = 0;
    }
  }

  // Timing Function
  setTimeout(function () {
    // Check level won?
    if (counter < 3) {
      // Console Check
      console.log("Counter checker from setTimeout. Counter is " + counter);
    } else {
      // Decrease the timeout 100ms level won
      timeout -= 100;
      console.log("SetTimeOut - Timeout decreased " + timeout + " ms");
      if (timeout < 0) {
        timeout = 0;
      }
    }
  }, timeout);
});
