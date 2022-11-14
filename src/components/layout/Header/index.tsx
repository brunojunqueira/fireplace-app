import { useEffect, useState } from 'react';
import Logo from '../../styled/Logo';
import HeaderItems from './HeaderItems';
import style from './style.module.scss';
import UserMenu from './UserMenu';

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
      <Logo size='sm'/>
      <HeaderItems />
      <UserMenu />
    </div>
  )
}
