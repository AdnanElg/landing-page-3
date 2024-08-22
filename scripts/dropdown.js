//  ******* START DROPDOWN ********** //

// Fonction réutilisable pour gérer l'affichage d'un dropdown ou d'un panneau
const setupDropdown = (dropdownToggleId, dropdownContentId) => {
  const dropdownToggle = document.getElementById(dropdownToggleId);
  const dropdownContent = document.getElementById(dropdownContentId);

  // Ajoute un événement de clic sur l'élément dropdown
  dropdownToggle.addEventListener("click", (e) => {
    // Empêche le comportement par défaut de l'événement, comme la navigation si dropdownToggle est un lien
    e.preventDefault();
    // Bascule la classe "hidden" pour afficher ou masquer le contenu du dropdown
    dropdownContent.classList.toggle("hidden");
  });

  // Empêche la fermeture du panneau lors d'une interaction avec celui-ci
  dropdownContent.addEventListener("click", (e) => {
    e.stopPropagation();
  });
};

// Initialisation pour le dropdownLocation
setupDropdown("dropdownLocation", "dropdownLocationList");

// Initialisation pour le datepicker
setupDropdown("dropdownDatepicker", "datepicker-inline");

//  ******* END DROPDOWN ********** //
