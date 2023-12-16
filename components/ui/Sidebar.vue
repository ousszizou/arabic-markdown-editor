<script setup>
import { TweenMax, Power4 } from "gsap";
import { version } from "~/package.json";
// export default {
  // computed: {
  //   ...mapGetters("ui", ["sidebarOpen", "sidebarWidth"]),
  // },
  // mounted() {
  //   if (this.$store.getters["ui/sidebarOpen"]) {
  //     this.$store.dispatch("ui/toggleSidebar");
  //   }
  //   TweenMax.set(this.$refs.sidebar, {
  //     x: this.$refs.sidebar.offsetWidth,
  //   });
  //   this.$store.dispatch("ui/setSidebarWidth", this.$refs.sidebar.offsetWidth);
  // },
  // watch: {
  //   sidebarOpen: function (sidebarOpen) {
  //     const dX = sidebarOpen ? 0 : this.$refs.sidebar.offsetWidth;
  //     TweenMax.to(this.$el, 0.6, {
  //       x: dX,
  //       ease: Power4.easeOut,
  //     });
  //   },
  // },
  // methods: {
  //   ...mapActions("ui", ["toggleSidebar", "closeSidebar"]),
  // },
// };
</script>

<template>
  <div
    ref="sidebar"
    class="
      flex flex-col
      justify-between
      bg-skin-secondary
      text-center
      fixed
      right-0
      top-0
      w-full
      md:w-2/5 xl:w-1/5
      h-screen
      shadow-lg
      z-10
      p-4
    "
  >
    <Button @click="closeSidebar" class="self-end inline-block md:hidden">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28px"
      height="28px"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12" />
      </svg>
    </Button>
    <!-- Header -->
    <!-- <div class="h-20 my-6 flex justify-center items-center">
      <img class="w-16" src="/logo.png" />
    </div> -->
    <!-- Body -->
    <div class="flex-grow py-6 overflow-y-scroll">
      <sidebar-file-list />
    </div>
    <!-- Footer -->
    <div class="h-28 mt-6 flex flex-col justify-between">
      <ul>
        <li
          class="
            py-1
            text-skin-base
            hover:text-skin-base-hover
            transition
            duration-150
          "
        >
          طريقة الإستعمال
        </li>
        <li
          class="
            py-1
            text-skin-base
            hover:text-skin-base-hover
            transition
            duration-150
          "
        >
          حول المُحرر
        </li>
      </ul>
      <span
        >الإصدار <code>{{ version }}</code></span
      >
    </div>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-thumb {
  border-radius: 50px;
  background: transparent;
}
::-webkit-scrollbar-thumb:window-inactive {
  background: transparent;
}
</style>
