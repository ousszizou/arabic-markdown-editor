// import * as types from "../mutation_types";
// import shortid from 'shortid';
// import Vue from "vue";

// const state = () => ({
//   files: {},
//   activeFile: '',
//   firstFileCreated: false,
// });

// const getters = {
//   allFiles: (state) => Object.keys(state.files).map((key) => ({
//     id: key,
//     ...state.files[key],
//   })),
//   latestFile: (state, getters) => Object.values(getters.allFiles)[Object.values(getters.allFiles).length - 1],
//   activeFile: (state) => state.activeFile,
//   activeFileDetails: (state) => state.files[state.activeFile],
//   firstFileCreated: (state) => state.firstFileCreated,
// };

// const mutations = {
//   [types.CHANGE_ACTIVE_FILE](state, id) {
//     state.activeFile = id;
//   },
//   [types.ADD_NEW_FILE](state, { id, data }) {
//     Vue.set(state.files, id, data);
//   },
//   [types.DELETE_FILE](state, id) {
//     Vue.delete(state.files, id);
//   },
//   [types.UPDATE_FILE](state, {id, key, value}) {
//     Vue.set(state.files[id], key, value);
//   },
//   firstFileCreatedConsumed(state) {
//     state.firstFileCreated = true;
//   }
// };

// const actions = {
//   changeActiveFile({commit}, id) {
//     commit(types.CHANGE_ACTIVE_FILE, id);
//   },
//   addNewFile({commit}, { active, data }) {
//     const id = shortid.generate();
//     commit(types.ADD_NEW_FILE, {
//       id,
//       data
//     });
//     if (active) commit(types.CHANGE_ACTIVE_FILE, id);
//   },
//   deleteFile({commit, state, getters}) {
//     const id = state.activeFile;
//     const files = getters.allFiles;
//     if (files.length == 0) {
//       console.log("can't perform this operation.");
//       return;
//     }
//     commit(types.DELETE_FILE, id);
//     commit(types.CHANGE_ACTIVE_FILE, files.length == 1 ? "" : getters.latestFile.id);
//   },
//   updateFile({commit}, data) {
//     commit(types.UPDATE_FILE, data);
//   },
//   createFirstDefaultFile({commit}) {
//     const id = shortid.generate();
//     const data = {
//       "title":"ملف جديد",
//       "content": "# السلام عليكم و رحمة الله تعالى و بركاته\n\nمحرر ماركداون عربي مبني باستخدام إطار العمل [vueJs](https://vuejs.org). كيف تقوم بإستخدام المحرر:\n\n- قم بكتابة بعض كود ماركداون على الجهة اليمنى\n- شاهد النتيجة على الجهة اليسرى\n- و هـآ نحن ذا\n\n## المميزات\n\n- استيراد ملفات ماركداون من جهازك\n- استيراد ملف html و تحويله إلى كود markdown\n- تصدير الملفات بعدة صيغ مختلفة markdown, html, styled html.\n\n\n```js\nconst add = (a,b) => a + b\nconsole.log(add(5,5)) // 10\n```",
//     }
//     commit(types.ADD_NEW_FILE, {
//       id,
//       data
//     });
//     commit(types.CHANGE_ACTIVE_FILE, id);
//     commit("firstFileCreatedConsumed");
//   }
// };

// export default {
//   state,
//   getters,
//   actions,
//   mutations,
// }
