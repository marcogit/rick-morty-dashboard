<template>
  <div>
    <div
      class="mb-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
    >
      <h1 class="text-white text-center sm:text-left">Characters</h1>
      <SearchBar v-model="search" />
    </div>

    <!-- Loading State -->
    <div v-if="pending" class="flex justify-center items-center h-64">
      <div
        class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"
      ></div>
    </div>

    <!-- Error or Empty Search State -->
    <div
      v-else-if="error || (!characters.length && search)"
      class="w-full text-center py-12 bg-black bg-opacity-40 rounded-xl border border-gray-800 shadow-2xl backdrop-blur-sm px-6"
    >
      <img
        src="~/assets/img/error.gif"
        alt="No results"
        class="mx-auto mb-8 w-64 h-auto rounded-lg shadow-lg border-2 border-green-500"
      />
      <h2 class="text-red-500 mb-4">
        {{
          error?.statusCode === 404 || !characters.length
            ? 'No characters found matching "' + search + '"'
            : "Oops! Something went wrong"
        }}
      </h2>
      <p
        v-if="error && error.statusCode !== 404"
        class="text-gray-400 text-sm mb-6"
      >
        {{ error.message }}
      </p>
      <button
        v-if="error?.statusCode === 404 || (!characters.length && search)"
        @click="search = ''"
        class="btn-portal px-6 py-2"
      >
        Clear Search
      </button>
      <button v-else @click="refresh" class="btn-portal px-6 py-2">
        Retry
      </button>
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
