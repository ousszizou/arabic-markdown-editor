<script setup>
import { useFileStore } from "@/store/file";

const fileStore = useFileStore();

const editFileId = ref('')
const tempFileName = ref('')

const focusInputFile = async (id) => {
  editFileId.value = id;
  await nextTick();
  const inputElement = document.getElementById(`input-${id}`);
  if (inputElement) {
    inputElement.focus();
  }
}

const updateFileTitle = () => {
  if (editFileId.value && tempFileName.value === "") {
    editFileId.value = "";
    return;
  }
  fileStore.updateFileTitle({
    id: editFileId.value,
    newValue: tempFileName.value,
  });
  editFileId.value = "";
  tempFileName.value = "";
}

const changeActiveFile = (id) => {
  fileStore.changeActiveFile(id);
}

const addNewFile = () => {
  fileStore.addNewFile({
    title: "ملف جديد",
    content: "",
  });
}

const deleteFile = () => fileStore.deleteFile();
</script>

<template>
  <div>
    <div v-if="fileStore.allFiles.length > 0">
      <div v-for="file in fileStore.allFiles" :key="file.id">
        <div
          class="flex justify-between items-center bg-skin-base p-4 rounded-2xl transform hover:-translate-y-0.5 hover:shadow-lg mb-3"
          @click="changeActiveFile(file.id)"
          :class="file.id === fileStore.getActiveFile ? 'border-2 border-blue-500' : ''"
        >
          <input
            :id="`input-${file.id}`"
            v-model="tempFileName"
            ref="inputFileName"
            type="text"
            class="w-full me-3 px-3 py-2 rounded-xl bg-skin-secondary focus:outline-none"
            v-if="file.id == editFileId"
            @blur="updateFileTitle"
          />
          <p v-else class="bg-skin-base flex-grow p-2 rounded-xl ms-3">
            {{ file.data.title }}
          </p>
          <button
            class="bg-skin-button-accent hover:bg-skin-button-accent-hover cursor-pointer p-1 rounded-xl focus:outline-none focus:ring-0 transition duration-300 ease-out"
            @click="focusInputFile(file.id)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              class="fill-current text-skin-base p-1"
              viewBox="0 0 24 24"
            >
              <path
                d="M8.707 19.707L18 10.414 13.586 6l-9.293 9.293c-.128.128-.219.289-.263.464L3 21l5.242-1.03C8.418 19.926 8.579 19.835 8.707 19.707zM21 7.414c.781-.781.781-2.047 0-2.828L19.414 3c-.781-.781-2.047-.781-2.828 0L15 4.586 19.414 9 21 7.414z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="mt-6">
      <button
        class="bg-blue-500 hover:bg-blue-400 w-full rounded-xl p-2 transition duration-200 focus:outline-none"
        @click="addNewFile"
      >
        إضافة ملف
      </button>
      <button
        class="mt-2 bg-transparent hover:bg-red-400 w-full rounded-xl p-2 transition duration-200 focus:outline-none"
        @click="deleteFile"
      >
        حذف ملف
      </button>
    </div>
  </div>
</template>
