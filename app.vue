<template>
  <div class="min-h-screen flex flex-col text-gray-100 font-sans">
    <NavBar v-if="authStore.isAuthenticated" />
    <main class="max-w-7xl w-full mx-auto py-6 px-4 sm:px-6 lg:px-8 flex-grow">
      <NuxtPage />
    </main>
    <Footer v-if="authStore.isAuthenticated" />
  </div>
</template>

<script setup lang="ts">
const authStore = useAuthStore();

useHead({
  htmlAttrs: {
    lang: "es",
  },
  link: [
    { rel: "canonical", href: "https://rick-morty-dashboard.netlify.app/" }, // Placeholder URL, update if real URL exists
  ],
});

useSeoMeta({
  title: "Rick and Morty Dashboard - Explore the Multiverse",
  ogTitle: "Rick and Morty Dashboard - Explore the Multiverse",
  description:
    "Discover and manage your favorite Rick and Morty characters with this interactive dashboard. Built with Nuxt 3, Pinia, and Tailwind CSS for a seamless experience across the multiverse.",
  ogDescription:
    "Discover and manage your favorite Rick and Morty characters with this interactive dashboard. Built with Nuxt 3, Pinia, and Tailwind CSS for a seamless experience across the multiverse.",
  keywords: "rick and morty, dashboard, nuxt, pinia, vue, characters",
  robots: "index, follow",
  author: "Marco López Ortiz, Antigravity AI",
  publisher: "Marco López Ortiz",
});

// Initialize toggle favorites from local storage on app start
const favoritesStore = useFavoritesStore();
onMounted(() => {
  favoritesStore.loadFromLocalStorage();
  authStore.initializeAuth();
});
</script>
