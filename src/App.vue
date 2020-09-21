<template>
  <div class="app-container">
    <SideBarMenu />
    <EditorContent />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import EditorContent from './modules/Editor/components/EditorContent/EditorContent.vue'
import SideBarMenu from './components/SideBarMenu/SideBarMenu.vue'

@Component({ name: 'app', components: { EditorContent, SideBarMenu } })
export default class App extends Vue {}
</script>

<style scoped lang="scss">
.app-container {
  display: flex;
  flex: 1;
}
</style>
