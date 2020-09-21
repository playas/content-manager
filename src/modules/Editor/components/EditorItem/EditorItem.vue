<template>
  <div class="editor-item" @click="$emit('click', id)">
    {{ title }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'EditorItem',
})
export default class EditorItem extends Vue {
  @Prop() readonly title!: string
  @Prop() readonly id!: string
}
</script>

<style scoped lang="scss">
.editor-item {
  height: 60px;
  background-color: #fff;
  padding: 16px;
  border: 2px dashed #c8c8c8;
  border-radius: 4px;
  margin-bottom: 4px;
}
</style>
