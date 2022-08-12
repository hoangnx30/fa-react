import React from "react";
function Title() {
  console.log("Title component render");
  return <h4>UseCallback demo</h4>;
}

export default React.memo(Title);
