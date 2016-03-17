var CarLot = (function(cLot) {
  var idOfClick = "";
  cLot.activateEvents = function() {
    document.getElementById('placement').addEventListener("click", function(e) {
      document.getElementById('text').focus();
      document.getElementById('text').value = ""
      CarLot.resetBorder();
      if (e.target.parentElement.id.substring(0,3) === "num") {
        idOfClick = e.target.parentElement;
      } else {
        idOfClick = e.target;
      }
      CarLot.changeStyle(idOfClick, "slategrey");
    });
    
    document.getElementById('button').addEventListener("click", function(e) {
      CarLot.placeInv();
      document.getElementById('text').value = ""
    });
    
    document.getElementById('text').addEventListener("keyup", function(e) {
      var idOfWrite = "id" + idOfClick.id.substring(3, idOfClick.length);
      document.getElementById(idOfWrite).innerHTML = document.getElementById('text').value;
    });
  };
  return cLot

})(CarLot || {});
CarLot.activateEvents();