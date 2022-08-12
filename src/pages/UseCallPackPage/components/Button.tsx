import React from "react";

interface Props {
  children: React.ReactNode;
  handeClick: () => void;
}
function Button(props: Props) {
  console.log("Button: " + props.children);
  return <button onClick={props.handeClick}>{props.children}</button>;
}

export default React.memo(Button);
