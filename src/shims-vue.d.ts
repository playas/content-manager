declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

interface IEditorItem {
  id: string
  title: string
  type: EditorType
}

const EditorType = {
  IMAGE: 'image',
  TEXT: 'text',
}
