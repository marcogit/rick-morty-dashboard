<template>
  <div
    class="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 transition-transform hover:scale-105"
  >
    <div class="relative">
      <img
        :src="character.image"
        :alt="character.name"
        class="w-full h-64 object-cover"
        loading="lazy"
      />
      <div
        class="absolute top-2 right-2 bg-gray-900 bg-opacity-70 p-2 rounded-full cursor-pointer hover:bg-opacity-100 transition-colors"
        @click="toggleFavorite"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          :class="isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'"
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
      </div>
    </div>
    <div class="p-4">
      <h3 class="text-xl font-bold text-white mb-1 truncate">
        {{ character.name }}
      </h3>
      <div class="flex items-center mb-2">
        <span class="h-3 w-3 rounded-full mr-2" :class="statusColor"></span>
        <span class="text-sm text-gray-300"
          >{{ character.status }} - {{ character.species }}</span
        >
      </div>
      <div class="text-xs text-gray-400 mt-2">
        <p>Last known location:</p>
        <p class="text-gray-200 hover:text-orange-400 transition-colors">
          {{ character.location.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Character } from "~/types";

const props = defineProps<{
  character: Character;
}>();

const favoritesStore = useFavoritesStore();

const isFavorite = computed(() =>
  favoritesStore.isFavorite(props.character.id),
);

const toggleFavorite = () => {
  favoritesStore.toggleFavorite(props.character);
};

const statusColor = computed(() => {
  switch (props.character.status) {
    case "Alive":
      return "bg-green-500";
    case "Dead":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
});
</script>
