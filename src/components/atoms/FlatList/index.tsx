import { ReactNode } from "react";
import style from "./style.module.scss";

type FlatListDataType = {
  id: string | number;
  content: ReactNode;
};

interface FlatListProps {
  title?: string;
  data: FlatListDataType[];
}

export function FlatList({ title, data }: FlatListProps) {
  return (
    <div className={style.container}>
      {title && <p>{title}</p>}

      <div className={style.content}>
        {data.map((data) => (
          <div key={data.id} className={style.item}>
            {data.content}
          </div>
        ))}
        <hr />
      </div>
    </div>
  );
}
