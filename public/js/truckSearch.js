$(document).ready(function() {
  $(".foodTypeBtn").on("click", function() {
    console.log("What was clicked " + this.id);
    var search = this.id;
    console.log("search function for " + search);
    return $.ajax({
      url: "/api/foodTruck/" + search,
      type: "GET"
    }).then(function(foodTruckdata) {
      //console.log("did I get it?");
      var results = JSON.stringify(foodTruckdata);
      console.log(results);

      //with results loop through
      var searchRows = [];
      for (var i = 0; i < foodTruckdata.length; i++) {
        searchRows.push(createFtRow(foodTruckdata[i]));
      }

      console.log(foodTruckdata);
      console.log("inside truck search");
    });
  });

  //Function to print foodtrucks in a row
  function createFtRow(foodTruckData) {
    var newTr = $("<tr>");
    newTr.data("name", foodTruckData);
    newTr.append("<td>" + foodTruckData.name + "</td>");
    newTr.append("<td>" + foodTruckData.foodType + "</td>");
    newTr.append("<td>" + foodTruckData.description + "</td>");
    newTr.append("<td><a href='" + foodTruckData.menuLink + "'>Menu</a></td>");
    newTr.append("<td>" + foodTruckData.price + "</td>");
    newTr.append("<td>" + foodTruckData.phone + "</td>");
    console.log(newTr);
    $(".truckContainer").html(newTr);
    return newTr;
  }

  // refreshfoodTrucks gets new foodTrucks from the db and repopulates the list
  // function getFoodTrucks(foodType) {
  //   return $.ajax({
  //     url: "/api/foodTruck/" + foodType,
  //     type: "GET"
  //   }).then(function(data) {
  //     var $foodTrucks = data.map(function(foodTruck) {
  //       var $a = $("<a>")
  //         .text(foodTruck.text)
  //         .attr("href", "/foodTruck/" + foodTruck.id);
  //       var $li = $("<li>")
  //         .attr({
  //           class: "list-group-item",
  //           "data-id": foodTruck.id
  //         })
  //         .append($a);
  //       var $button = $("<button>")
  //         .addClass("btn btn-danger float-right delete")
  //         .text("ｘ");
  //       $li.append($button);
  //       return $li;
  //     });
  //     $foodTruckList.empty();
  //     $foodTruckList.append($foodTrucks);
  //   });
  // }
});