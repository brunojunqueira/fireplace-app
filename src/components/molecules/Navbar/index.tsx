import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavItem from '../../atoms/NavItem';
import style from './style.module.scss';

interface NavbarProps{

}

export default function Navbar({}: NavbarProps) {

  const location = useLocation();

  const [selectedTab, setSelectedTab] = useState<string>('/feed');

  useEffect(() => {
    setSelectedTab(() => location.pathname);
  }, [location.pathname]);

  return (
    <div className={style.header__items}>
        <NavItem destination='/' selected={selectedTab === '/'} label='Feed' icon='material-symbols:home'/>
        <NavItem destination='/stories' selected={selectedTab === '/stories'} label='Stories' icon='material-symbols:history-edu'/>
        <NavItem destination='/books' selected={selectedTab === '/books'} label='Books' icon='material-symbols:book'/>
    </div>
  )
}
