import { useState, useCallback } from "react";
import Button from "./components/Button";
import Title from "./components/Title";
import Typography from "./components/Typography";

export default function UseCallBackPage() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const handleIncrease1 = useCallback(() => {
    const newCounter1 = counter1 + 1;
    setCounter1(newCounter1);
  }, [counter1]);

  const handleIncrease2 = useCallback(() => {
    const newCounter2 = counter2 + 1;
    setCounter2(newCounter2);
  }, [counter2]);

  return (
    <div style={{ textAlign: "center" }}>
      <Title />
      <Typography value={`Typography1: ${counter1}`} />
      <Button handeClick={handleIncrease1}>Increase 1</Button>

      <Typography value={`Typography2: ${counter2}`} />
      <Button handeClick={handleIncrease2}>Increase 2</Button>
    </div>
  );
}
