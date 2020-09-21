<template>
  <div class="editor-menu">
    <h1>{{ selectedItem.title }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'EditorMenu',
  computed: {
    selectedItem: {
      get(): IEditorItem | void {
        return this.$store.getters['editor/selectedItem']
      },
    },
  },
})
export default class EditorMenu extends Vue {}
</script>

<style scoped lang="scss">
.editor-menu {
  background-color: #fff;
  padding: 16px;
  height: 100%;
  width: 400px;
  border-left: 2px solid #eee;
}
</style>
