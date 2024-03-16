document.addEventListener("DOMContentLoaded", function () {
  const headerHeight = document.getElementById("fixed-header").offsetHeight;
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("a[data-section]");

  function updateActiveSection() {
    sections.forEach((section) => {
      const top = section.offsetTop - headerHeight;
      const bottom = top + section.offsetHeight;

      if (window.scrollY >= top && window.scrollY < bottom) {
        // Set the corresponding navigation link as active
        const sectionId = section.getAttribute("id");
        navLinks.forEach((link) => {
          const linkSection = link.getAttribute("data-section");
          link.classList.toggle("active", linkSection === sectionId);
        });
      }
    });
  }
  navLinks.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
  window.addEventListener("scroll", updateActiveSection);
  updateActiveSection();
});
