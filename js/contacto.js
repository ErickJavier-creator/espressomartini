document.addEventListener("DOMContentLoaded", () => {
    const body = document.getElementById("theme-body");
    const dayContent = document.getElementById("day-content");
    const nightContent = document.getElementById("night-content");
    const themeOverlay = document.getElementById("theme-overlay");
    const themeButtons = document.querySelectorAll(".toggle-theme");
  
    // Función para cambiar el tema (modo claro u oscuro)
    function toggleTheme() {
        const isLight = body.classList.contains("light");
  
        // Activar la animación
        body.classList.add("transitioning");
  
        // Aplicar el overlay para la transición de fondo
        themeOverlay.style.opacity = "1";
        themeOverlay.style.transform = "scale(1)";
  
        setTimeout(() => {
            body.classList.toggle("light", !isLight);  
            body.classList.toggle("dark", isLight);
            dayContent.style.display = isLight ? "none" : "block";  
            nightContent.style.display = isLight ? "block" : "none"; // Muestra el contenido de la noche si es claro
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
  
    // Establecer el tema de acuerdo con la hora cuando se carga la página
    setThemeByTime();
  
    // Añadir los event listeners para el cambio de tema cuando se haga click
    themeButtons.forEach(button => button.addEventListener("click", toggleTheme));
  });
  
  // Para navegación suave en anclas
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault(); // Evita el comportamiento por defecto de los enlaces
  
        const targetId = this.getAttribute("href").substring(1);  // Obtener el ID del destino
        const targetElement = document.getElementById(targetId);  // Obtener el elemento destino
  
        if (targetElement) {
            // Desplazarse suavemente al elemento destino
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        }
    });
  });

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const status = document.getElementById('status');
    
    if (!name || !email || !message) {
        status.textContent = "Por favor, completa todos los campos.";
        status.style.color = "red";
        return;
    }
    
    status.textContent = "Mensaje enviado con éxito.";
    status.style.color = "green";
    
    document.getElementById('contact-form').reset();
});