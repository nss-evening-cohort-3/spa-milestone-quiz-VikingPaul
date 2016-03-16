var CarLot = (function(cLot) {
  cLot.resetBorder = function() {
    var cars = CarLot.getInv();
    for (i in cars) {
      document.getElementById('num' + i).style.border = `10px solid ${cars[i].color.toLowerCase()}`;
      document.getElementById('num' + i).style.backgroundColor = "steelblue";
    };
  };
  cLot.changeStyle = function(domElement, color) {
    var num = domElement.id.substring(3, domElement.length);
    var cars = CarLot.getInv();
    domElement.style.border = `20px solid ${cars[num].color}`;
    domElement.style.backgroundColor = color;
  };

  return cLot;

})(CarLot || {});