import { useState } from "react";
import Button from "../../atoms/Button";
import CircleProgressbar from "../../atoms/CircleProgressbar";
import MiniButton from "../../atoms/MiniButton";
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
        <CircleProgressbar
          width={45}
          percentage={counter / 4}
          primaryColor={["#f00", "#f33"]}
        >
          {counter > 0 && <span style={{ fontSize: "10px" }}>{counter}</span>}
        </CircleProgressbar>
        <div className={style.publish_field__minibuttons_field}>
          <MiniButton label="Emoji" icon="ic:outline-emoji-emotions" />
          <MiniButton
            label="Programar"
            icon="material-symbols:calendar-add-on"
          />
          <MiniButton label="Mídia" icon="icon-park-solid:add-pic" />
        </div>
        <Button className={style.publish_field__button}>Publicar</Button>
      </div>
    </div>
  );
}
