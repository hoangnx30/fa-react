import { withAuth } from "../hoc/withAuth";
function Main() {
  return <div>Main page</div>;
}

export default withAuth(Main);
