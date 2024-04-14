const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".navbar", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".sub-form", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".features div", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal("iframe", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".price", {
  ...scrollRevealOption,
  delay: 500,
});
