import * as types from "../mutation_types";

const state = () => ({
  sidebarOpen: false,
  sidebarWidth: null,
  showCode: true
});

const getters = {
  sidebarOpen: state => state.sidebarOpen,
  sidebarWidth: state => state.sidebarWidth,
  showCode: state => state.showCode
};

const mutations = {
  [types.TOGGLE_SIDEBAR](state) {
    state.sidebarOpen = !state.sidebarOpen;
  },
  [types.SET_SIDEBAR_WIDTH](state, payload) {
    state.sidebarWidth = payload;
  },
  [types.CLOSE_SIDEBAR](state) {
    state.sidebarOpen = false;
  },
  [types.TOGGLE_VIEW](state) {
    state.showCode = !state.showCode;
  }
};

const actions = {
  toggleSidebar({ commit }) {
    commit(types.TOGGLE_SIDEBAR);
  },
  setSidebarWidth({ commit }, width) {
    commit(types.SET_SIDEBAR_WIDTH, width);
  },
  closeSidebar({ commit }) {
    commit(types.CLOSE_SIDEBAR);
  },
  toggleView({ commit }) {
    commit(types.TOGGLE_VIEW);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
