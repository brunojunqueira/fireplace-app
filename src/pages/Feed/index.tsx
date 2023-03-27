import CreatePost from "../../components/molecules/CreatePost";
import style from "./style.module.scss";

export default function Feed() {
  return (
    <div className={style.page}>
      <CreatePost />
    </div>
  );
}
