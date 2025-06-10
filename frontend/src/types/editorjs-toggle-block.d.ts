declare module 'editorjs-toggle-block' {
  import { BlockTool, BlockToolConstructorOptions } from '@editorjs/editorjs'

  export default class ToggleBlock implements BlockTool {
    constructor(options: BlockToolConstructorOptions)
    static get toolbox(): {
      title: string
      icon: string
    }
    render(): HTMLElement
    save(blockContent: HTMLElement): any
    static get sanitize(): any
  }
}
