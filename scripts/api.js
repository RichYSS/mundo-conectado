
    let articles = [];
    let currentIndex = 0;

    async function fetchArticles() {
      try {
        const res = await fetch("https://dev.to/api/articles?tag=technology&per_page=10");
        articles = await res.json();
        showArticle();
        setInterval(showArticle, 7000); 
      } catch (err) {
        console.error("Error al cargar artículos:", err);
      }
    }

    function showArticle() {
      if (articles.length === 0) return;

      const article = articles[currentIndex];
      const image = article.cover_image || "img/comunicacion.jpg";
      
      document.getElementById("coverImage").src = image;
      document.getElementById("title").textContent = article.title;
      document.getElementById("author").textContent = `Autor: ${article.user.name}`;
      document.getElementById("readMore").href = article.url;

      currentIndex = (currentIndex + 1) % articles.length;
    }

    fetchArticles();
 
