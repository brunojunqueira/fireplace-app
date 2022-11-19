import { forwardRef } from "react";

import style from './style.module.scss'

interface InputTextProps{
    label?: string;
    alert?: string;
}

const TextInput = forwardRef<HTMLInputElement, InputTextProps>(({ label, alert, ...rest }, ref) => {
    return (
        <div className={style.container} {...rest}>
            <span className={style.alert}>{alert}</span>
            <input
                ref={ref} 
                type="text" 
                placeholder="placeholer"
            />
            <label>{label}</label>
        </div>
        
    )
});

export default TextInput;