import { uploadImage } from "@/apis/uploadApi"

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
        this.ImageHook()
    }
    private ImageHook(){
        this.editor.removeHook('addImageBlobHook')

        this.editor.addHook('addImageBlobHook',async (blob:any,callback) => {
            const form = new FormData();
            form.append('file',blob,blob.name);
            const response = await uploadImage(form);

            callback(response.result.url,blob.name)
        })
    }
}