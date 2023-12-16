import { defineStore } from 'pinia'

interface AppState {
  autoSave: boolean,
  syncScroll: boolean,
}

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    autoSave: true,
    syncScroll: true,
  }),
  actions: {
    updateSetting(key: keyof AppState, value: boolean) {
      this[key] = !value;
    },
  },
});
