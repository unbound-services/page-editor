import React from 'react';

class CancellationTable extends React.Component {

    constructor(props){
        super(props)
        this.state ={loading:false}
    }

    render(){

        const { editing, previewing } = this.props;


        if(editing) {
            return <div className='static-component-preview'>-- Trip Policy Cancellation Table --</div>
        } else if(previewing) {
            return <div className='static-component-preview'>-- Trip Policy Cancellation Table Preview --</div>
        } else {
            return <div>{`@@@PHP-COMP|trip-policy-table@@@`}</div>
        }
    }
}

export default CancellationTable;