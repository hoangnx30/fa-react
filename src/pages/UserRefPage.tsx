import { useEffect } from "react";
import { useRef } from "react";

function UseRefPage() {
  const inputRef = useRef<any>();

  useEffect(() => {
    if (inputRef.current) {
      console.log(inputRef.current);
      inputRef.current.focus();
    }
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <input ref={inputRef} placeholder="Email" />
      <input placeholder="Password" />
    </div>
  );
}

export default UseRefPage;
