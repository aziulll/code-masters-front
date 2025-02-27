<template>
  <div class="sidebar-section">
    <h3 class="sidebar-title">Tags Populares</h3>
    <div class="popular-tags">
      <div v-for="tag in tagsMustAccess" :key="tag">
        <router-link :to="'/tag/' + tag" class="popular-tag">{{ tag }}</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useArticleStore } from '@/stores/articleStore'
import { computed } from 'vue'

const articleStore = useArticleStore()
const tagsMustAccess = computed(() => articleStore.tagsMustAccess)
</script>

<style scoped>
.popular-tag {
  background-color: #1f2937;
  color: var(--text-muted);
  padding: 8px 15px;
  border-radius: 50px;
  font-size: 14px;
  transition: all 0.3s ease;
}

.popular-tag:hover {
  background-color: #6d5acd;
  color: var(--text-color);
}
</style>
