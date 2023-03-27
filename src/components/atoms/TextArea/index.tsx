import { useEffect, useRef, useState } from "react";
import useAutosizeTextArea from "../../../hooks/useAutosizeTextArea";
import style from "./style.module.scss";

interface TextAreaProps {
  onChangeLength: (length: number) => void;
  charsLimit?: number;
}

export default function TextArea({
  onChangeLength,
  charsLimit,
}: TextAreaProps) {
  const [value, setValue] = useState<string>("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    onChangeLength(value.length);
  }, [value]);

  useAutosizeTextArea(textAreaRef.current, value);

  return (
    <textarea
      className={style.component}
      onChange={(e) =>
        setValue(() =>
          !charsLimit || e.target.value.length <= charsLimit
            ? e.target.value
            : e.target.value.slice(0, charsLimit)
        )
      }
      value={value}
      rows={1}
      ref={textAreaRef}
      placeholder="O que está pensando em escrever?"
    />
  );
}
