import React from 'react';
import "./common-drawer.scss";

class Drawer extends React.Component {


	render() {
		const { props, state } = this;

		const { onClose, children, open=false, innerClass  } = props;

		// add the contents in
		let contents=null;
		let screen = null;
		let drawerClass, drawerInnerClass = '';
		if(innerClass){
			drawerInnerClass = innerClass;
		}
		if(open) {
			contents = children;
			drawerClass = 'open'
			screen = <div className='common-drawer-outer' onClick={onClose}>
			</div>
		}

		return <React.Fragment>
			{screen}
			<div className={`${drawerInnerClass} common-drawer-inner ${drawerClass}`} >
				{contents}
			</div>
		</React.Fragment>
	}
}

export default Drawer;