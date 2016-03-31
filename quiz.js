"use strict"
var CarLot = (function(cLot) {
  let carList = [];
  cLot.loadInventory = function() {
    let car = new XMLHttpRequest();
    car.addEventListener("load", function() {
      let inventory = JSON.parse(this.responseText);
      CarLot.storeInv(inventory);
      CarLot.placeInv();
    });
    car.open("GET", "inventory.json");
    car.send();
  };
  cLot.storeInv = function(inv) {
    for(let i in inv.cars) {
      carList[i] = inv.cars[i];
    };
  };
  cLot.getInv = () => carList;
  cLot.placeInv = function () {
    let local = document.getElementById('placement');
    local.innerHTML = ""
    for (let i in carList) {
      local.innerHTML += `<article class="col-xs-4" id="num${i}"><div>${carList[i].year} ${carList[i].make}</div><div>${carList[i].model}</div><p>${carList[i].color}</p><section id="id${i}">${carList[i].description}</section><p>$${carList[i].price}</p><p>Purchased: ${carList[i].purchased}</p></article>`;
    }
    CarLot.resetBorder();
  }
  return cLot;

})(CarLot || {});
CarLot.loadInventory();