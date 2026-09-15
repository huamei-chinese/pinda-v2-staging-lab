(() => {
  const popup = document.getElementById("recruitmentPopup");
  const closeButton = document.getElementById("recruitmentPopupClose");
  const applicationLink = document.getElementById("recruitmentPopupLink");
  if (!popup || !closeButton || !applicationLink) return;

  const page = document.documentElement;
  const previousOverflow = page.style.overflow;

  closeButton.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    popup.close();
  });

  // The image is a link; clicking its surrounding backdrop follows the same URL.
  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      window.location.assign(applicationLink.href);
    }
  });

  popup.addEventListener("close", () => {
    page.style.overflow = previousOverflow;
  });

  popup.showModal();
  page.style.overflow = "hidden";
})();
