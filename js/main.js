const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

function updateThemeButtonLabel() {
    if (body.classList.contains("theme-clean-dark")) {
        themeToggle.textContent = " ☀ ";
    } else if (body.classList.contains("theme-clean-light")) {
        themeToggle.textContent = " ☾ ";
    }
}

function applySavedTheme() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "theme-clean-dark" || savedTheme === "theme-clean-light") {
        body.classList.remove("theme-clean-dark", "theme-clean-light");
        body.classList.add(savedTheme);
    }
}

applySavedTheme();
updateThemeButtonLabel();

themeToggle.addEventListener("click", () => {
    if (body.classList.contains("theme-clean-dark")) {
        body.classList.remove("theme-clean-dark")
        body.classList.add("theme-clean-light")
        localStorage.setItem("theme", "theme-clean-light");
    } 
    else {
        body.classList.remove("theme-clean-light")
        body.classList.add("theme-clean-dark")
        localStorage.setItem("theme", "theme-clean-dark");
    }

    updateThemeButtonLabel();
})