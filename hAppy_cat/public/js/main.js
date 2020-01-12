console.log("Si miras esto eres un nerd mooooi fuerte");

function change_time() {
  document.getElementById("myImg").src = "http://placekitten.com/g/3" + getRndInteger(10, 99).toString() + "/3" + getRndInteger(10, 99).toString();
}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
var intervalID = setInterval(change_time, 30000);

function change_button() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var input = this.responseText;
      var clean_input = input.substr(1);   
      var newStr = clean_input.substring(0, clean_input.length-1);
      var myArr = JSON.parse(newStr);
      document.getElementById("myImg").src = myArr.url;
    }
  };
  xmlhttp.open("GET", "https://api.thecatapi.com/v1/images/search?", true);
  xmlhttp.send();
}