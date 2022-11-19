import { Icon } from "@iconify/react";
import { useState } from "react";

import { useTranslation } from 'react-i18next'
import { useNavigate } from "react-router-dom";

import style from './style.module.scss';

interface SearchBarProps {

}

export default function SearchBar({}: SearchBarProps){

    const navigate = useNavigate();

    const { t } = useTranslation();

    const [inputValue, setInputValue] = useState<string>('');

    const [focused, setFocused] = useState(false);

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            search();
        }
    }

    const search = () => {
        navigate('/search?q=' + inputValue);
    }

    return (
        <div className={style.search}>
            <input 
                onFocus={()=>setFocused(true)} 
                onBlur={()=>setFocused(false)} 
                className={style.search__input}
                placeholder={'Buscar no fireplace'}
                value={inputValue}
                onChange={(e)=>setInputValue(e.target.value)}
                onKeyDown={ (e)=>handleKeyDown(e)}
            />
            <Icon 
                style={{color: focused ? '#333' : '#eee', cursor: 'pointer' }} 
                icon={'material-symbols:search'} 
                color={'#333'}
                fontSize={22}
                onClick={()=>search()}
            />
        </div>
    )
};
