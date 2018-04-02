let bitcoin = document.getElementById("bitcoin");
function Update() {
  fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson.bpi.USD.rate);
      bitcoin.innerHTML = myJson.bpi.USD.rate;
    });
}
Update();