function Pizza(pizzaSize, pizzaDough, pizzaCrust) {
  this.pizzaSize = pizzaSize;
  this.pizzaDough = pizzaDough;
  this.pizzaCrust = pizzaCrust;
  this.pizzaToppings = [];
  this.pizzaCost = 0;
};

Pizza.prototype = {
  cost: function() {
  if(this.pizzaSize === "small") {
    if(this.pizzaToppings.length <= 3) {
      this.pizzaCost += 8;
    } else if(this.pizzaToppings.length <= 5) {
      this.pizzaCost += 12;
    } else if(this.pizzaToppings.length > 5 ) {
      this.pizzaCost += 16;
    }
  } else if(this.pizzaSize === "medium") {
      if(this.pizzaToppings.length <= 3) {
        this.pizzaCost += 12.00;
      } else if(this.pizzaToppings.length <= 5) {
        this.pizzaCost += 16.00;
      } else if(this.pizzaToppings.length >5 ) {
        this.pizzaCost += 20.00;
      }
    } else if(this.pizzaSize === "large") {
        if(this.pizzaToppings.length <= 3) {
          this.pizzaCost += 16.00;
        } else if(this.pizzaToppings.length <= 5) {
          this.pizzaCost += 20.00;
        } else if(this.pizzaToppings.length >5 ) {
          this.pizzaCost += 24.00;
        }
      } else if(this.pizzaSize === "extraLarge") {
          if(this.pizzaToppings.length <= 3) {
            this.pizzaCost += 20.00;
          } else if(this.pizzaToppings.length <= 5) {
            this.pizzaCost += 24.00;
          } else if(this.pizzaToppings.length >5 ) {
            this.pizzaCost += 28.00;
          }
        }
    if(this.pizzaDough === "wheat") {
      this.pizzaCost += 3;
    }
    if(this.pizzaCrust === "extraThick") {
      this.pizzaCost += 3;
    } else if(this.pizzaCrust === "thin") {
      this.pizzaCost += 3;
    }
  }
};

function addToppings(){
var pizzaToppingsArray = [];
  for (var index = 0; index <= 14; index++) {
    if(typeof $("input:checkbox[name=top" + index + "]:checked").val() != "undefined") {
      pizzaToppingsArray.push($("input:checkbox[name=top" + index + "]:checked").val());
    }
  }
  return pizzaToppingsArray;
};

$(function() {
var pizzaOrders = [];
  $("#pizza-input").submit(function(event) {
    event.preventDefault();
    var pizzaSize = $("#pizza-size option:selected").val();
    var pizzaDough = $("#pizza-dough option:selected").val();
    var pizzaCrust = $("#pizza-crust option:selected").val();
    var newPizza = new Pizza(pizzaSize, pizzaDough, pizzaCrust);
    newPizza.pizzaToppings = addToppings();
    newPizza.cost();
    console.log(newPizza);
    pizzaOrders.push(newPizza);
    console.log(pizzaOrders);
    $('#pizza-input input').prop('checked', false);
    })
});
