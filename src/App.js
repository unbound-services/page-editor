import PageEditorApp from './lib/modules/page-editor/page-editor-app'
import "./sass/app.scss";



let NewEditor = new PageEditorApp()


const onSave = (data) => {
    console.log("data in onSave", data)
}
NewEditor.initializeApp(document.body, onSave)


