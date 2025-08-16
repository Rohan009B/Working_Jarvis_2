 var siriWave = new SiriWave({
    container: document.getElementById("siri-container"),
    width: 900,
    height: 200,
    style:"ios9",
    amplitude:'1',
    speed:"0.30",
    autostart:true
  });

const message = document.querySelector(".siri-message");

function animateText() {
  // Fade In
  message.classList.add("fadeInUp");
  message.classList.remove("fadeOutUp");

  // Wait 3 seconds, then fade out
  setTimeout(() => {
    message.classList.remove("fadeInUp");
    message.classList.add("fadeOutUp");
  }, 3000);
}

// Start animation every 5 seconds
setInterval(animateText, 5000);

// Run the first time immediately
animateText();

$('#MicBtn').click(function () {

  eel.playAssistentSound();
  $('#Ovel').prop("hidden", true);
  $('#SiriWave').prop("hidden", false);

  eel.takeCommand()()
});
