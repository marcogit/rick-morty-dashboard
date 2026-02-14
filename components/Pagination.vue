<template>
  <div
    class="flex items-center justify-between border-t border-gray-700 px-4 py-3 sm:px-6 mt-6"
  >
    <div class="flex-1 flex justify-between sm:hidden">
      <button
        @click="$emit('prev')"
        :disabled="!hasPrev"
        class="btn-portal px-6 py-3"
      >
        Previous
      </button>
      <button
        @click="$emit('next')"
        :disabled="!hasNext"
        class="btn-portal ml-3 px-6 py-3"
      >
        Next
      </button>
    </div>
    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-gray-400">
          Showing page
          <span class="font-medium text-white">{{ currentPage }}</span> of
          <span class="font-medium text-white">{{ totalPages }}</span>
        </p>
      </div>
      <div>
        <nav
          class="relative z-0 inline-flex shadow-sm space-x-2"
          aria-label="Pagination"
        >
          <button
            @click="$emit('prev')"
            :disabled="!hasPrev"
            class="btn-portal px-4 py-2.5"
          >
            <span class="sr-only">Previous</span>
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <button
            @click="$emit('next')"
            :disabled="!hasNext"
            class="btn-portal px-4 py-2.5"
          >
            <span class="sr-only">Next</span>
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  currentPage: number;
  totalPages: number;
  hasPrev: boolean;
  hasNext: boolean;
}>();

defineEmits(["next", "prev"]);
</script>
