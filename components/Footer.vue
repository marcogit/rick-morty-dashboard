<template>
  <footer class="bg-gradient-to-t from-black to-transparent mt-12 py-8">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center space-y-4"
    >
      <div class="flex items-center justify-center">
        <img
          src="~/assets/img/logo-main.svg"
          alt="Rick & Morty Dashboard"
          title="Rick & Morty Dashboard"
          class="h-16 w-auto"
        />
      </div>
      <div class="text-center text-gray-400 text-sm">
        <p>
          Created by
          <span class="text-white font-medium">Marco López Ortiz</span>
        </p>
        <p class="mt-1 text-xs text-gray-500">
          &copy; {{ new Date().getFullYear() }} All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
