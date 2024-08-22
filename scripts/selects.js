// Fonction réutilisable pour gérer l'affichage d'un dropdown ou d'un panneau
function setupDropdown(dropdownToggleId, dropdownContentId) {
  const dropdownToggle = document.getElementById(dropdownToggleId);
  const dropdownContent = document.getElementById(dropdownContentId);

  // Ajoute un événement de clic sur l'élément dropdown
  dropdownToggle.addEventListener("click", function (event) {
    // Vérifie si le panneau est actuellement masqué
    if (dropdownContent.style.display === "block") {
      // Si il est visible, on le masque
      dropdownContent.style.display = "none";
    } else {
      // Sinon, on l'affiche
      dropdownContent.style.display = "block";
    }

    // Empêche la propagation de l'événement de clic pour éviter la fermeture immédiate
    event.stopPropagation();
  });

  // Empêche la fermeture du panneau lors d'une interaction avec celui-ci
  dropdownContent.addEventListener("click", function (event) {
    event.stopPropagation(); // Empêche l'événement de se propager
  });

  // Empêche la fermeture si un clic est détecté en dehors du panneau
  document.addEventListener("click", function () {
    // Ne rien faire, pour que le panneau ne se ferme pas lorsqu'on clique en dehors
  });
}

// Initialisation pour le dropdownLocation
setupDropdown("dropdownLocation", "dropdownLocationList");

// Initialisation pour le datepicker
setupDropdown("dropdownDatepicker", "datepicker-inline");
