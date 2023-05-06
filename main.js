const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".primary-nav");
hamburger.addEventListener("click", () => {
  const visibile = navigation.getAttribute("data-visible");
  if (visibile === "false") {
    navigation.setAttribute("data-visible", true);
    hamburger.setAttribute("aria-expanded", true);
  } else if (visibile === "true") {
    navigation.setAttribute("data-visible", false);
    hamburger.setAttribute("aria-expanded", false);
  }
});
