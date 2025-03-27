
document.addEventListener("DOMContentLoaded", () => {
    const body = document.getElementById("theme-body");
    const dayContent = document.getElementById("day-content");
    const nightContent = document.getElementById("night-content");
    const themeOverlay = document.getElementById("theme-overlay");
    const themeButtons = document.querySelectorAll(".toggle-theme");

    if (!dayContent || !nightContent) {
        console.error("Error: day-content o night-content no encontrados en el DOM.");
        return;
    }

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
