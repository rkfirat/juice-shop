document.addEventListener("DOMContentLoaded", () => {
  // Intersection Observer for reveal animations
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".reveal, .reveal-delay").forEach((el) => {
    observer.observe(el);
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Add animation to hero content on load
  setTimeout(() => {
    document.querySelector(".hero h1").classList.add("active");
    setTimeout(() => {
      document.querySelector(".hero p").classList.add("active");
    }, 200);
  }, 100);
});
