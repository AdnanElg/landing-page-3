// Fonction pour gérer l'affichage/masquage du contenu et la rotation de l'image
function toggleAccordion(accordionId, blockId) {
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
}

// On ajoute les listeners sur chaque bouton d'accordéon
document.getElementById("accordion-1").addEventListener("click", function () {
  toggleAccordion("accordion-1", "block-1");
});

document.getElementById("accordion-2").addEventListener("click", function () {
  toggleAccordion("accordion-2", "block-2");
});

document.getElementById("accordion-3").addEventListener("click", function () {
  toggleAccordion("accordion-3", "block-3");
});

document.getElementById("accordion-4").addEventListener("click", function () {
  toggleAccordion("accordion-4", "block-4");
});
