const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("accessibleModal");

openModalBtn.addEventListener("click", () => {
  modal.setAttribute("aria-hidden", "false");
  closeModalBtn.focus();
});

closeModalBtn.addEventListener("click", () => {
  modal.setAttribute("aria-hidden", "true");
  openModalBtn.focus();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") {
    closeModalBtn.click();
  }
});

const closeDialogBtn = document.getElementById("closeDialogBtn");
const dialog = document.getElementById("accessibleDialog");

openModalBtn.addEventListener("click", () => {
  dialog.showModal(); // Opens the dialog
});

closeDialogBtn.addEventListener("click", () => {
  dialog.close();
});

const menuButton = document.getElementById("menuButton");
const menuContent = document.getElementById("menuContent");

menuButton.addEventListener("click", () => {
  const expanded = menuButton.getAttribute("aria-expanded") === "true" || false;
  menuButton.setAttribute("aria-expanded", !expanded);
  menuContent.setAttribute("aria-hidden", expanded);
});

document.addEventListener("keydown", (e) => {
  if (
    e.key === "Escape" &&
    menuButton.getAttribute("aria-expanded") === "true"
  ) {
    menuButton.click();
  }
});
