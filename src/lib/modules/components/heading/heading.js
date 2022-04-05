import React from 'react';
import StringInput from '../../input-slot/string-input/input-slot-string-input';
import SelectInput from '../../input-slot/select-input/input-slot-select-input';

const heading = props => {
    const { headingType="h1", text="", customClass="", editing=true } = props
    const headingOptions = [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5"
    ]
    const TagName = headingType;
    if(editing) {
        return (
            <div>
                <div className="options">
                    <SelectInput
                        sectionName="headingType"
                        options={headingOptions}
                        current={headingType}
                        label="Heading Type"
                    />
                    <StringInput 
                        sectionName="text"
                        label="Heading Text"
                    />
                    <StringInput 
                        sectionName="customClass"
                        label="Custom CSS Class"
                    />
                </div>
                <div className="preview">
                    <TagName className={customClass}>{text}</TagName>
                </div>
            </div>
        )
    } else {
       return <TagName className={customClass}>{text}</TagName>
    }
}

export default heading