import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({ namespaced: true, name: 'editor' })
export default class EditorStore extends VuexModule {
  items: IEditorItem[] = [
    {
      id: '1',
      type: 'text',
      title: 'Item 1',
    },
    {
      id: '2',
      title: 'Item 2',
      type: 'text',
    },
    {
      id: '4',
      title: 'Item 3',
      type: 'text',
    },
    {
      id: '5',
      title: 'Item 4',
      type: 'text',
    },
  ]

  selectedItemId: string | null = null

  @Mutation
  setItems(items: IEditorItem[]): void {
    this.items = items
  }

  @Mutation
  createItem(): void {
    this.items = [
      ...this.items,
      { id: Date.now().toString(), title: 'New Item', type: 'text' },
    ]
  }

  @Mutation
  selectItem(id: string): void {
    this.selectedItemId = id
  }

  get selectedItem(): IEditorItem | void {
    return this.items.find((item) => item.id === this.selectedItemId)
  }
}
