import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  let [searchParams] = useSearchParams();

  useMemo(() => {
    let _keyword = searchParams.get("q");
    if (_keyword) {
      setKeyword(_keyword);
    }
  }, [searchParams]);

  return <div>{keyword}</div>;
}
