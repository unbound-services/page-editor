import React from 'react';
import SelectInput from '../../input-slot/select-input/input-slot-select-input';

const Separator = props => {
    const { displayType="dark", editing=true } = props
    const displayOptions = [
        "dark",
        "light"
    ]
    const TagName = displayType;
    if(editing) {
        return (
            <div>
                <div className="options">
                    <SelectInput
                        sectionName="displayType"
                        options={displayOptions}
                        current={displayType}
                        label="Display Type"
                    />
                </div>
                <div className="preview">
                    <hr className={`separator-${displayType}`} />
                </div>
            </div>
        )
    } else {
       return <hr className={`separator-${displayType}`} />
    }
}

export default Separator