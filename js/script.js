document.addEventListener("DOMContentLoaded", () => {
  const body = document.getElementById("theme-body");
  const dayContent = document.getElementById("day-content");
  const nightContent = document.getElementById("night-content");
  const themeOverlay = document.getElementById("theme-overlay");
  const themeButtons = document.querySelectorAll(".toggle-theme");

  function toggleTheme() {
      const isLight = body.classList.contains("light");

      body.classList.add("transitioning");

      themeOverlay.style.opacity = "1";
      themeOverlay.style.transform = "scale(1)";

      setTimeout(() => {
          body.classList.toggle("light", !isLight);  
          body.classList.toggle("dark", isLight);
          dayContent.style.display = isLight ? "none" : "block";
          nightContent.style.display = isLight ? "block" : "none"; 
      }, 300); 
      setTimeout(() => {
          themeOverlay.style.opacity = "0";
          themeOverlay.style.transform = "scale(1.2)";
          body.classList.remove("transitioning");
      }, 800); 
  }

  function setThemeByTime() {
      const hour = new Date().getHours();
      const isDayTime = hour >= 5 && hour <= 18;  

      body.classList.toggle("light", isDayTime);
      body.classList.toggle("dark", !isDayTime);
      dayContent.style.display = isDayTime ? "block" : "none";
      nightContent.style.display = isDayTime ? "none" : "block";
  }

  setThemeByTime();

  themeButtons.forEach(button => button.addEventListener("click", toggleTheme));
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {

      const targetId = this.getAttribute("href").substring(1);  
      const targetElement = document.getElementById(targetId);  

      if (targetElement) {
          window.scrollTo({
              top: targetElement.offsetTop,
              behavior: "smooth"
          });
      }
  });
});

 // Crear el mapa y centrarlo en la ubicación deseada (ej. Buenos Aires)
 let map = L.map('map').setView([18.473226074682355, -69.88629655831022], 13);

 // Agregar capa de OpenStreetMap
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
 }).addTo(map);

 // Agregar un marcador en la ubicación
 L.marker([18.473226074682355, -69.88629655831022]).addTo(map)
     .bindPopup('Zona Colonial')
     .openPopup();