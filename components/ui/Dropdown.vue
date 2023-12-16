<script setup>
const target = ref(null)

onClickOutside(target, (event) => closeDropdown())

const active = ref(false);

const toggle = () => {
  active = !active;
};

const closeDropdown = () => {
  active = false;
};

</script>
<template>
  <div class="inline-block" :ref="target">
    <div @click="toggle">
      <slot name="toggler" />
    </div>
    <transition name="dropdown-content-transition">
      <div
        v-if="active"
        class="bg-skin-dropdown rounded-xl absolute p-4 mt-3 z-20"
      >
        <slot name="content" />
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
