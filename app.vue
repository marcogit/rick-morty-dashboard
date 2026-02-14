<template>
  <div class="min-h-screen bg-gray-900 text-gray-100 font-sans">
    <NavBar v-if="authStore.isAuthenticated" />
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
const authStore = useAuthStore();

// Initialize toggle favorites from local storage on app start
const favoritesStore = useFavoritesStore();
onMounted(() => {
  favoritesStore.loadFromLocalStorage();
  authStore.initializeAuth();
});
</script>
