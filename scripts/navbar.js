const toggleButton = document.getElementById("btn-menu");
const hamburgerIcon = toggleButton.querySelector("img:nth-child(1)");
const closeIcon = toggleButton.querySelector("img:nth-child(2)");
const menuLists = document.getElementById("lists-menu");

function toggleMenuVisibility(isVisible) {
  hamburgerIcon.style.display = isVisible ? "none" : "block";
  closeIcon.style.display = isVisible ? "block" : "none";
  menuLists.style.display = isVisible ? "flex" : "none";
}

function updateMenuVisibility() {
  const isDesktop = window.innerWidth >= 1024;
  if (isDesktop) {
    hamburgerIcon.style.display = "none";
    closeIcon.style.display = "none";
    menuLists.style.display = "flex";
  } else {
    const isMenuVisible = closeIcon.style.display === "block";
    toggleMenuVisibility(isMenuVisible);
  }
}

toggleButton.addEventListener("click", () => {
  const isMenuVisible = hamburgerIcon.style.display === "none";
  toggleMenuVisibility(!isMenuVisible);
});

window.addEventListener("load", updateMenuVisibility);
window.addEventListener("resize", updateMenuVisibility);
