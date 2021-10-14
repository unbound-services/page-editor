import React from 'react';

class DistilledFAQ extends React.Component {

    constructor(props){
        super(props)
        this.state ={loading:false}
    }

    render(){

        const { editing, previewing } = this.props;


        if(editing) {
            return <div className='static-component-preview'>-- Distilled FAQ --</div>
        } else if(previewing) {
            return <div className='static-component-preview'>-- Distilled FAQ Preview --</div>
        } else {
            return <div>{`@@@PHP-COMP|distilled-faq@@@`}</div>
        }
    }
}

export default DistilledFAQ;