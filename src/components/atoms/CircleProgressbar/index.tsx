import style from "./style.module.scss";

interface CircleProgressbarProps {
  percentage: number;
  width?: number;
  strokeWidth?: number;
  primaryColor?: string[];
  secondaryColor?: string;
  fill?: string;
  hidePercentageText?: boolean;
  strokeLinecap?: "round" | "inherit" | "butt" | "square" | undefined;
  children?: React.ReactNode;
}

const CircleProgressbar = ({
  percentage,
  hidePercentageText,
  width = 200,
  strokeWidth = 2.5,
  strokeLinecap = "round",
  primaryColor = ["#00BBFF", "#92d7f1"],
  secondaryColor = "transparent",
  fill = "transparent",
  children,
}: CircleProgressbarProps) => {
  const PI = 3.14;
  const R = width / 2 - strokeWidth * 2;

  let circumference = 2 * PI * R;
  let offset = circumference - (percentage / 100) * circumference;
  let gradientId = `${primaryColor[0]}${primaryColor[1]}`.replace(/#/g, "");

  return (
    <div
      className={style.progressbar__base}
      style={{
        height: `${width}px`,
        width: `${width}px`,
      }}
    >
      {!hidePercentageText ? (
        <div className={style.progressbar__percentage_container}>
          {children}
        </div>
      ) : null}

      <svg
        width="100%"
        height="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={primaryColor[0]} />
          <stop offset="100%" stopColor={primaryColor[1]} />
        </linearGradient>
        <circle
          strokeWidth={strokeWidth}
          fill="transparent"
          r={R}
          cx={width / 2}
          cy={width / 2}
          stroke={secondaryColor}
          strokeDasharray={`${circumference} ${circumference}`}
        />
        <circle
          className={style.progressbar__styled_circle}
          strokeWidth={strokeWidth}
          fill={fill}
          r={R}
          cx={width / 2}
          cy={width / 2}
          stroke={`url(#${gradientId})`}
          strokeLinecap={strokeLinecap}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
        />
      </svg>
    </div>
  );
};

export default CircleProgressbar;
