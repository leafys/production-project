import { useState } from "react";

import * as style from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1 className={style.title}>{count}</h1>

      <button className={style.btn} onClick={increment}>
        increment
      </button>
    </div>
  );
};
