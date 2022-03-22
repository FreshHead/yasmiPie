document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("nav a");
    buttons.forEach(btn => btn.addEventListener("click", (event) => {
        buttons.forEach(btn => btn.classList.remove("selected"));
        const pressedBtn = event.target;
        pressedBtn.classList.add("selected");
    }));
});