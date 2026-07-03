(function () {
  const params = new URLSearchParams(window.location.search);
  if (params.get("embed") !== "1") return;

  document.documentElement.classList.add("listening-embedded");
  document.body.classList.add("listening-embedded");

  document.addEventListener("click", (event) => {
    const link = event.target.closest?.("a[href]");
    if (!link) return;

    const href = link.getAttribute("href") || "";
    if (!href.startsWith("/listening-app/")) return;

    const nextUrl = new URL(href, window.location.origin);
    nextUrl.searchParams.set("embed", "1");
    link.setAttribute("href", `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`);
  }, true);
})();
