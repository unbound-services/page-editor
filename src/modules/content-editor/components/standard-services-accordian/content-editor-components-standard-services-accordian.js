import React from 'react';
import AjaxContentPreview from '../../input-slot/ajax-preview/content-editor-input-slot-ajax-preview';



class StandardServicesAccordian extends React.Component {

    constructor(props){
        super(props)
        this.state ={loading:false}
    }

    render(){

        const { editing, previewing } = this.props;

        const shortcode = `@@@PHP-COMP|standard-services-accordian@@@`;

        if(editing) {
            return <div className='static-component-preview'>-- Standard Services Accordian --</div>
        } else if(previewing) {
            return <div className='static-component-preview'><AjaxContentPreview 
            shortcode={shortcode}
            previewName={"Contact Form"} /></div>
        } else {
            return <div>{shortcode}</div>
        }
    }
}

export default StandardServicesAccordian;