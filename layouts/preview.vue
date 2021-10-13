<template>
  <div>
    <div class="bg-skin-base ov text-skin-base">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      htmlAttrs: {
        dir: "rtl",
        lang: "ar",
      },
    };
  },
};
</script>

<style>
/* customize scrollbar */
/* ::-webkit-scrollbar {
  width: 4px;
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
} */
</style>
