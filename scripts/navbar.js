// ****** START NAVBAR ****** //

// Récupère l'élément du bouton de bascule du menu à partir de son ID
const toggleButton = document.getElementById("btn-menu");

// Sélectionne les icônes d'hamburger et de fermeture à l'intérieur du bouton
const hamburgerIcon = toggleButton.querySelector("img:nth-child(1)");
const closeIcon = toggleButton.querySelector("img:nth-child(2)");

// Récupère l'élément des listes du menu à partir de son ID
const menuLists = document.getElementById("lists-menu");

// Fonction qui bascule la visibilité du menu
const toggleMenuVisibility = (isVisible) => {
  // Si le menu est visible, on cache l'icône hamburger et on affiche l'icône de fermeture, sinon l'inverse
  hamburgerIcon.style.display = isVisible ? "none" : "block";
  closeIcon.style.display = isVisible ? "block" : "none";
  // Le menu est affiché en "flex" si visible, sinon il est caché
  menuLists.style.display = isVisible ? "flex" : "none";
};

// Fonction qui met à jour la visibilité du menu en fonction de la taille de la fenêtre
const updateMenuVisibility = () => {
  // Vérifie si la largeur de la fenêtre est au moins 1024px
  const isDesktop = window.innerWidth >= 1024;
  if (isDesktop) {
    // Si on est sur un écran desktop, on cache les icônes et on affiche directement le menu
    hamburgerIcon.style.display = "none";
    closeIcon.style.display = "none";
    menuLists.style.display = "flex";
  } else {
    // Sinon, on détermine si le menu est visible en vérifiant l'affichage de l'icône de fermeture
    const isMenuVisible = closeIcon.style.display === "block";
    // On ajuste la visibilité du menu en fonction de son état actuel
    toggleMenuVisibility(isMenuVisible);
  }
};

// Ajoute un écouteur d'événement sur le bouton de bascule du menu
toggleButton.addEventListener("click", () => {
  // Vérifie si le menu est visible en vérifiant si l'icône hamburger est cachée
  const isMenuVisible = hamburgerIcon.style.display === "none";
  // Bascule la visibilité du menu (affiche si caché, cache si affiché)
  toggleMenuVisibility(!isMenuVisible);
});

// Met à jour la visibilité du menu quand la page se charge
window.addEventListener("load", updateMenuVisibility);

// Met à jour la visibilité du menu quand la taille de la fenêtre change
window.addEventListener("resize", updateMenuVisibility);

// ****** END NAVBAR ****** //
