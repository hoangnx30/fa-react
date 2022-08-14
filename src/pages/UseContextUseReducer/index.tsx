import { useContext } from "react";
import { CountContext } from "./context/CountContext";

function UseContextUseReducer() {
  const countContext = useContext(CountContext);
  console.log(countContext);
  return (
    <div style={{ textAlign: "center" }}>
      <h2>UseContextUseReducer demo</h2>
      <button onClick={countContext.decrease}>Decrease</button>
      <span>{countContext.count}</span>
      <button onClick={countContext.increase}>Increase</button>
    </div>
  );
}

export default UseContextUseReducer;
