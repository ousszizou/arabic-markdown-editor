<template>
  <button
    :class="[
      buttonCommunStyle,
      btnType == 'primary' ? buttonPrimaryStyle : buttonSecondaryStyle,
    ]"
    v-on="$listeners"
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

<script>
export default {
  props: {
    btnType: {
      type: String,
      required: true,
    },
    label: {
      type: String,
    },
  },
  data() {
    return {
      buttonCommunStyle:
        "cursor-pointer p-2 rounded-xl focus:outline-none focus:ring-0 transition duration-300 ease-out",
      buttonPrimaryStyle:
        "bg-skin-button-accent hover:bg-skin-button-accent-hover",
      buttonSecondaryStyle: "bg-transaprent hover:bg-skin-button-accent-hover",
    };
  },
};
</script>

<style>
</style>
