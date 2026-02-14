<template>
  <div>
    <div
      class="mb-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
    >
      <h1 class="text-3xl font-bold text-white">Characters</h1>
      <SearchBar v-model="search" />
    </div>

    <!-- Loading State -->
    <div v-if="pending" class="flex justify-center items-center h-64">
      <div
        class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"
      ></div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="text-center py-10">
      <p class="text-red-500 text-xl">
        Error loading characters. Please try again.
      </p>
      <p class="text-gray-400 text-sm mt-2">{{ error.message }}</p>
      <button
        @click="refresh"
        class="mt-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-white transition"
      >
        Retry
      </button>
    </div>

    <!-- Empty State -->
    <div v-else-if="!characters.length" class="text-center py-10">
      <p class="text-gray-400 text-xl">
        No characters found matching "{{ search }}".
      </p>
    </div>

    <!-- Content -->
    <div v-else>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <CharacterCard
          v-for="character in characters"
          :key="character.id"
          :character="character"
        />
      </div>

      <Pagination
        :current-page="page"
        :total-pages="info?.pages || 0"
        :has-prev="!!info?.prev"
        :has-next="!!info?.next"
        @prev="prevPage"
        @next="nextPage"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});

const {
  characters,
  info,
  pending,
  error,
  page,
  search,
  nextPage,
  prevPage,
  refresh,
} = useCharacters();

// Reset page when search changes (handled by watch in composable? No, usually needs manual reset or watch in component or better handling in composable)
// The composable watches search but doesn't explicitly reset page to 1.
// Ideally, search change should reset page to 1.
// Let's add a watch here to be safe and rigorous.

watch(search, () => {
  page.value = 1;
});
</script>
