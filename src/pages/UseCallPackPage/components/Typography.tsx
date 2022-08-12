import React from "react";

function Typography(props: { value: string; children?: React.ReactNode }) {
  console.log("Typography:", props.value);
  return <p>{props.value}</p>;
}

export default React.memo(Typography);
