<template>
  <div>
    <article v-for="article in articles" :key="article.id" class="article-card">
      <div class="article-image">
        <img :src="article.image" />
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
          <ClassifyVote :article="article" />
          <router-link :to="'/article/' + article.id" class="read-more">Ler mais</router-link>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import { useArticleStore } from '@/stores/articleStore'
import ClassifyVote from './ClassifyVote.vue'

const articleStore = useArticleStore()
let articles = articleStore.items
</script>
