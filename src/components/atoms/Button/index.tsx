import { forwardRef, HTMLAttributes } from "react";
import style from "./style.module.scss";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <button ref={ref} className={style.button + " " + className} {...rest}>
        {children}
      </button>
    );
  }
);

export default Button;
