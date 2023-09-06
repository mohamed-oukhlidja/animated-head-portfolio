// define DOM elements
const toggleButton = document.querySelector("#taggle-button");
const root = document.querySelector(":root");
const storgeKey = "color-mode";
const defaultMode = "dark-mode";

// load users preffered mode ftom the local storge
function loadColorMode() {
    const colorMode = localStorage.getItem(storgeKey);
    root.classList.add(colorMode || defaultMode);
    updateToggleButton()
}

// toggle the color mode
toggleButton.addEventListener("click", () => {
  saveColorMode();
});

// saving the user the prefered mode to local storge
function saveColorMode() {
  const currentMode = root.classList.contains("dark-mode")
    ? "light-mode"
    : "dark-mode";
  root.classList.remove("light-mode", "dark-mode");
  root.classList.add(currentMode);
  localStorage.setItem(storgeKey, currentMode);
  updateToggleButton();
}

function updateToggleButton() {
  if (root.classList.contains("dark-mode")) {
    toggleButton.style.backgroundImage = "var(--moon)";
  } else {
    toggleButton.style.backgroundImage = "var(--sun)";

  }
}
