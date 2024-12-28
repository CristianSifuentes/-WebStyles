document.addEventListener('DOMContentLoaded', () => {
  const articles = document.querySelectorAll('.article');

  // Add hover animation on articles
  articles.forEach((article) => {
    article.addEventListener('mouseover', () => {
      article.style.transform = 'scale(1.03)';
    });

    article.addEventListener('mouseout', () => {
      article.style.transform = 'scale(1)';
    });
  });
});
