<template>
  <nav class="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <NuxtLink to="/" class="flex-shrink-0">
            <h1
              class="text-2xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
            >
              Rick & Morty Dashboard
            </h1>
          </NuxtLink>
        </div>
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <NuxtLink
              to="/"
              class="px-3 py-2 rounded-md text-sm font-medium transition-colors"
              active-class="bg-gray-800 text-white"
              :class="[
                $route.path === '/'
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              ]"
            >
              Characters
            </NuxtLink>
            <NuxtLink
              to="/favorites"
              class="px-3 py-2 rounded-md text-sm font-medium transition-colors"
              active-class="bg-gray-800 text-white"
              :class="[
                $route.path === '/favorites'
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              ]"
            >
              Favorites
              <span
                v-if="favoritesCount > 0"
                class="ml-1 px-2 py-0.5 rounded-full bg-red-500 text-xs text-white"
              >
                {{ favoritesCount }}
              </span>
            </NuxtLink>
            <button
              @click="logout"
              class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
        <!-- Mobile menu button -->
        <div class="-mr-2 flex md:hidden">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="block h-6 w-6"
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
    <div v-show="isOpen" class="md:hidden bg-gray-900 border-t border-gray-800">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <NuxtLink
          to="/"
          class="block px-3 py-2 rounded-md text-base font-medium"
          active-class="bg-gray-800 text-white"
          :class="[
            $route.path === '/'
              ? 'bg-gray-800 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
          ]"
          @click="isOpen = false"
        >
          Characters
        </NuxtLink>
        <NuxtLink
          to="/favorites"
          class="block px-3 py-2 rounded-md text-base font-medium"
          active-class="bg-gray-800 text-white"
          :class="[
            $route.path === '/favorites'
              ? 'bg-gray-800 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
          ]"
          @click="isOpen = false"
        >
          Favorites ({{ favoritesCount }})
        </NuxtLink>
        <button
          @click="logout"
          class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
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
