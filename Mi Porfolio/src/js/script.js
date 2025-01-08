document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const introScreen = document.getElementById("intro-screen");
  const perfil = document.getElementById("perf");
  const audio = document.getElementById("miAudio");
  const startFromSecond = 1; 
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
  
    const fadeInDuration = 1500;
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
    setTimeout(() => {
      introScreen.style.display = "none";
    }, 4000);
    
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

  // Enviar email
  emailForm.addEventListener("submit", async (event) => {
    event.preventDefault(); 
    emailjs.init('eef6YYrdUsISV4_o-');
    loadingSpinner.classList.remove("hidden");

    const formData = {
      from_name: emailForm.elements["name"].value,
      message: emailForm.elements["message"].value,
      email: emailForm.elements["email"].value,
    };

    try {
      // Envío con EmailJS
      
      
      const serviceID = 'service_lnw1yme';
      const templateID = 'template_nwm48gw';
      await emailjs.send(serviceID, templateID, formData, 'eef6YYrdUsISV4_o-');
      console.log("Enviando datos:", formData);

      alert("¡Mensaje enviado con éxito! 😄");
      emailForm.reset();
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      alert("Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo. 😥");
    } finally {
      loadingSpinner.classList.add("hidden");
    }
  });
});  