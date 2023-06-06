var isBackgroundVisible = true;
var videoURL = "https://www.youtube.com/watch?v=JNEnzNHTkd8&list=RDJNEnzNHTkd8&start_radio=1"; // Sostituisci con l'URL del tuo video

window.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.altKey && event.shiftKey) {
    toggleBackgroundVideo();
  }
});

function toggleBackgroundVideo() {
  if (isBackgroundVisible) {
    removeBackground();
    playVideo();
  } else {
    removeVideo();
    showBackground();
  }
}

function removeBackground() {
  document.body.style.backgroundImage = "none";
}

function removeVideo() {
  var videoElement = document.querySelector("video");
  if (videoElement) {
    videoElement.parentNode.removeChild(videoElement);
  }
}

function showBackground() {
  document.body.style.backgroundImage = 'url("affariTuoi_delfino.jpg")'; // Aggiungi il percorso dell'immagine dello sfondo
}

function playVideo() {
  var videoElement = document.createElement("video");
  videoElement.src = videoURL;
  videoElement.autoplay = true;
  videoElement.controls = true;

  document.body.appendChild(videoElement);
}
