(function() {
  var music = new Audio('/res/music/VzE2bMB7_-A_edit.mp3');

  music.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
  }, false);

  var playBtn = document.querySelector("#play-btn");

  var toggleMusic = function () {
    if (music.paused) {
      playBtn.textContent = "PAUSE";
      music.play();
    } else {
      playBtn.textContent = "PLAY";
      music.pause();
    }
  };

  playBtn.addEventListener('click', toggleMusic, false);
})();
