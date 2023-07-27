function scrollToSection() {
  // Get the hash from the link's href (e.g., "#targetSection")
  const hash = window.location.hash;

  // If the hash is not empty (i.e., a target section is specified), scroll to that section
  if (hash) {
    // Use smooth scrolling for a nicer effect
    document.querySelector(hash).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

