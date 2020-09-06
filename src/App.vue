<template>
  <div class="app">
    <SideBar/>
    <ContentEditor/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import SideBar from "@/components/SideBar/SideBar.vue";
import ContentEditor from "@/components/ContentEditor/ContentEditor.vue";

@Options({
  components: {
    SideBar,
    ContentEditor
  },
})
export default class App extends Vue {}
</script>

<style scoped>
.app {
  width: 100%;
  display: flex;
  text-align: center;
  color: #2c3e50;
}
</style>
