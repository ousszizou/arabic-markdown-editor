<template>
  <codemirror
    v-if="activeFile != ''"
    :value="activeFileDetails.content"
    :options="cmOption"
    @cursorActivity="onCmCursorActivity"
  />
</template>

<script>
// import { mapGetters } from "vuex";
export default {
  data() {
    return {
      cmOption: {
        tabSize: 2,
        keyMap: "sublime",
        mode: "text/x-gfm", // markdown
        styleActiveLine: true,
        lineNumbers: true,
        lineWrapping: true,
        line: true,
        theme: "ayu-mirage",
        direction: "rtl",
        scrollbarStyle: "overlay",
        extraKeys: {
          Enter: "newlineAndIndentContinueMarkdownList",
        },
      },
    };
  },
  // computed: {
  //   ...mapGetters("files", ["activeFile", "activeFileDetails"]),
  // },
  // methods: {
  //   updateContent(content) {
  //     this.$store.dispatch("files/updateFile", {
  //       id: this.$store.state.files.activeFile,
  //       key: "content",
  //       value: content,
  //     });
  //   },
  //   onCmCursorActivity(content) {
  //     this.$store.dispatch("files/updateFile", {
  //       id: this.$store.state.files.activeFile,
  //       key: "content",
  //       value: content.getValue(),
  //     });
  //   },
  // },
};
</script>

<style>
.cm-s-ayu-mirage.CodeMirror {
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  /* font-family: "Fira Code", monospace; */
  @apply px-1;
}
.CodeMirror-overlayscroll-vertical div {
  background-color: #12151b;
}
</style>
