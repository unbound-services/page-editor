import React from 'react';
import ReactServer  from 'react-dom/server.browser';

import EditorContext, { stateDeeper } from './modules/content-editor/content-editor-editor-context.js';
import ContentSection from './modules/content-editor/input-slot/content-section/content-editor-input-slot-content-section.js';



class PageEditor extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            editorState: { children: []},
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


        const saveData = ()=>{

            const pageMarkup = ReactServer.renderToString(
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
                    <button className='page-editor__button' onClick={saveData}>Save Changes {this.state.changes ? "*" : ""} </button>
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