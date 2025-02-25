<template>
  <section class="articles">
    <CardArticle />
  </section>
  <aside class="sidebar">
    <MustAccessTags />
    <MustAccessArticle />
  </aside>
</template>

<script setup>
import CardArticle from '@/components/CardArticle.vue'
import MustAccessTags from '@/components/MustAccessTags.vue'
import MustAccessArticle from '@/components/MustAccessArticle.vue'
</script>
