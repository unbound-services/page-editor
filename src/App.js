import PageEditorApp from './lib/modules/page-editor/page-editor-app'
import "./sass/app.scss";
import {StringInput} from './lib/index';


let NewEditor = new PageEditorApp()


const onSave = (data) => {
    console.log("data in onSave", data)
}


// const TestComponent = ({text="test!"}) => {
//     return <StringInput sectionName="text" />
// }

// const testList = {
//     "test-component": {displayName: "Test Component" , comp: TestComponent}
// }

// NewEditor.addComponents(TestComponent, "test-component", "Test Component");


NewEditor.initializeApp(document.body, onSave)