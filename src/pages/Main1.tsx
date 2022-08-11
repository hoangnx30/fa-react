import { withAuth } from "../hoc/withAuth";

function Main1() {
  console.log(3);
  return <div>Main1</div>;
}

export default withAuth(Main1);
