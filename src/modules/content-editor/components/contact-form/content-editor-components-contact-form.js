import React from 'react';
import AjaxContentPreview from '../../input-slot/ajax-preview/content-editor-input-slot-ajax-preview';


class ContactForm extends React.Component {

    constructor(props){
        super(props)
        this.state ={loading:false}
    }

    render(){

        const { editing, previewing } = this.props;

        const shortcode = `@@@PHP-COMP|contact-form@@@`;

        if(editing) {
            return <div className='static-component-preview'>-- Contact Form --</div>
        } else if(previewing) {
            return <div className='static-component-preview'><AjaxContentPreview 
                shortcode={shortcode}
                previewName={"Contact Form"} /></div>
        } else {
            return <div>{shortcode}</div>
        }
    }
}

export default ContactForm;