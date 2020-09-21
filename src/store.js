import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import editorStore from '@/modules/Editor/store/editorStore.ts'

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    editor: editorStore,
  },
})
