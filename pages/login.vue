<template>
  <div
    class="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
  >
    <div
      class="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700"
    >
      <div class="text-center">
        <img
          src="~/assets/img/logo-main.svg"
          alt="Rick & Morty Dashboard"
          title="Rick & Morty Dashboard"
          class="mx-auto h-20 w-auto mb-6"
        />
        <h1 class="text-center text-3xl font-extrabold text-white">
          Sign in to your account
        </h1>
        <p class="mt-2 text-center text-sm text-gray-400">
          Enter your credentials to access the multiverse
        </p>

        <!-- Demo Notice -->
        <div
          class="mt-4 p-3 bg-green-900 bg-opacity-20 border border-green-500 rounded-md text-xs text-green-400 text-center"
        >
          <p class="font-bold mb-1">DEMO MODE</p>
          <p>Use any email and a 6+ digit password to sign in.</p>
        </div>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required
              v-model="email"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-gray-300 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm bg-gray-700"
              placeholder="Email address"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              v-model="password"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-gray-300 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm bg-gray-700"
              placeholder="Password"
            />
          </div>
        </div>

        <div v-if="error" class="text-red-500 text-sm text-center">
          {{ error }}
        </div>

        <div>
          <button
            type="submit"
            class="btn-portal group w-full px-4 py-2.5 text-base"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                class="h-5 w-5 text-[#97ce4c] group-hover:text-black transition-colors"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false, // Custom layout for login if needed, or just handle in App.vue
});

const authStore = useAuthStore();
const email = ref("");
const password = ref("");
const error = ref("");

const handleLogin = () => {
  if (password.value.length < 6) {
    error.value = "Password must be at least 6 characters long.";
    return;
  }

  error.value = "";
  authStore.login(email.value);
  navigateTo("/");
};
</script>
