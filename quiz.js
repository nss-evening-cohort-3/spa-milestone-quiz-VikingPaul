var CarLot = (function(cLot) {
  var carList = [];
  cLot.loadInventory = function() {
    var car = new XMLHttpRequest();
    car.addEventListener("load", function() {
      var inventory = JSON.parse(this.responseText);
      CarLot.storeInv(inventory);
      CarLot.placeInv();
    });
    car.open("GET", "inventory.json");
    car.send();
  };
  cLot.storeInv = function(inv) {
    for(i in inv.cars) {
      carList[i] = inv.cars[i];
    };
  };
  cLot.getInv = function() {
    return carList;
  };
  cLot.placeInv = function () {
    var local = document.getElementById('placement');
    for (i in carList) {
      local.innerHTML += `<article class="container col-xs-4" id="num${i}"><div>${carList[i].year} ${carList[i].make}</div><div>${carList[i].model}</div><p>${carList[i].color}</p><section id="id${i}">${carList[i].description}</section><p>$${carList[i].price}</p><p>Purchased: ${carList[i].purchased}</p></article>`;
    }
    CarLot.resetBorder();
  }
  return cLot;

})(CarLot || {});
CarLot.loadInventory();