import { useEffect, useState } from 'react';
import Logo from '../../atoms/Logo';
import Navbar from '../../molecules/Navbar';
import style from './style.module.scss';
import UserMenu from '../../molecules/UserMenu';

export default function Header() {

  const [isBackgroundVisible, setIsBackgroundVisible] = useState('off');

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibleBackground);
    return () => window.removeEventListener('scroll', toggleVisibleBackground);
}, []);

  function toggleVisibleBackground() {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 100) {
        setIsBackgroundVisible('on');
    } else if (scrolled <= 300) {
        setIsBackgroundVisible('off');
    }
  };

  return (
    <div className={`${style.header} ${style['background__'+isBackgroundVisible]}`}>
      <Logo size='xs'/>
      <Navbar />
      <UserMenu />
    </div>
  )
}
