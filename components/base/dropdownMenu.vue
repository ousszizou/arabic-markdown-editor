<template>
  <div class="inline-block" v-on-clickaway="closeDropdownMenu">
    <div @click="toggle">
      <slot name="dropdown-menu-toggler">
        <slot />
      </slot>
    </div>
    <transition name="dropdown-menu-content-transition">
      <div
        v-if="active"
        class="bg-skin-dropdown w-60 rounded-xl absolute p-4 mt-3 left-6 z-20"
      >
        <slot name="dropdown-menu-content" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggle() {
      this.active = !this.active;
    },
    closeDropdownMenu() {
      this.active = false;
    },
  },
};
</script>

<style>
.dropdown-menu-content-transition-enter-active,
.dropdown-menu-content-transition-leave-active {
  transition: all 0.2s;
}
.dropdown-menu-content-transition-enter,
.dropdown-menu-content-transition-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
