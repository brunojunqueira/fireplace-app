import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

import style from './style.module.scss';

interface NavItemProps {
    label: string;
    icon: string;
    destination: string;
    selected?: boolean;
}

export default function NavItem({label, icon, destination, selected, ...rest} : NavItemProps & React.HTMLAttributes<HTMLButtonElement>) {

  const navigate = useNavigate();

  return (
    <button onClick={()=>navigate(destination)} className={selected ? style.selected : style.notSelected } {...rest}>
        <Icon icon={icon} fontSize={20}/>
        <label>{label}</label>
    </button>
  )
}
