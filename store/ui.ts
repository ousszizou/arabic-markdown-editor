import { defineStore } from 'pinia'

interface UIState {
  sidebarOpen: boolean;
  sidebarWidth: number | null;
  showCode: boolean;
}

export const useUIStore = defineStore('ui', {
  state: (): UIState => ({
    sidebarOpen: false,
    sidebarWidth: null,
    showCode: true,
  }),
  getters: {
    sidebarOpen: state => state.sidebarOpen,
    sidebarWidth: state => state.sidebarWidth,
    showCode: state => state.showCode
  },
  actions: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    setSidebarWidth(width: number) {
      this.sidebarWidth = width;
    },
    closeSidebar() {
      this.sidebarOpen = false;
    },
    toggleView() {
      this.showCode = !this.showCode;
    },
  },
});
