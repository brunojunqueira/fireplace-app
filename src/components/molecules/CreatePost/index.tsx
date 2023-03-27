import { useState } from "react";
import Button from "../../atoms/Button";
import TextArea from "../../atoms/TextArea";
import style from "./style.module.scss";

export default function CreatePost() {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div className={style.container}>
      <div className={style.user_field}>
        <img
          src={
            "https://img.favpng.com/10/23/1/computer-icons-user-profile-avatar-png-favpng-ypy9BWih5X28x0zDEBeemwyx8.jpg"
          }
        />
        <TextArea
          onChangeLength={(length) => setCounter(length)}
          charsLimit={400}
        />
      </div>
      <div className={style.publish_field}>
        <span>{counter}/400</span>
        <Button>Publicar</Button>
      </div>
    </div>
  );
}
