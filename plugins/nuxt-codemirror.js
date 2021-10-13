import Vue from 'vue';
import VueCodemirror from 'vue-codemirror';

// codemirror language
import 'codemirror/mode/gfm/gfm';
import 'codemirror/mode/javascript/javascript';

// codemirror active-line.js
import 'codemirror/addon/selection/active-line.js';
import 'codemirror/addon/scroll/simplescrollbars.js';
import 'codemirror/addon/edit/continuelist.js';

// codemirror keymap
import 'codemirror/keymap/sublime';

Vue.use(VueCodemirror);
