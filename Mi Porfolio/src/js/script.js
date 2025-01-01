document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const introScreen = document.getElementById("intro-screen");
  const perfil = document.getElementById("perf");
  const introText = document.getElementById("intro-text");
  const audio = document.getElementById("miAudio");
  const startFromSecond = 116.5; 
  const emailTab = document.getElementById('email-tab');
  const emailForm = document.getElementById('email-form');
  const loadingSpinner = document.getElementById("loading-spinner");
  const subtitle = document.getElementById("panel-subtitle");

  
  window.addEventListener('load', () => {
    audio.load();
    document.getElementById("intro-content").classList.remove("hidden");
    
  });
  
  startBtn.addEventListener("click", () => {
    audio.currentTime = startFromSecond;
    audio.volume = 0; 
    audio.play();
  
    const fadeInDuration = 5000;
    const intervalDuration = 33; 
    const volumeIncrement = 1 / (fadeInDuration / intervalDuration); 
  
    const fadeIn = setInterval(() => {
      if (audio.volume < 1) {
        audio.volume = Math.min(audio.volume + volumeIncrement, 1);
      } else {
        clearInterval(fadeIn);
      }
    }, intervalDuration);
  
    setTimeout(() => {
    typeText();
    },20
    ); 
      startBtn.classList.add("hidden"); 
  });
  

  function typeText() {
    introText.innerHTML = "<span class='typing-welcome'>¡Bienvenido!</span>";
  
    setTimeout(() => {
      introText.innerHTML = "<span class='typing-hello'>Hola, soy</span><br><span class='typing-name'>Jorge Rodríguez García</span>";
            setTimeout(() => {
              introText.classList.add("hidden");
            }, 10000);
  
            setTimeout(() => {
              introScreen.style.display = "none";
            }, 12000);
    }, 3600);
  }



  // Animación
  function startAnimation() {
    perfil.classList.add("animate-blinkAndBounce");
    subtitle.classList.add("animate-blinkAndBounce");
    
    setTimeout(() => {
      perfil.classList.remove("animate-blinkAndBounce");
    }, 4000);   

    setTimeout(() => {
      subtitle.classList.remove("animate-blinkAndBounce");
    }, 4000);
    setTimeout(startAnimation, 9999);
  }
  startAnimation();
});  