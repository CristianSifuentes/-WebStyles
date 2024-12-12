document.addEventListener('DOMContentLoaded', () => {
  const asymmetricPosts = document.querySelectorAll('.asymmetric');

  // Apply animations to asymmetric posts on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transform = 'translateX(0)';
        entry.target.style.transition = 'transform 0.5s ease-in-out';
      }
    });
  });

  asymmetricPosts.forEach(post => observer.observe(post));
});
