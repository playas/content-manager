<template>
  <div class="sidebar-menu"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({ name: 'SideBarMenu' })
export default class ContentEditor extends Vue {}
</script>

<style scoped lang="scss">
.sidebar-menu {
  width: 300px;
  background-color: #435365;
}
</style>
