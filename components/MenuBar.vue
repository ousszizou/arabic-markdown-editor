<script setup>
import { useAppStore } from "@/store/app";
const appStore = useAppStore();
</script>

<template>
  <div class="flex items-center justify-end py-2 px-6">
    <div class="order-2">
      <!-- Toggle between code & preview -->
      <Button
        btnType="primary"
        label="Toggle between code & preview"
        class="mx-2 inline-block lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          v-if="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          v-else
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
          />
        </svg>
      </Button>
      <!-- Enable Fullscreen View -->
      <Button btnType="primary" label="Enable Fullscreen View" class="mx-2">
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
            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
          ></path>
        </svg>
      </Button>
      <!-- Show Settings -->
      <Dropdown>
        <template #toggler>
          <Button btnType="primary" label="Show Settings" class="mr-2">
            <svg
              fill="none"
              stroke="currentColor"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
          </Button>
        </template>
        <template #content>
          <div
            class="text-skin-base bg-transaprent hover:bg-skin-dropdown-item-hover flex justify-items-center justify-around rounded-2xl p-3 transition duration-300 ease-out"
          >
            <span class="ml-4 self-center">الحفظ التلقائي</span>
            <Checkbox
              id="autoSave"
              :checked="appStore.autoSave"
              @click="appStore.updateSetting('autoSave', !appStore.autoSave)"
            />
          </div>
          <div
            class="text-skin-base bg-transaprent hover:bg-skin-dropdown-item-hover flex justify-items-center justify-around rounded-2xl p-3 transition duration-300 ease-out"
          >
            <span class="ml-4 self-center">التمرير المتزامن</span>
            <Checkbox
              id="syncScroll"
              :checked="appStore.syncScroll"
              @click="appStore.updateSetting('syncScroll', !appStore.syncScroll)"
            />
          </div>
        </template>
      </Dropdown>
    </div>
    <div class="order-1 ml-12 self-center hidden lg:inline-block">
      <!-- Preview Menu Item -->
      <Dropdown>
        <template #toggler>
          <Button btnType="secondary" label="معاينة" class="mr-2" />
        </template>
        <template #content>
          <a
            class="
              text-skin-base
              bg-transaprent
              hover:bg-skin-dropdown-item-hover
              rounded-xl
              py-3
              px-9
              transition
              duration-300
              ease-out
              block
            "
            v-for="(type, k) in types.previewAs"
            :key="k"
            :href="`/preview/${type.url}`"
            target="_blank"
          >
            {{ type.name }}
          </a>
        </template>
      </Dropdown>
      <!-- Export Menu Item -->
      <Dropdown>
        <template #toggler>
          <Button btnType="secondary" label="تصدير" class="mr-2" />
        </template>
        <template #content>
          <ul>
            <li
              class="
                text-skin-base
                bg-transaprent
                hover:bg-skin-dropdown-item-hover
                rounded-xl
                py-3
                px-9
                transition
                duration-300
                ease-out
                cursor-pointer
              "
              v-for="(type, k) in types.exportAs"
              :key="k"
              @click="exportFile(type.slug)"
            >
              {{ type.name }}
            </li>
          </ul>
        </template>
      </Dropdown>
      <!-- Import Menu Item -->
      <Dropdown>
        <template #toggler>
          <Button btnType="secondary" label="إستيراد" class="mr-2" />
        </template>
        <template #content>
          <div class="text-skin-base bg-transaprent hover:bg-skin-dropdown-item-hover rounded-xl py-3 px-9 transition duration-300 ease-out cursor-not-allowed" v-for="type in types.importAs">
            <a href="#" class="pointer-events-none">{{ type }}</a>
          </div>
        </template>
      </Dropdown>
    </div>
    <SidebarToggle class="ml-auto" />
    <Sidebar />
  </div>
</template>

// <script>
// import exportFile from "~/mixins/exportFile";
// export default {
//   props: ["layoutfullscreen"],
//   mixins: [exportFile],
//   data() {
//     return {
//       types: {
//         previewAs: {
//           markdown: {
//             name: "كـ markdown",
//             url: "markdown",
//           },
//           html: {
//             name: "كـ html",
//             url: "html",
//           },
//           "styled-html": {
//             name: "كـ html مُنسَق",
//             url: "styled-html",
//           },
//         },
//         exportAs: {
//           markdown: {
//             name: "كـ ملف markdown",
//             slug: "markdown",
//           },
//           html: {
//             name: "كـ ملف html",
//             slug: "html",
//           },
//           "styled-html": {
//             name: "كـ ملف html مُنسَق",
//             slug: "styled-html",
//           },
//         },
//         importAs: ["ملف markdown", "ملف html"],
//       },
//       showPreview: false,
//     };
//   },
//   methods: {
//     toggleFullScreen() {
//       if (!document.fullscreenElement) {
//         this.layoutfullscreen.requestFullscreen();
//       } else {
//         if (document.exitFullscreen) {
//           document.exitFullscreen();
//         }
//       }
//     },
//     updateSetting(key, value) {
//       this.$store.dispatch("app/updateSetting", {
//         key,
//         value,
//       });
//     },
//     togglePreview() {
//       this.$nuxt.$emit("togglePreview");
//     },
//   },
//   created() {
//     this.$nuxt.$on("togglePreview", () => {
//       this.showPreview = !this.showPreview;
//     });
//   },
//   beforeDestroy() {
//     this.$nuxt.$off("togglePreview");
//   },
//   computed: {
//     settings() {
//       return this.$store.state.app;
//     },
//     showCodeView() {
//       return this.$store.state.ui.showCode;
//     },
//   },
// };
// </script> -->
