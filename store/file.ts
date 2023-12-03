import { defineStore } from 'pinia'
import ShortUniqueId from 'short-unique-id';

interface FileState {
  files: {
    id: string;
    data: {
      title: string;
      content: string;
    };
  }[] | [];
  activeFile: string;
  isFirstFileCreated: boolean;
}

const { rnd } = new ShortUniqueId({ length: 5 });

export const useAppStore = defineStore('file', {
  state: (): FileState => ({
    files: [],
    activeFile: "",
    isFirstFileCreated: false,
  }),
  getters: {
    allFiles: (state) => state.files,
    latestFile: (state) => state.files[state.files.length - 1],
    activeFile: (state) => state.activeFile,
    isFirstFileCreated: (state) => state.isFirstFileCreated,
  },
  actions: {

  },
});
