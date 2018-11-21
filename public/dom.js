document.getElementById('beerInput').addEventListener('keypress', function(e){
    if(e.keyCode == 13){
        console.log('enter');
    } else{
        console.log(e.keyCode);
    }
})
