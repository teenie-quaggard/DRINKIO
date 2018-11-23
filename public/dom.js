// **************************** DOM *************************************

document.getElementById("beerInput").addEventListener("keyup", function(e) {
  if (e.keyCode == 13) {
    console.log("enter");
  } else {
    // console.log(e.keyCode);
    var inputValue = document.getElementById("beerInput").value;

    console.log(inputValue);
    beerCall(inputValue);
  }
});
// **************************** Main *************************************
var beerCall = function(value) {
  var beerRequest = new XMLHttpRequest();
  var beerUrl = "/query=" + value;
  beerRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var x = document.getElementById("beersDatalist");

      while (x.firstChild) {
        x.removeChild(x.firstChild);
      }

      var beers = JSON.parse(beerRequest.responseText);
      console.log(beers.length);
      console.log("api works");
      // var beersName = beers.name;
      // document.getElementById('beerInput').innerHTML = beerRequest.responseText;
      var x = document.getElementById("beersDatalist");
      beers.forEach(e => {
        const newOption = document.createElement("OPTION");
        newOption.setAttribute("value", e.name);
        x.appendChild(newOption);
      });
    }
  };

  beerRequest.open("GET", beerUrl, true);
  beerRequest.send();
};
