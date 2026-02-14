<template>
  <div class="relative max-w-lg w-full">
    <div
      class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
    >
      <svg
        class="h-5 w-5 text-gray-200"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <input
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      type="text"
      class="block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md leading-5 bg-black bg-opacity-50 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#97ce4c] focus:shadow-[0_0_15px_rgba(151,206,76,0.5)] transition-all duration-300 sm:text-sm"
      placeholder="Search characters by name..."
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string;
}>();

defineEmits(["update:modelValue"]);
</script>
