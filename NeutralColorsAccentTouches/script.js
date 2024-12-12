
// Example of an interactive feature
document.addEventListener('DOMContentLoaded', () => {
    const posts = document.querySelectorAll('.post');
  
    // Add hover effect with animation
    posts.forEach(post => {
      post.addEventListener('mouseover', () => {
        post.style.transform = 'scale(1.05)';
        post.style.transition = 'transform 0.3s ease';
      });
  
      post.addEventListener('mouseout', () => {
        post.style.transform = 'scale(1)';
      });
    });
  });
  