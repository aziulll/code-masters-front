<template>
  <div class="vote-buttons">
    <button class="vote-btn upvote" @click="upvote">
      <span class="material-icons">thumb_up</span>
    </button>
    <span class="vote-count">{{ article.votes }}</span>
    <button class="vote-btn downvote" @click="downvote">
      <span class="material-icons">thumb_down</span>
    </button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useArticleStore } from '@/stores/articleStore'

const articleStore = useArticleStore()
const props = defineProps({ article: Object })

const upvote = () => {
  articleStore.upvote(props.article.id)
}

const downvote = () => {
  articleStore.downvote(props.article.id)
}
</script>
