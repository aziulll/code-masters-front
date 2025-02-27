<template>
  <div class="container">
    <img
      src="../../assets/LUIZA.jpg"
      alt="Foto de perfil de Luiza"
      class="profile-img"
      loading="lazy"
    />

    <h1 class="title">Sobre Este Projeto</h1>

    <p class="description">
      Este projeto foi criado por <strong>Luiza</strong> como um portfólio e uma plataforma para
      compartilhar conhecimento. Aqui, você encontrará projetos, artigos e conteúdos que refletem
      minha experiência e aprendizado.
    </p>

    <p class="description">
      Meu objetivo é contribuir com a comunidade e mostrar meu trabalho de forma acessível e
      interativa.
    </p>

    <p class="cta">
      Conecte-se comigo no
      <a
        href="https://www.linkedin.com/in/luiza-barbosa-rocha/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Perfil do LinkedIn de Luiza"
        class="link"
      >
        LinkedIn
      </a>
    </p>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
}

.profile-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border: 3px solid #ccc;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #8b5cf6;
}

.description {
  font-size: 1rem;
  margin-bottom: 15px;
  color: #ccc;
}

.cta {
  font-size: 1rem;
  margin-top: 20px;
  color: #ccc;
}

.link {
  color: #8b5cf6;
  text-decoration: none;
  font-weight: bold;
  transition:
    color 0.3s ease,
    text-decoration 0.3s ease;
}

.link:hover {
  color: #005f99;
  text-decoration: underline;
}

@media (max-width: 600px) {
  .profile-img {
    width: 120px;
    height: 120px;
  }

  .title {
    font-size: 1.8rem;
  }

  .description,
  .cta {
    font-size: 0.9rem;
  }
}
</style>
