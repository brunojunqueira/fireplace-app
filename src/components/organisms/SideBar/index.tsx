import SearchBar from '../../molecules/SearchBar';
import { TrendingThemes } from '../../molecules/TrendingThemes';
import RecomendedAuthors from '../../molecules/RecomendedAuthors';

import style from './style.module.scss';

export default function SideBar() {
  return (
    <div className={style.container}>
      <SearchBar/>

      <TrendingThemes />

      <RecomendedAuthors />
    </div>
  )
}
