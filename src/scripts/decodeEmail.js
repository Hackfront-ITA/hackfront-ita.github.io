(function() {
  var SUPER_SECRET_STRING = "aGMubGlhbW5vdG9ycEB0bm9yZmtjYWg=";

  var decodeSuperSecret = function (value) {
    return atob(value).split('').reverse().join('');
  }
  var superSecretContent = document.querySelector("#super-secret-content");
  superSecretContent.href =
    decodeSuperSecret("Om90bGlhbQ==") +
    decodeSuperSecret(SUPER_SECRET_STRING);
  superSecretContent.textContent = decodeSuperSecret(SUPER_SECRET_STRING);
})();
