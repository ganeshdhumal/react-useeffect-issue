import "./styles.css";
import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // without adding the dependency array resolve the issue in counter app
  // counter should increase by one every second

  useEffect(() => {
    setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <div>The count is: {count}</div>;
}

export default Counter;
