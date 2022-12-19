import { useNavigate } from "react-router-dom";
import parseDecValue from "../../../utils/parseDecValue";
import style from "./style.module.scss";

interface TrendingThemesItemProps {
  theme: string;
  postsQuantity: number;
}

export default function TrendingThemesItem({
  theme,
  postsQuantity,
}: TrendingThemesItemProps) {
  const navigate = useNavigate();
  return (
    <div
      className={style.trendingItem}
      onClick={() => navigate(`/search?q=${theme}`)}
    >
      <span>{theme}</span>
      <span className={style.postQuantity}>
        {parseDecValue(postsQuantity)}
        {postsQuantity > 1000 && "+"} {postsQuantity > 1 ? "Posts" : "Post"}
      </span>
    </div>
  );
}
