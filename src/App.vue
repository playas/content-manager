<template>
  <div class="app-container">
    <SideBarMenu />
    <ContentEditor />
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import ContentEditor from './components/ContentEditor/ContentEditor'
import SideBarMenu from './components/SideBarMenu/SideBarMenu'

@Component({ name: 'app', components: { ContentEditor, SideBarMenu } })
export default class App extends Vue {}
</script>

<style scoped lang="scss">
.app-container {
  display: flex;
  flex: 1;
}
</style>
