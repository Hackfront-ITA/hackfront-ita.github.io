(function() {
  var video = document.querySelector('#bg-video');

  var playVideo = function () { video.play(); };
  playVideo();

  document.addEventListener('click',       playVideo, false);
  document.addEventListener('contextmenu', playVideo, false);
})();
