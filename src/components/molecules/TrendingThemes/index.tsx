import TrendingThemesItem from "../../atoms/TrendingThemesItem";

import style from "./style.module.scss";

export function TrendingThemes() {
  return (
    <div className={style.trendingContainer}>
      <p>Temas em destaque</p>
      <div className={style.trendingContent}>
        <TrendingThemesItem theme="Drama" postsQuantity={1200000} />
        <hr />
        <TrendingThemesItem theme="Romance" postsQuantity={1000000} />
        <hr />
        <TrendingThemesItem theme="Terror" postsQuantity={140000} />
        <hr />
        <TrendingThemesItem theme="Ação" postsQuantity={40000} />
        <hr />
        <TrendingThemesItem theme="Aventura" postsQuantity={4000} />
      </div>
    </div>
  );
}
