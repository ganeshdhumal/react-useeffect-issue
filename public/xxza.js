import "./styles.css";
import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // without setting the dependency array solve the counter issue in the app
  // counter should increment by one every second
  useEffect(() => {
    setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <div>The count is: {count}</div>;
}

export default Counter;
