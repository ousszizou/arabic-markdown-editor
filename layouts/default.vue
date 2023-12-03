<template>
  <div>
    <div
      class="bg-skin-base text-skin-base h-screen w-screen fixed top-0 right-0"
      ref="layout"
    >
      <!-- <base-sidebar /> -->
      <MenuBar class="h-16" />
      <slot
        class="my-0 mx-auto p-3 bg-skin-secondary"
        style="height: calc(100vh - 4rem)"
      />
    </div>
  </div>
</template>

<script>

// import { mapGetters } from "vuex";

export default {
    data() {
        return {
            title: "محرر ماركداون",
        };
    },
    head() {
        return {
            title: this.title,
            // titleTemplate: '%s - Yay!',
            htmlAttrs: {
                dir: "rtl",
                lang: "ar",
            },
        };
    },
};
</script>
