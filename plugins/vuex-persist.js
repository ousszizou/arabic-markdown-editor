import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({
    key: "editor-vuex",
    modules: ["files", "app", "ui"]
  }).plugin(store);
}
