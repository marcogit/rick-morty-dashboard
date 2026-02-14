<template>
  <div>
    <h1 class="text-white mb-6">My Favorites</h1>

    <div
      v-if="favorites.length === 0"
      class="text-center py-20 bg-gray-800 rounded-lg border border-gray-700 border-dashed"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-16 w-16 mx-auto text-gray-600 mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      <p class="text-xl text-gray-400">You haven't added any favorites yet.</p>
      <NuxtLink
        to="/"
        class="mt-4 inline-block text-green-500 hover:text-green-400 hover:underline"
      >
        Browse characters to add some.
      </NuxtLink>
    </div>

    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      <CharacterCard
        v-for="character in favorites"
        :key="character.id"
        :character="character"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});

const favoritesStore = useFavoritesStore();
const result = computed(() => favoritesStore.favorites);
// Mapping favorites directly from store
const favorites = result;
</script>
