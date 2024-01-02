import { defineStore } from 'pinia'
import ShortUniqueId from 'short-unique-id';

interface File {
  id: string;
  data: {
    title: string;
    content: string;
  };
}

interface FileState {
  files: File[] | [];
  activeFile: string;
  isFirstFileCreated: boolean;
}

export const useFileStore = defineStore('file', {
  state: (): FileState => ({
    files: [],
    activeFile: "",
    isFirstFileCreated: false,
  }),
  getters: {
    allFiles: (state) => state.files,
    latestFile: (state) => state.files[state.files.length - 1],
    getActiveFile: (state) => state.activeFile,
    getActiveFileDetails: (state) => state.files[state.activeFile],
    getIsFirstFileCreated: (state) => state.isFirstFileCreated,
  },
  actions: {
    createFirstDefaultFile() {
      const { rnd } = new ShortUniqueId({ length: 5 });
      const id = rnd();
      const data = {
        "title": "ملف جديد",
        "content": "# السلام عليكم و رحمة الله تعالى و بركاته\n\nمحرر ماركداون عربي مبني باستخدام إطار العمل [vueJs](https://vuejs.org). كيف تقوم بإستخدام المحرر:\n\n- قم بكتابة بعض كود ماركداون على الجهة اليمنى\n- شاهد النتيجة على الجهة اليسرى\n- و هـآ نحن ذا\n\n## المميزات\n\n- استيراد ملفات ماركداون من جهازك\n- استيراد ملف html و تحويله إلى كود markdown\n- تصدير الملفات بعدة صيغ مختلفة markdown, html, styled html.\n\n\n```js\nconst add = (a,b) => a + b\nconsole.log(add(5,5)) // 10\n```",
      };
      this.files.push({ id, data });
      this.activeFile = id;
      this.isFirstFileCreated = true;
    },
    changeActiveFile(id: string) {
      this.activeFile = id;
    },
    addNewFile(data) {
      const { rnd } = new ShortUniqueId({ length: 5 });
      const id = rnd();

      this.files.push({ id, data });
      this.activeFile = id;
    },
    deleteFile() {
      if (this.files.length === 0) {
        console.log("can't perform this operation.");
        return;
      }
      this.files = this.files.filter(f => f.id !== this.activeFile);
      this.activeFile = this.files.length === 0 ? "" : this.latestFile.id;
    },
    updateFileTitle(data: { id: string; newValue: string }) {
      const file = this.files.find(f => f.id === data.id);
      if (file) {
        file.data.title = data.newValue;
      }
    },
  },
});
