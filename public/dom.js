// **************************** DOM *************************************

document.getElementById('beerInput').addEventListener('keyup', function(e){
    if(e.keyCode == 13){
        console.log('enter');

    } else{
        // console.log(e.keyCode);
        var inputValue = document.getElementById('beerInput').value
        
        console.log(inputValue)
        beerCall(inputValue);
    }
})
// **************************** Main *************************************
var beerCall = function(value) {
    var beerRequest = new XMLHttpRequest();
    var beerUrl = '/search?query='+ value;
        beerRequest.onreadystatechange = function() {
        
        if(this.readyState == 4 && this.status == 200){
            var beers = JSON.parse(beerRequest.responseText);
            console.log(beers);
            console.log('api works');
            // var beersName = beers.name;
            // document.getElementById('beerInput').innerHTML = beerRequest.responseText;
        }
    };
    
    beerRequest.open('GET', beerUrl, true);
    beerRequest.send();
}
