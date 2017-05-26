var number = 30;

var intervalId;

//setTimeout(timeUp, 1000 * 30);
$("#start-button").on("click", run);

function run() {
intervalId = setInterval(decrement, 1000);
}

function decrement() {
number--;

$("#show-number").html("<h2>" + number + "</h2>");

//  Once number hits zero...
if (number === 0) {

  //  ...run the stop function.
   stop();
   //  Alert the user that time is up.
   //alert("Time Up!");
   $("#stats").html("<h2>" + "STATS: " + "</h2>");
}
}

function stop() {
//setTimeout(timeUp, 1000 * 30);
clearInterval(intervalId);
}
//  Execute the run function.
run();
