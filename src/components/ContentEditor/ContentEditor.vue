<template>
  <div class="content-editor"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({ name: 'ContentEditor' })
export default class ContentEditor extends Vue {}
</script>

<style scoped lang="scss">
.content-editor {
  flex: 1;
  background-color: #e5e5e5;
}
</style>
