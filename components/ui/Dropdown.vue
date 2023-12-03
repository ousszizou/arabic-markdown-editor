<script setup>
const active = ref(false);

const toggle = () => {
  active = !active;
};

const closeDropdown = () => {
  active = false;
};

</script>
<template>
  <div class="inline-block" v-on-clickaway="closeDropdown">
    <div @click="toggle">
      <slot name="dropdown-toggler">
        <slot />
      </slot>
    </div>
    <transition name="dropdown-content-transition">
      <div
        v-if="active"
        class="bg-skin-dropdown rounded-xl absolute p-4 mt-3 z-20"
      >
        <slot name="dropdown-content">
          <slot />
        </slot>
      </div>
    </transition>
  </div>
</template>

<style>
.dropdown-content-transition-enter-active,
.dropdown-content-transition-leave-active {
  transition: all 0.2s;
}
.dropdown-content-transition-enter,
.dropdown-content-transition-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
