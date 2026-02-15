<template>
  <nav class="bg-gradient-to-b from-black to-transparent sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <NuxtLink to="/" class="flex-shrink-0">
            <img
              src="~/assets/img/logo-main.svg"
              alt="Rick & Morty Dashboard"
              title="Rick & Morty Dashboard"
              class="h-14 w-auto"
            />
          </NuxtLink>
        </div>
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <NuxtLink
              to="/"
              class="btn-portal px-3 py-2 text-sm"
              :class="{ active: $route.path === '/' }"
            >
              Characters
            </NuxtLink>
            <NuxtLink
              to="/favorites"
              class="btn-portal px-3 py-2 text-sm"
              :class="{ active: $route.path === '/favorites' }"
            >
              Favorites
              <span
                v-if="favoritesCount > 0"
                class="ml-2 px-2 py-0.5 rounded-full bg-red-500 text-xs text-white font-sans"
              >
                {{ favoritesCount }}
              </span>
            </NuxtLink>
            <button @click="logout" class="btn-portal px-3 py-1.5 text-sm">
              Logout
            </button>
          </div>
        </div>
        <!-- Mobile menu button -->
        <div class="-mr-2 flex md:hidden">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="btn-portal p-2 transition-colors"
            :class="{ active: isOpen }"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="block h-6 w-6"
              :class="{ 'text-black': isOpen }"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      v-show="isOpen"
      class="md:hidden bg-black bg-opacity-90 border-t border-gray-800"
    >
      <div class="px-2 pt-2 pb-3 space-y-2 sm:px-3">
        <NuxtLink
          to="/"
          class="btn-portal block w-full text-center py-3"
          :class="{ active: $route.path === '/' }"
          @click="isOpen = false"
        >
          Characters
        </NuxtLink>
        <NuxtLink
          to="/favorites"
          class="btn-portal block w-full text-center py-3"
          :class="{ active: $route.path === '/favorites' }"
          @click="isOpen = false"
        >
          Favorites ({{ favoritesCount }})
        </NuxtLink>
        <button @click="logout" class="btn-portal w-full px-4 py-3 mt-4">
          Logout
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const authStore = useAuthStore();
const favoritesStore = useFavoritesStore();
const isOpen = ref(false);

const favoritesCount = computed(() => favoritesStore.favorites.length);

const logout = () => {
  authStore.logout();
};
</script>
