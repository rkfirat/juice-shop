document.addEventListener("DOMContentLoaded", () => {
  console.log("CyberTedu loaded");

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Pipeline steps interaction
  const steps = document.querySelectorAll('.pipeline-step');
  const infos = document.querySelectorAll('.pipeline-info');

  steps.forEach(step => {
    step.addEventListener('click', () => {
      const infoId = step.getAttribute('data-info');
      if (!infoId) return;

      // Hide all infos
      infos.forEach(info => info.classList.remove('active'));
      
      // Show target info
      const target = document.getElementById(`info-${infoId}`);
      if (target) target.classList.add('active');
    });
  });
});
