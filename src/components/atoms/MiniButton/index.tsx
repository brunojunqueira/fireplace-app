import { Icon } from "@iconify/react";
import {
  ButtonHTMLAttributes,
  EventHandler,
  MouseEvent,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";

import style from "./style.module.scss";

interface MiniButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon: string;
  fontSize?: string | number;
}

export default function MiniButton({
  label,
  icon,
  fontSize = "1.4rem",
  ...props
}: MiniButtonProps) {
  const [isHover, setIsHover] = useState<boolean>(false);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (labelRef.current) {
      if (isHover) {
        labelRef.current.style.opacity = "1";
      } else {
        labelRef.current.style.opacity = "0";
      }
    }
  }, [isHover]);

  return (
    <>
      <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={style.minibutton}
        {...props}
      >
        <Icon fontSize={fontSize} icon={icon} />
        <span className={style.label} ref={labelRef}>
          {label}
        </span>
      </button>
    </>
  );
}
