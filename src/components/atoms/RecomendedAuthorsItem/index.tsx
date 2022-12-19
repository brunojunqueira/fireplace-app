import parseDecValue from "../../../utils/parseDecValue";
import Button from "../Button";
import style from "./style.module.scss";

interface RecomendedAuthorsItemProps {
  authorImage: string;
  authorName: string;
  readers: number;
}

export default function RecomendedAuthorsItem({
  authorImage,
  authorName,
  readers,
}: RecomendedAuthorsItemProps) {
  return (
    <div className={style.trendingItem}>
      <div className={style.authorField}>
        <img src={authorImage} className={style.authorImage} />
        <div className={style.profileField}>
          <span className={style.authorName}>{authorName}</span>
          <span className={style.readers}>
            {parseDecValue(readers)} leitores
          </span>
        </div>
      </div>
      <div className={style.followField}>
        <Button className={style.followButton}>Seguir</Button>
        <span>Ignorar</span>
      </div>
    </div>
  );
}
