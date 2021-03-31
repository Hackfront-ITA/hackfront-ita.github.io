(function() {
  var music = new Audio('/res/music/kFAO-RnANTY_edit.mp3');

  music.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
  }, false);

  var playBtn = document.querySelector("#play-btn");

  var toggleMusic = function () {
    if (music.paused) {
      playBtn.textContent = "pause";
      music.play();
    } else {
      playBtn.textContent = "play";
      music.pause();
    }
  };

  playBtn.addEventListener('click', toggleMusic, false);
})();
