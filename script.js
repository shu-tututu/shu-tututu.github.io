
function setLanguage(language) {

    // Find all elements with English and Myanmar text
    const elements = document.querySelectorAll("[data-en][data-mm]");

    // Change the website language
    elements.forEach(function(element) {
        if (language === "mm") {
            element.textContent = element.dataset.mm;
        } else {
            element.textContent = element.dataset.en;
        }
    });

    // Update the browser language setting
    document.documentElement.lang =
        language === "mm" ? "my" : "en";

    // Highlight the selected language button
    document.querySelectorAll(".lang-btn").forEach(function(button) {
        button.classList.remove("active");
    });

    if (language === "mm") {
        document.querySelectorAll(".lang-btn")[1].classList.add("active");
    } else {
        document.querySelectorAll(".lang-btn")[0].classList.add("active");
    }

    // Remember the selected language for this page
    localStorage.setItem("ubt-language", language);
}

// Restore the selected language
const savedLanguage = localStorage.getItem("ubt-language") || "en";
setLanguage(savedLanguage);
