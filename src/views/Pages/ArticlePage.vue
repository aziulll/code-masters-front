<template>
  <div class="article-container">
    <div class="article-header">
      <h1 class="article-title">{{ article.title }}</h1>
      <div class="article-meta">
        <div class="meta-item">
          <span class="meta-icon">📅</span>
          <span>Publicado em: {{ article.date }}</span>
        </div>
        <div class="meta-item">
          <span class="meta-icon">👤</span>
          <span>Por: {{ article.author }}</span>
        </div>
      </div>

      <div class="tags-container">
        <router-link
          :to="'/tag/' + tag"
          v-for="tag in article.tags"
          :key="tag"
          href="#"
          class="tag"
        >
          {{ tag }}
        </router-link>
      </div>
    </div>

    <div class="article-divider"></div>

    <main class="article-content">
      <!-- {{ article.excerpt }} -->
      <p>
        freestar freestar Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis
        lectus non tortor laoreet congue ac nec felis. Vivamus molestie ligula eget nibh consequat,
        id eleifend nisl tempor.
      </p>

      <p>
        Pellentesque pellentesque, magna vel dapibus pretium, justo ante fermentum dolor, vel
        porttitor risus ante et nisl. Praesent mollis leo vel urna laoreet, et viverra quam
        ultricies. Nunc cursus sem a nibh rutrum varius.
      </p>

      <blockquote>
        Nam sem justo, efficitur nec scelerisque sit amet, vestibulum vel tellus. Aenean in metus
        gravida, consequat elit ac, ornare tellus.
      </blockquote>

      <p>
        Sed euismod urna vel est eleifend semper. Cras lacinia eros in ex volutpat lacinia.
        Pellentesque mollis sapien id porta fringilla. Suspendisse venenatis neque ut nibh tempus
        volutpat. Ut tincidunt imperdiet semper.
      </p>
    </main>

    <footer class="article-footer">
      <ClassifyVote :article="article" />
      <div class="share-buttons">
        <button class="share-btn twitter">
          <span>Twitter</span>
        </button>
        <button class="share-btn facebook">
          <span>Facebook</span>
        </button>
        <button class="share-btn linkedin">
          <span>LinkedIn</span>
        </button>
      </div>
    </footer>
  </div>
</template>

<script setup>
import ClassifyVote from '@/components/ClassifyVote.vue'
import { useArticleStore } from '@/stores/articleStore'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const articleStore = useArticleStore()
const route = useRoute()

const articleId = computed(() => Number(route.params.id))

const article = computed(() => articleStore.getArticleById(articleId.value))
</script>

<style scoped>
.article-container {
  max-width: 800px;
  margin: 2rem auto;
  background-color: #111827;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  color: #e5e7eb;
  font-family: 'Inter', sans-serif;
  line-height: 1.8;
}

.article-header {
  margin-bottom: 1.5rem;
}

.article-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  line-height: 1.3;
  color: #f3f4f6;
}

.article-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  color: #9ca3af;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.meta-icon {
  font-size: 1.1rem;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin: 1rem 0;
}

.tag {
  display: inline-block;
  padding: 0.4rem 0.8rem;
  background-color: #1f2937;
  color: #60a5fa;
  border-radius: 6px;
  font-size: 0.85rem;
  text-decoration: none;
  transition: all 0.2s ease;
  border: 1px solid #374151;
}

.tag:hover {
  background-color: #2d3748;
  transform: translateY(-2px);
}

.article-divider {
  height: 1px;
  background: linear-gradient(to right, transparent, #4b5563, transparent);
  margin: 2rem 0;
}

.article-content {
  font-size: 1.05rem;
  color: #d1d5db;
}

.article-content p {
  margin-bottom: 1.5rem;
}

.article-content blockquote {
  border-left: 4px solid #3b82f6;
  padding: 1rem 1.5rem;
  margin: 2rem 0;
  background-color: #1f2937;
  font-style: italic;
  color: #e5e7eb;
}

.article-footer {
  margin-top: 3rem;
  border-top: 1px solid #374151;
  padding-top: 2rem;
}

.share-buttons {
  display: flex;
  gap: 1rem;
}

.share-btn {
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
}

.twitter {
  background-color: #1da1f2;
  color: white;
}

.facebook {
  background-color: #1877f2;
  color: white;
}

.linkedin {
  background-color: #0a66c2;
  color: white;
}

.share-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.related-articles {
  margin-top: 2rem;
}

.related-articles h3 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: #f3f4f6;
}

.related-articles ul {
  list-style: none;
  padding: 0;
}

.related-articles li {
  padding: 0.8rem 0;
  border-bottom: 1px solid #2d3748;
}

.related-articles li:last-child {
  border-bottom: none;
}

.related-articles a {
  color: #60a5fa;
  text-decoration: none;
  transition: color 0.2s ease;
}

.related-articles a:hover {
  color: #93c5fd;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .article-container {
    padding: 1.5rem;
    margin: 1rem;
    border-radius: 8px;
  }

  .article-title {
    font-size: 1.8rem;
  }

  .article-meta {
    flex-direction: column;
    gap: 0.5rem;
  }

  .share-buttons {
    flex-wrap: wrap;
  }
}
</style>
