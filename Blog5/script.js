document.addEventListener('DOMContentLoaded', () => {
  const posts = document.querySelectorAll('.post-item');
  const searchInput = document.getElementById('search-input');
  const paginationButtons = document.querySelectorAll('.page-btn');

  let currentPage = 1;
  const postsPerPage = 2;

  // Función para mostrar publicaciones según la página
  function displayPosts(page) {
    const start = (page - 1) * postsPerPage;
    const end = start + postsPerPage;

    posts.forEach((post, index) => {
      post.style.display = index >= start && index < end ? 'block' : 'none';
    });

    updatePagination(page);
  }

  // Actualizar botones de paginación
  function updatePagination(page) {
    currentPage = page;
    paginationButtons.forEach(btn => {
      const pageNum = btn.dataset.page;
      if (pageNum === 'prev') {
        btn.disabled = currentPage === 1;
      } else if (pageNum === 'next') {
        btn.disabled = currentPage === Math.ceil(posts.length / postsPerPage);
      }
    });
  }

  // Manejador de eventos para los botones de paginación
  paginationButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const pageNum = btn.dataset.page;
      if (pageNum === 'prev') {
        displayPosts(currentPage - 1);
      } else if (pageNum === 'next') {
        displayPosts(currentPage + 1);
      } else {
        displayPosts(Number(pageNum));
      }
    });
  });

  // Función para filtrar publicaciones por búsqueda
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    posts.forEach(post => {
      const title = post.querySelector('h3').textContent.toLowerCase();
      post.style.display = title.includes(query) ? 'block' : 'none';
    });
  });

  // Inicializar con la primera página
  displayPosts(1);
});
