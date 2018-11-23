// **************************** DOM *************************************

document.getElementById("beerInput").addEventListener("keyup", function(e) {
  if (e.keyCode == 13) {
    const inputValue = document.getElementById("beerInput").value;
    const encode = encodeURIComponent(inputValue);
    return window.open(`https://www.google.co.uk/search?q=${encode}`);
  } else {
    let inputValue = document.getElementById("beerInput").value;

    beerCall(inputValue);
  }
});

const search = () => {
  document
    .getElementById("beerSubmit")
    .addEventListener("click", function(input) {
      const inputValue = document.getElementById("beerInput").value;
      const encode = encodeURIComponent(inputValue);
      return window.open(`https://www.google.co.uk/search?q=${encode}`);
    });
};
// **************************** Main *************************************
var beerCall = function(value) {
  var beerRequest = new XMLHttpRequest();
  var beerUrl = "/query=" + value;
  beerRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var datalistEntries = document.getElementById("beersDatalist");

      while (datalistEntries.firstChild) {
        datalistEntries.removeChild(datalistEntries.firstChild);
      }
      var beers = JSON.parse(beerRequest.responseText);

      var x = document.getElementById("beersDatalist");
      beers.forEach(e => {
        const newOption = document.createElement("OPTION");
        newOption.setAttribute("value", e.name);
        x.appendChild(newOption);
      });
      if (!x.firstChild) {
        document.getElementById("beerInput").style.backgroundColor = "#bd1313";
        document.getElementById("beerInput").style.color = "white";
      } else {
        document.getElementById("beerInput").style.backgroundColor = "white";
        document.getElementById("beerInput").style.color = "black";
      }
    }
  };

  beerRequest.open("GET", beerUrl, true);
  beerRequest.send();
};
