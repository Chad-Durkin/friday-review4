function Pizza(pizzaSize, pizzaDough, pizzaCrust) {
  this.pizzaSize = pizzaSize;
  this.pizzaDough = pizzaDough;
  this.pizzaCrust = pizzaCrust;
  this.pizzaToppings = [];
  this.pizzaCost = 0;
};


Pizza.prototype = {
  cost: function() {
    if(this.pizzaSize === "Small") {
      if(this.pizzaToppings.length <= 3) {
        this.pizzaCost += 8;
      } else if(this.pizzaToppings.length <= 5) {
        this.pizzaCost += 12;
      } else if(this.pizzaToppings.length > 5 ) {
        this.pizzaCost += 16;
      }
    } else if(this.pizzaSize === "Medium") {
      if(this.pizzaToppings.length <= 3) {
        this.pizzaCost += 12.00;
      } else if(this.pizzaToppings.length <= 5) {
        this.pizzaCost += 16.00;
      } else if(this.pizzaToppings.length >5 ) {
        this.pizzaCost += 20.00;
      }
    } else if(this.pizzaSize === "Large") {
      if(this.pizzaToppings.length <= 3) {
        this.pizzaCost += 16.00;
      } else if(this.pizzaToppings.length <= 5) {
        this.pizzaCost += 20.00;
      } else if(this.pizzaToppings.length >5 ) {
        this.pizzaCost += 24.00;
      }
    } else if(this.pizzaSize === "ExtraLarge") {
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

function addToppings() {
  var pizzaToppingsArray = [];
  for (var index = 0; index <= 14; index++) {
    if(typeof $("input:checkbox[name=top" + index + "]:checked").val() != "undefined") {
      pizzaToppingsArray.push($("input:checkbox[name=top" + index + "]:checked").val());
    }
  }
  return pizzaToppingsArray;
};

function outputInfo(deliveryInfo) {
  if(deliveryInfo[0] != "") {
    for (var index = 0; index < deliveryInfo.length; index++) {
      $("#list-info").append("<li>" + deliveryInfo[index] + "</li>");
    }
  } else  {
      $("#list-info").append("<li>You didn't enter any delivery info, so come to the store and we'll have your pizza ready!</li>")
    }
}

function listPizza(pizzaOrders) {
  for (var index = 0; index < pizzaOrders.length; index++) {
    $("#pizza-list").append("<li>" + pizzaOrders[index].pizzaSize + ", " + pizzaOrders[index].pizzaDough + ", " + pizzaOrders[index].pizzaCrust + ", " + pizzaOrders[index].pizzaToppings.length + " toppings pizza. Price: " + pizzaOrders[index].pizzaCost + "$</li>");
  }
}

function pizzaCountShow(pizzaCounter) {
  $("#pizza-count-output").text(pizzaCounter);
}

$(function() {
  var pizzaOrders = [];
  var deliveryOption;
  var deliveryInfo = [];
  var pizzaCounter = 0;

  $("#pizza-input").submit(function(event) {
    event.preventDefault();
    pizzaCounter++;
    pizzaCountShow(pizzaCounter);
    var pizzaSize = $("#pizza-size option:selected").val();
    var pizzaDough = $("#pizza-dough option:selected").val();
    var pizzaCrust = $("#pizza-crust option:selected").val();
    var newPizza = new Pizza(pizzaSize, pizzaDough, pizzaCrust);
    newPizza.pizzaToppings = addToppings();
    newPizza.cost();
    pizzaOrders.push(newPizza);
    $('#pizza-input input').prop('checked', false);

    $("#complete-order").click(function(event) {
      event.preventDefault();
      $(".pizzaOrder").hide();
      $(".deliveryOrTakeout").show();
    })
  })
  $("#delivery-btn").click(function(event) {
    event.preventDefault();
    $(".deliveryOrTakeout").hide();
    $(".deliveryMenu").show();
    deliveryOption = "Delivery";
    listPizza(pizzaOrders);
  })
  $("#take-out-btn").click(function(event) {
    event.preventDefault();
    $(".deliveryOrTakeout").hide();
    $(".finalPage").show();
    $(".pizzasList").show();
    deliveryOption = "In-store Pick Up";
    listPizza(pizzaOrders);
  })
  $("#finalize-delivery-btn").click(function(event) {
    event.preventDefault();
    var firstName = $("input#first-name").val();
    var lastName = $("input#last-name").val();
    var address = $("input#address").val();
    var city = $("input#city").val();
    var state = $("input#state").val();
    var zipcode = $("input#zipcode").val();
    deliveryInfo = [firstName, lastName, address, city + ", " + state + " " + zipcode];
    outputInfo(deliveryInfo);
    $(".deliveryMenu").hide();
    $(".finalPage").show();
    $(".pizzasList").show();
    $(".deliveryFinal").show();
  })
});
