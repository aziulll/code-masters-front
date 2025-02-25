<template>
  <div class="container">
    <nav class="navbar">
      <router-link to="/" class="logo">Code<span>Masters</span></router-link>
      <div class="search-container">
        <input type="text" placeholder="Buscar artigos..." />
        <button type="submit">🔍</button>
      </div>
      <div>
        <router-link to="/login" class="read-more">Login</router-link>
        <router-link to="/register" class="read-more">Registre-se</router-link>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.read-more {
  margin-left: 10px;
  width: 180px;
  height: 60px;
  cursor: pointer;
  background: transparent;
  border: 1px solid #5a48b3;
  outline: none;
  transition: 1s ease-in-out;
}
</style>
