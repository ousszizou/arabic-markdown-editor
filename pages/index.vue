<template>
  <div
    class="flex relative text-lg"
    :class="[sidebarOpen ? 'filter blur' : '']"
  >
    <div
      class="flex bg-skin-secondary py-4 pr-6 w-full lg:w-1/2"
      :class="{ hidden: showPreview }"
    >
      <vue-codemirror class="w-full" />
    </div>
    <div
      class="
      markdown-content-wraper
        overflow-y-scroll
        bg-skin-base
        py-4
        px-6
        w-full
        lg:w-1/2
        lg:block
      "
      :class="{ hidden: !showPreview }"
    >
      <preview-content />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import syncScroll from "../utils/syncScroll";

export default {
  data() {
    return {
      showPreview: false,
    };
  },
  computed: {
    ...mapGetters("ui", ["sidebarOpen"]),
  },
  created() {
    this.$nuxt.$on("togglePreview", () => {
      this.showPreview = !this.showPreview;
    });
  },
  beforeDestroy() {
    this.$nuxt.$off("togglePreview");
  },
  mounted() {
    setTimeout(() => {
      syncScroll(
        [".CodeMirror-scroll", ".markdown-content-wraper"],
        this.$store
      );
    }, 1000);
  },
};
</script>

<style scoped>
/*  */
.markdown-content-wraper {}
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 25px #151a24;
  border-radius: 0;
}
::-webkit-scrollbar-thumb {
  border-radius: 0;
  background: #12151b;
}
::-webkit-scrollbar-thumb:window-inactive {
  background: #12151b;
}
</style>
