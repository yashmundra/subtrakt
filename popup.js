document.addEventListener('DOMContentLoaded', function (evt) {

var tbinput;
var tbinput2;

tbinput = document.getElementById("tbinput");
tbinput2 = document.getElementById("tbinput2");
document.getElementById("btadd").addEventListener('click', addDate);
document.getElementById("btadd2").addEventListener('click', addPrice);

var spotifyDate;
if (localStorage["spotifydat"] == "null") {
  spotifyDate = "Not Applicable";
} else {
  spotifyDate = localStorage["spotifydat"]
}

document.getElementById('spotifydat').innerHTML = spotifyDate;
document.getElementById('spotifyprc').innerHTML = localStorage["spotifyprc"];

document.getElementById('netflixdat').innerHTML = localStorage["netflixdat"];
document.getElementById('netflixprc').innerHTML = localStorage["netflixprc"];

});

function addDate() {
  localStorage["spotifydat"] = tbinput.value;
  tbinput.value = '';
};

function addPrice() {
  localStorage["spotifyprc"] = tbinput2.value;
  tbinput2.value = '';
};
