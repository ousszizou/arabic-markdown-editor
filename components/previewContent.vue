<template>
  <div
    v-if="activeFile != ''"
    class="markdown-content max-w-full"
    v-html="$md.render(activeFileDetails.content)"
  ></div>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
  // computed: {
  //   ...mapGetters("files", ["activeFile", "activeFileDetails"]),
  // },
};
</script>
