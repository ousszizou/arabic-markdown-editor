<script>
export default {
  layout: "preview",
  head() {
    return {
      title: this.title,
      titleTemplate: "معاينة الملف - %s",
      htmlAttrs: {
        dir: "rtl",
        lang: "ar",
      },
    };
  },
  data() {
    return {
      title: "",
      content: "",
      type: "",
    };
  },
  // mounted() {
  //   const file_details = this.$store.getters["files/activeFileDetails"];
  //   const file_type = this.$route.params.type;
  //   this.title = file_details.title;
  //   this.type = file_type;
  //   if (file_type === "markdown") {
  //     this.content = file_details.content;
  //   } else if (file_type === "html" || file_type === "styled-html") {
  //     this.content = this.$md.render(file_details.content);
  //   }
  // },
  render(h) {
    return h(
      "div",
      {
        class: {
          "px-6 py-8 w-3/5 mx-auto overflow-hidden":
            this.type === "styled-html",
        },
      },
      [
        h(this.type === "markdown" ? "pre" : "div", {
          domProps: {
            innerHTML: this.content,
          },
          class: {
            "markdown-content": this.type === "styled-html",
            "h-screen p-4 overflow-y-scroll overflow-x-hidden":
              this.type === "html",
            "whitespace-pre-wrap p-4": this.type === "markdown",
          },
        }),
      ]
    );
  },
};
</script>
