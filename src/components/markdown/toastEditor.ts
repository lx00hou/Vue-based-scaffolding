export default class {
    editor: toastui.Editor
    constructor(el: string, initialValue: string, public height: string) {
        this.editor = new toastui.Editor({
            el: document.querySelector(el),
            initialEditType: "markdown",
            previewStyle: 'vertical',
            height: height,
            initialValue: initialValue
        })
        this.editor.getMarkdown()
    }
}