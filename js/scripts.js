
function Pizza(pizzaSize, pizzaDough, pizzaCrust, pizzaToppings)
{
  this.pizzaSize = pizzaSize;
  this.pizzaDough = pizzaDough;
  this.pizzaCrust = pizzaCrust;
  this.pizzaToppings = pizzaToppings
}

function addToppings(pizzaToppingsArray){
  for (var index = 0; index <= 14; index++) {
    if(typeof $("input:checkbox[name=top" + index + "]:checked").val() != "undefined") {
      pizzaToppingsArray.push($("input:checkbox[name=top" + index + "]:checked").val());
    }
  }
  return pizzaToppingsArray;
}

$(function() {
var pizzaToppingsArray = [];
  $("#pizza-input").submit(function(event) {
    event.preventDefault();
    var pizzaSize = $("#pizza-size option:selected").val();
    var pizzaDough = $("#pizza-dough option:selected").val();
    var pizzaCrust = $("#pizza-crust option:selected").val();
    pizzaToppingsArray = addToppings(pizzaToppingsArray);
    })
});
