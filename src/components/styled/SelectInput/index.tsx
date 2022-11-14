import Select, { SelectInstance } from 'react-select'
import { forwardRef } from "react";

import style from './style.module.scss'
import selectStyle from './selectStyle'

interface SelectInputProps{
    options?: { value: string, label: string } []
    label?: string;
    alert?: string;
}

const SelectInput = forwardRef<SelectInstance, SelectInputProps>(({ options, label, alert, ...rest }, ref) => {
    
    return (
        <div className={style.container} {...rest}>
            <Select
                isDisabled={ !options }
                placeholder={label}
                defaultValue={ !label && options?[0] : undefined }
                styles={selectStyle} 
                options={options} 
                ref={ref}
            />
            <span className={style.alert}>{alert}</span>
        </div>
        
    )
});

export default SelectInput;