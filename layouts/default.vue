<script setup lang="ts">
import { ConfigProvider } from 'radix-vue'
import { useFileStore } from "@/store/file";

const fileStore = useFileStore();

onMounted(() => {
  if (!fileStore.isFirstFileCreated) {
    fileStore.createFirstDefaultFile();
  }
})
</script>

<template>
  <ConfigProvider dir="rtl" :scroll-body="false">
    <div
      class="text-skin-base h-screen w-screen fixed top-0 right-0"
      ref="layout"
    >
      <!-- <base-sidebar /> -->
      <MenuBar class="h-16" />
      <slot
        class="my-0 mx-auto p-3 bg-skin-secondary"
        style="height: calc(100vh - 4rem)"
      />
    </div>
  </ConfigProvider>
</template>
