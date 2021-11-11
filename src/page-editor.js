import React from 'react';
import render from 'preact-render-to-string';

import EditorContext, { stateDeeper } from './modules/content-editor/content-editor-editor-context.js';
import ContentSection from './modules/input-slot/content-section/input-slot-content-section.js';



class PageEditor extends React.Component {

    constructor(props){
        super(props);
        console.log("props: ", props)
        this.state = {
            editorState: props.pageData,
            preview: false,
            changes: false,
            advancedOpen:false,
            pageEditorDrawerOpen: false,
        }

        if(window.pageData) this.state.editorState = window.pageData;
    }

    componentDidMount(){
        // attach that to the window
        window.addEventListener("beforeunload", (e) => {
            if(this.state.changes) {
                var confirmationMessage = 'It looks like you have been editing something. '
                                    + 'If you leave before saving, your changes will be lost.';
        
                (e || window.event).returnValue = confirmationMessage; //Gecko + IE

                return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
            }
        });
    }

    render(){
        console.log('state',this.state);
        const demoState = this.state.editorState;
        const { preview } = this.state;

        const baseSetState = (obj) => {
            this.setState({...obj, changes: true})
        }


        const saveData = () => {
            if (this.props.onSave === false) {
                console.log("No onSave function connected to app")
                return
            }

            console.log("onSave: ", this.props.onSave)

            const pageMarkup = render(
                <EditorContext.Provider value={{setState: stateDeeper("editorState", this.state,  baseSetState),
                    editorState:demoState,
                    componentList: this.props.componentList,
                    editing: false,
                    previewing: false}}>
                    <ContentSection isRoot />
                </EditorContext.Provider>
            );

			// submit the form
            const pageState = this.state.editorState;

            const data = {pageState,
                pageMarkup,
            }
            
            this.props.onSave(data)
        }

        return <div>
                <div className='page-editor__menu'>
                    <button className='page-editor__button' onClick={e=>{e.preventDefault();e.stopPropagation(); this.setState({preview: !preview});}}>{!preview ? 'Preview' : 'Edit'}</button>
                    <button className='page-editor__button' onClick={saveData} data-testid="save-page-button">Save Changes {this.state.changes ? "*" : ""} </button>
                </div>
                <hr />
                <EditorContext.Provider value={{setState: stateDeeper("editorState", this.state,  baseSetState),
                    editorState:demoState,
                    componentList: this.props.componentList,
                    editing: !preview,
                    previewing: preview}}>
                    <ContentSection isRoot />
                </EditorContext.Provider>
            </div>
    }
}


export {PageEditor};