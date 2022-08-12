import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";

export default function UseContextPage() {
  const authContext = useContext(AuthContext);
  console.log(authContext);
  return (
    <div style={{ textAlign: "center" }}>
      <h4>Use Context Demo</h4>
      <div>
        <button onClick={authContext.handleChangeIsAuth}>Click me</button>
        <div>{authContext.isAuth ? "Success" : "Failed"}</div>
      </div>
    </div>
  );
}
