import { uploadImage } from "@/apis/uploadApi"

export default class {
    editor: toastui.Editor
    isFullscreen:boolean = false
    constructor(el: string, initialValue: string, public height: string) {
        this.editor = new toastui.Editor({
            el: document.querySelector(el),
            initialEditType: "markdown",
            previewStyle: 'vertical',
            height: height,
            initialValue: initialValue,
            toolbarItems: this.toolbar()
        })
        this.editor.getMarkdown()
        this.ImageHook()
    }

    private toolbar() {
        return [
            ['heading', 'bold', 'italic', 'strike'],
            ['hr', 'quote'],
            ['ul', 'ol', 'task', 'indent', 'outdent'],
            ['table', 'image', 'link'],
            ['code', 'codeblock'],
            [{
                el: this.fullscreen(),
                command: 'fullscreen',
                tooltip: 'fullscreen'
            }]
        ]
    }
    private fullscreen() {
        const button = document.createElement('button') as HTMLButtonElement
        button.innerHTML = '全屏'
        button.style.margin = '0'
        button.addEventListener('click', () => {
            this.editor.setHeight('100vh')
            this.toggleFulllscreen()
        })
        document.documentElement.addEventListener('keyup',(event:KeyboardEvent)=> {
            if(event.key === 'Escape' && this.isFullscreen){
                this.toggleFulllscreen()
            }
        })
        return button
    }

    private toggleFulllscreen(){
        // 全屏 <-> 缩放
        const ui = document.querySelector('.toastui-editor-defaultUI') as HTMLDivElement
        ui.classList.toggle('fullscreen')
        this.isFullscreen = !this.isFullscreen
        if(!this.isFullscreen){
            this.editor.setHeight(this.height)
        }else this.editor.setHeight('100vh')
    }

    private ImageHook() {
        this.editor.removeHook('addImageBlobHook')

        this.editor.addHook('addImageBlobHook', async (blob: any, callback) => {
            const form = new FormData();
            form.append('file', blob, blob.name);
            const response = await uploadImage(form);

            callback(response.result.url, blob.name)
        })
    }
}