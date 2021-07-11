var audio1 = new Audio(
  "sound/579546__josefpres__bass-loops-013-with-drums-short-loop-120-bpm.wav"
);
function playsound() {
  audio1.play();
}
function start() {
  var count = document.querySelector("#count").value;
  var timer = document.querySelector("#timer");

  var countdown = setInterval(function showtime() {
    count--;
    timer.textContent = count;
    if (count <= 0) {
      clearInterval(countdown);
    }
    if (count < 4) {
      document.getElementById("timer").style.color = "red";
      // console.log("red");
    }
    if (count === 0) {
      // var audio = document.getElementById("sound");
      console.log(audio1);
      audio1.play();
    }
  }, 1000);
}
