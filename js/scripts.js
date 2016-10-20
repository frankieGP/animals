$(document).ready(function() {
  $("#dropForm form").submit(function(event) {
    var animal = $("#animals").val();

console.log(animal);

  //$("button#Animal").click(function();
  //$(".dropForm select").submit(function();
if ("#turtleOption") {
  $("#turtles").show();
} else if ("#snakeOption") {
  $("#snakes").show();
}  else if ("#insectOption") {
  $("#insects").show();
  }


  event.preventDefault();

  });

});
