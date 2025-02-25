<template>
  <div>
    <article v-for="article in articles" :key="article.id" class="article-card">
      <div class="article-image">
        <img :src="article.image" alt="Imagem do artigo" />
      </div>
      <div class="article-content">
        <div class="article-meta">
          <span>Por {{ article.author }} • {{ article.date }}</span>
          <span>{{ article.readTime }}</span>
        </div>
        <h2 class="article-title">{{ article.title }}</h2>
        <p class="article-excerpt">{{ article.excerpt }}</p>
        <div class="tags">
          <a v-for="tag in article.tags" :key="tag" href="#" class="tag">{{ tag }}</a>
        </div>
        <div class="article-footer">
          <div class="vote-buttons">
            <button class="vote-btn upvote">
              <span>+</span>
              <span class="vote-count">{{ article.upvotes }}</span>
            </button>
            <button class="vote-btn downvote">
              <span>-</span>
              <span class="vote-count">{{ article.downvotes }}</span>
            </button>
          </div>
          <router-link :to="'/article/' + article.id" class="read-more">Ler mais</router-link>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const articles = ref([
  {
    id: 1,
    image:
      'https://get.pxhere.com/photo/code-code-editor-coding-computer-data-developing-development-ethernet-html-programmer-programming-screen-software-technology-work-1366450.jpg',
    author: 'Luiza Barbosa',
    date: '24 Fev, 2025',
    readTime: '5 min de leitura',
    title: 'Como a IA está revolucionando o desenvolvimento de software',
    excerpt:
      'Descubra como os avanços em inteligência artificial estão mudando a forma como desenvolvemos software, desde assistentes de código até testes automatizados.',
    tags: ['IA', 'Desenvolvimento', 'Software'],
    upvotes: 125,
    downvotes: 23,
  },
  {
    id: 2,
    image:
      'https://get.pxhere.com/photo/code-code-editor-coding-computer-data-developing-development-ethernet-html-programmer-programming-screen-software-technology-work-1366450.jpg',
    author: 'Luiza Barbosa',
    date: '20 Fev, 2025',
    readTime: '3 min de leitura',
    title: 'O impacto do ChatGPT na produtividade dos desenvolvedores',
    excerpt:
      'Como ferramentas de IA como o ChatGPT estão ajudando programadores a escrever código mais rápido e com menos erros.',
    tags: ['ChatGPT', 'Produtividade', 'Programação'],
    upvotes: 98,
    downvotes: 12,
  },
])
</script>
