import React, { useContext } from 'react';
import ReactDom from 'react-dom';
import ReactServer  from 'react-dom/server.browser';

import EditorContext, { stateDeeper, incState } from './modules/content-editor/content-editor-editor-context.js';
import ContentSection from './modules/content-editor/input-slot/content-section/content-editor-input-slot-content-section.js';

import Drawer from './modules/common/drawer/common-drawer.js';

import agent from 'superagent'

import componentList from './page-editor-components'; 



class PageEditor extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            editorState: { children: []},
						drawerOpen: false,
                        preview: false,
                        title: "",
                        name: "",
                        domain: "",
                        slug: "",
                        status:"draft",
                        meta: "",
                        changes: false,
                        advancedOpen:false,
                        pageEditorDrawerOpen: false,
        }

        if(window.pageData) this.state.editorState = window.pageData;

        if(window.pageName)  this.state.name = window.pageName;
        if(window.pageSlug) this.state.slug = window.pageSlug;
        if(window.pageDomain) this.state.domain = window.pageDomain;
        if(window.pageStatus) this.state.status = window.pageStatus;
        if(window.pageMeta) this.state.meta = window.pageMeta;
        if(window.pageTitle) this.state.title = window.pageTitle;
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


        const onSave = ()=>{

            const pageMarkup = ReactServer.renderToString(
                <EditorContext.Provider value={{setState: stateDeeper("editorState", this.state,  baseSetState),
                    editorState:demoState,
                    componentList,
                    editing: false,
                    previewing: false}}>
                    <ContentSection isRoot />
                </EditorContext.Provider>
            );
            const csrf = document.head.querySelector("[name~=csrf-token][content]").content;

			// submit the form
            const pageState = this.state.editorState;

            const data = {pageState,
                pageMarkup,
                domain: this.state.domain,
                slug: this.state.slug,
                name: this.state.name,
                status: this.state.status,
                headerMeta: this.state.meta,
                title: this.state.title,}
            
            agent.post(`/pages/${window.pageIndex}`, data)
                .set('X-CSRF-TOKEN',csrf)
                .then((res)=>{
                    this.setState({ changes: false})
                    alert("Changes Saved")

            });
        }

        const onChange = (what) => (event) =>{
            this.setState( {[what]: event.target.value, changes:true})
        }

        const togglePageDrawer = () => {
            this.setState( {pageEditorDrawerOpen: !this.state.pageEditorDrawerOpen});
        }

        const getFullUrl = ()=> {
            const { domain, slug, title } = this.state;
            let useDomain = "nodomain"// domain ? window.globalDomains[domain] : window.globalDomains["primary"];
            return `${useDomain}\/${slug}`
        }

        let previewDisclaimer = null;
        if(preview) {
            previewDisclaimer = <strong>Note: The header is not displayed in preview mode</strong>
        }

        return <div>
                <Drawer open={this.state.pageEditorDrawerOpen} onClose={togglePageDrawer}>
                    <div className='page-editor__drawer-contents'>
                    <div className='pe-drawer-contents__option'>
                        <label>Page Name:<br />
                            <input name='name' onChange={onChange("name")} value={this.state.name} />
                            <div style={{fontSize:"0.8em", fontColor:"#dddddd", paddingTop:4}}>Page Name will default to be the title, but you can set the title separately bellow if the name is needed for internal purposes </div>
                        </label>
                    </div>
                    <div className='pe-drawer-contents__option'>
                        <label>Page Domain (url):
                                <select name="domain" className="base-form__select" onChange={onChange("domain")} value={this.state.domain}>
                                       {//<option value="primary">{window.globalDomains.primary}</option>
                                        //<option value="chauffeured">{window.globalDomains.chauffeured}</option>
                                        //<option value="chartered">{window.globalDomains.chartered}</option>
                                        //<option value="distilled">{window.globalDomains.distilled}</option>
                                       }
                                </select>
                        </label>
                    </div>
                    <div className='pe-drawer-contents__option'>
                        <label>Page Status (drafts are only visible to admins):
                                <select name="status" className="base-form__select" onChange={onChange("status")} value={this.state.status}>
                                        <option value="draft">Draft</option>
                                        <option value="published">Published</option>
                                </select>
                        </label>
                    </div>
                    <div className='pe-drawer-contents__option'>
                        <label>Page Url (e.g. meet-the-family ):<br />
                            <input name='slug' onChange={onChange("slug")} value={this.state.slug} />
                            <div style={{fontSize:"0.8em", fontColor:"#dddddd", paddingTop:4}}>Set to "/" to make this a homepage for {this.state.domain} </div>
                        </label>
                    </div>
                    {/* Page Meta by request of the client */}
                    <div className='pe-drawer-contents__option'>
                        <label>Page Title:<br />
                            <input name='title' onChange={onChange("title")} value={this.state.title} />
                            <div style={{fontSize:"0.8em", fontColor:"#dddddd", paddingTop:4}}>The Page name will be used if this is left blank </div>
                        </label>
                    </div>
                    <div className='pe-drawer-contents__option'>
                        <label>Page Header Meta Tags (PROCEED AT YOUR OWN RISK):<br />
                            <textarea style={{width:"100%",minHeight:200}} name='header-meta' onChange={onChange("meta")} value={this.state.meta} />
                            <div style={{fontSize:"0.8em", fontColor:"#dddddd", paddingTop:4}}>By default the system provides a viewport, ritle, charset, and csrf-token meta tags.  Anything in the textbox above will appear in the &lt;Head&gt;</div>
                        </label>
                    </div>
                    <div className='pe-drawer-contents__option'>
                        Full URL:<a target="_blank" href={`http://${getFullUrl()}`}><br />
                        {getFullUrl()}</a></div>
                    </div>
                </Drawer>
                <div className='page-editor__menu'>
                    <button className='page-editor__button' onClick={e=>{e.preventDefault();e.stopPropagation(); this.setState({preview: !preview});}}>{!preview ? 'Preview' : 'Edit'}</button>
                    <button className='page-editor__button' onClick={onSave}>Save Changes {this.state.changes ? "*" : ""} </button>
                    <button className='page-editor__button' onClick={togglePageDrawer}>More Page Options</button>
                    Editing: <a target="_blank" href={`http://${getFullUrl()}`}>{getFullUrl()}</a>
                </div>
                {previewDisclaimer}
                <hr />
                <EditorContext.Provider value={{setState: stateDeeper("editorState", this.state,  baseSetState),
                    editorState:demoState,
                    componentList,
                    editing: !preview,
                    previewing: preview}}>
                    <ContentSection isRoot />
                </EditorContext.Provider>
            </div>
    }
}


export {PageEditor};