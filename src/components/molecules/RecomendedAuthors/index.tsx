import RecomendedAuthorsItem from "../../atoms/RecomendedAuthorsItem";
import style from "./style.module.scss";

export default function RecomendedAuthors() {
  return (
    <div className={style.trendingContainer}>
      <p>Autores Recomendados</p>

      <div className={style.trendingContent}>
        <RecomendedAuthorsItem
          authorImage={
            "https://www.shareicon.net/data/2016/05/26/771188_man_512x512.png"
          }
          authorName={"Fireplace"}
          readers={1471037}
        />
        <hr />
        <RecomendedAuthorsItem
          authorImage={"https://cdn-icons-png.flaticon.com/512/194/194938.png"}
          authorName={"Larissa Mercury"}
          readers={314511412}
        />
        <hr />
        <RecomendedAuthorsItem
          authorImage={
            "https://www.shareicon.net/data/2016/05/26/771203_man_512x512.png"
          }
          authorName={"Asssah Fih"}
          readers={3121}
        />
      </div>
    </div>
  );
}
