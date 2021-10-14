import React, { useState } from 'react';
import SlotSection from '../../input-slot/slot-section/content-editor-input-slot-slot-section';
import StringInput from '../../input-slot/string-input/content-editor-input-slot-string-input';
import NumberSelectInput from '../../input-slot/number-select-input/content-editor-input-slot-number-select-input';
import SelectInput from '../../input-slot/select-input/content-editor-input-slot-select-input';
import FileInput from '../../input-slot/file-input/content-editor-input-slot-file-input';
import RichTextInput from '../../input-slot/rich-text-input/content-editor-input-slot-rich-text-input';









const IconSection = (props) => {
    const { title='', iconSlots=4, listStyle='horizontal' } = props;
    let Icon = icon;
    let VerticalIcon = verticalIcon;
    const iconOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const styleOptions = ['horizontal', 'vertical'];
    let icons = [];


    for(var i=0; i<iconSlots; i++){
         let slotName = 'icon'+i;

        if(listStyle=='horizontal'){
            console.log('horizontal')
            icons.push(<SlotSection sectionName={slotName} onRender={props => <Icon {...props} />} />);
        }else if(listStyle=='vertical'){
            console.log('vertical')
            icons.push(<SlotSection sectionName={slotName} onRender={props => <VerticalIcon {...props} />} />);
        } 
        
    }


    return <React.Fragment>
        <section className="section">
            <div className="section__inner-div">
                <h1 className="section__h1"><StringInput sectionName="title" /></h1>
                <div className="feature-list">
                    {icons}
                </div>
            </div>
        </section>
        <NumberSelectInput hidden={true} label='Number of Icons: ' sectionName='iconSlots' current={iconSlots} />
        <SelectInput hidden={true} label='Icon List Style: ' sectionName='listStyle' options={styleOptions} current={listStyle} />
    </React.Fragment>
}


const icon = (props) => {
    const { iconTitle='', desc='', icon='/img/components/icons/icon-ribbon.png'  } = props;

    return <article className="feature feature-list__item">
      <img src={icon} className="feature__icon" />
      <div className="feature__title-container">
        <h3 className="feature__title"><StringInput sectionName="iconTitle" /></h3>
      </div>
        <RichTextInput className="feature__description" sectionName="desc" />
        <FileInput label='Icon Image: ' hidden={true} sectionName='icon' />
    </article>
}




const verticalIcon = (props) => {
    const { iconTitle='', desc='', icon='/img/components/icons/icon-ribbon.png'  } = props;

    return <React.Fragment>
    <article className="vertical-feature vertical-feature-list__item">
      <img src={icon} className="vertical-feature__icon" />
      <div className="vertical-feature__content-container">
        <h3 className="vertical-feature__title"><StringInput sectionName="iconTitle" /></h3>
        <RichTextInput className="vertical-feature__description" inputClass="vertical-feature__description" sectionName="desc" tagname='div'/>
      </div>
    </article>
    
    <FileInput label='Icon Image: ' hidden={true} sectionName='icon' />
    </React.Fragment>

}

export default IconSection