import { useMemo, useState } from "react";

export default function UseMemoPage() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const isEven = useMemo(() => {
    for (let i = 0; i < 1000000000; i++) i++; // fake complex logic

    return counter1 % 2 === 0;
  }, [counter1]);

  const handleIncrease1 = () => {
    const newCounter1 = counter1 + 1;
    setCounter1(newCounter1);
  };

  const handleIncrease2 = () => {
    const newCounter2 = counter2 + 1;
    setCounter2(newCounter2);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h4>Use Memo Demo</h4>
      <button onClick={handleIncrease1}>
        Increase1 - {counter1} - {isEven ? "Even" : "Odd"}
      </button>
      <button onClick={handleIncrease2}>Increase2 - {counter2}</button>
    </div>
  );
}
