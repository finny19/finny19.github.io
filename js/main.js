// Theme Toggle

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

// Advanced Filter (Portfolio)

const advancedFilterToggle = document.getElementById("advanced-filter-toggle");
const advancedFilterMenu = document.getElementById("advanced-filter-menu");

if (advancedFilterToggle && advancedFilterMenu) {

    function updateAdvancedFilterLabel() {
        const isHidden = advancedFilterMenu.hasAttribute("hidden");

        if (isHidden) {
            advancedFilterToggle.textContent = "Show Advanced Search";
        } else {
            advancedFilterToggle.textContent = "Hide Advanced Search";
        }
    }

    updateAdvancedFilterLabel();

    advancedFilterToggle.addEventListener("click", () => {
        const isHidden = advancedFilterMenu.hasAttribute("hidden");

        if (isHidden) {
            advancedFilterMenu.removeAttribute("hidden");
        } else {
            advancedFilterMenu.setAttribute("hidden", "");
        }

        updateAdvancedFilterLabel();
    });
}