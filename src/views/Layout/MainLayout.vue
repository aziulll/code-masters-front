<template>
  <header>
    <SearchBar />
  </header>
  <div class="container">
    <main class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import SearchBar from '@/components/SearchBar.vue'
</script>
