// ******* START NAVBAR ********** //

const toggleButton = document.getElementById("btn-menu");
const hamburgerIcon = toggleButton.querySelector("img:nth-child(1)");
const closeIcon = toggleButton.querySelector("img:nth-child(2)");
const menuLists = document.getElementById("lists-menu");

toggleButton.addEventListener("click", () => {
  if (hamburgerIcon.style.display === "none") {
    hamburgerIcon.style.display = "block";
    closeIcon.style.display = "none";
    menuLists.style.display = "none";
  } else {
    hamburgerIcon.style.display = "none";
    closeIcon.style.display = "block";
    menuLists.style.display = "flex";
  }
});

// ******* END NAVBAR ********** //
