import style from './style.module.scss';

interface LogoProps {
    type?: 'full' | 'simple';
    size?: 'sm' | 'md' | 'lg';
}

export default function Logo( {size = 'sm', type = 'full'} : LogoProps ) {
  return (
    <div className={`${style.container} ${style['gap__'+size]}`}>
        <img 
            src={'/logo.svg'} 
            alt="logo"
            className={style['img__' + size]}
        />
        { type === 'full' && 
            <span
                className={style['text__' + size]}
            >
                fireplace
            </span>
        }
    </div>
  )
}
