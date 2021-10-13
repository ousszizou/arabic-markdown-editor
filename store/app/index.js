import * as types from "../mutation_types";
import Vue from "vue";

const state = () => ({
  autoSave: true,
  syncScroll: true,

});

const getters = {

};

const mutations = {
  [types.UPDATE_SETTINGS](state, { key, value }) {
    Vue.set(state, key, !value);
  },
};

const actions = {
  updateSetting({commit}, { key, value }) {
    commit(types.UPDATE_SETTINGS, {key, value});
  },
};

export default {
  state,
  getters,
  mutations,
  actions
}
