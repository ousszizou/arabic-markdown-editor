<script setup>
defineProps({
  btnType: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
});
</script>

<template>
  <button
    :class="[
      'cursor-pointer p-2 rounded-xl focus:outline-none focus:ring-0 transition duration-300 ease-out',
      btnType == 'primary' ? 'bg-skin-button-accent hover:bg-skin-button-accent-hover' : 'bg-transaprent hover:bg-skin-button-accent-hover',
    ]"
  >
    <span v-if="btnType == 'secondary'" class="px-1">
      {{ label }}
      <svg
        class="inline-block"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </span>
    <slot v-else></slot>
  </button>
</template>
