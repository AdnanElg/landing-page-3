//  ******* START ACCORDION ********** //

// Fonction pour gérer l'affichage/masquage du contenu et la rotation de l'image
const toggleAccordion = (accordionId, blockId) => {
  const block = document.getElementById(blockId);
  const accordion = document.getElementById(accordionId);
  const img = accordion.querySelector("img");

  // On vérifie si le bloc est actuellement affiché
  if (block.style.display === "block") {
    block.style.display = "none";
    img.style.transform = "rotate(0deg)";
    img.style.transition = "transform 0.5s ease";
  } else {
    block.style.display = "block";
    img.style.transform = "rotate(-90deg)";
    img.style.transition = "transform 0.5s ease";
  }
};

// On ajoute les listeners sur chaque bouton d'accordéon
for (let i = 1; i <= 4; i++) {
  document.getElementById(`accordion-${i}`).addEventListener("click", () => {
    toggleAccordion(`accordion-${i}`, `block-${i}`);
  });
}

//  ******* END ACCORDION ********** //
