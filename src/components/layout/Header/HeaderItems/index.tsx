import style from './style.module.scss';

export default function HeaderItems() {
  return (
    <div className={style.header__items}>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Contact</a>
    </div>
  )
}
