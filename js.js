//----------------menu show/hide responsive menubar
var x = document.getElementById("change");
function showmenu()
{
  if (x.className === "menu")
  {
    x.className = "respon";
  } else {
    x.className = "menu";
  }
}
// ------------------ countdown function

var countDownDate = new Date("Apr 14, 2019 00:00:00").getTime();
function count(){
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
}
setInterval(count, 1000);

//--------------- alert function

function alertlink() {
    window.alert("http://www.thaimoviehd.club/2019/01/pey-neang-hang-6ep.html");
}
//--------------- add date
var date = document.getElementsByClassName("dateup");
for (i = 0; i<date.length; i++){
  date[i].innerHTML = "8/1/2019 2:48PM"
}




;
