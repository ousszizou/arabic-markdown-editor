<template>
  <base-button
    @click="toggleSidebar"
    v-on-clickaway="closeSidebar"
    btnType="primary"
    :class="[sidebarOpen ? 'transform rotate-180 -mr-3 hidden md:block' : '']"
  >
    <svg
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 5l7 7-7 7M5 5l7 7-7 7"
      ></path>
    </svg>
  </base-button>
</template>

<script>
// import { mapActions, mapGetters } from "vuex";
import { TweenMax, Power4 } from "gsap";
export default {
  // computed: {
  //   ...mapGetters("ui", ["sidebarOpen", "sidebarWidth"]),
  // },
  // methods: {
  //   ...mapActions("ui", ["toggleSidebar"]),
  // },
  mounted() {
    TweenMax.set(this.$el, {
      x: 0,
    });
  },
  watch: {
    sidebarOpen: function (sidebarOpen) {
      const dX = !sidebarOpen ? 0 : -this.sidebarWidth;
      TweenMax.to(this.$el, 0.6, {
        x: dX,
        ease: Power4.easeOut,
      });
      TweenMax.to(this.$el, {
        duration: 1,
        x: dX,
        rotation: sidebarOpen ? 180 : 0,
        ease: "back",
      });
    },
  },
};
</script>

<style>
</style>
