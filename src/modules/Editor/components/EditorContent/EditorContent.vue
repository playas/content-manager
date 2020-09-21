<template>
  <div class="content-editor">
    <div class="content-wrapper">
      <div class="editable-content">
        <div class="editable-content__items">
          <draggable v-model="editorItems">
            <transition-group name="flip-list" tag="div">
              <EditorItem
                v-for="item in editorItems"
                :key="item.id"
                :id="item.id"
                :title="item.title"
                @click="selectItem"
              />
            </transition-group>
          </draggable>
        </div>
        <div class="editable-content__actions">
          <el-button @click="createEditorItem">Добавить</el-button>
        </div>
      </div>
    </div>
    <transition name="slide-fade">
      <EditorMenu class="editor-menu" v-if="selectedItem" />
    </transition>
  </div>
</template>

<script lang="ts">
import draggable from 'vuedraggable'
import { Component, Vue } from 'vue-property-decorator'

import EditorItem from '@/modules/Editor/components/EditorItem/EditorItem.vue'
import EditorMenu from '@/modules/Editor/components/EditorMenu/EditorMenu.vue'

@Component({
  name: 'EditorContent',
  components: {
    draggable,
    EditorItem,
    EditorMenu,
  },
  computed: {
    editorItems: {
      get(): IEditorItem[] {
        return this.$store.state.editor.items
      },
      set(items: IEditorItem[]) {
        this.$store.commit('editor/setItems', items)
      },
    },
    selectedItem: {
      get(): IEditorItem {
        return this.$store.getters['editor/selectedItem']
      },
    },
  },
})
export default class EditorContent extends Vue {
  createEditorItem(): void {
    this.$store.commit('editor/createItem')
  }

  selectItem(id: string): void {
    this.$store.commit('editor/selectItem', id)
  }
}
</script>

<style scoped lang="scss">
.content-editor {
  display: flex;
  flex: 1;
  background-color: #f3f3f3;

  .content-wrapper {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: stretch;

    .editable-content {
      margin: 32px 0;
      background-color: #fff;
      width: 300px;
      border-radius: 16px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &__items {
        flex: 1;
        overflow: auto;
        margin-bottom: 64px;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
        border-top: 2px solid #eee;
        border-bottom: 2px solid #eee;
        padding: 16px;
      }

      &__actions {
        & > button {
          width: 100%;
        }
      }
    }
  }

  .flip-list-move {
    transition: transform 0.3s;
  }

  .editor-menu {
    position: fixed;
    right: 0;
    top: 0;
  }

  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    right: -400px;
  }
}
</style>
