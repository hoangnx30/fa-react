import { Route } from "react-router-dom";

const AuthRoute = (props: any): JSX.Element => {
  const isAuthed = true; // add function check login here
  let Component = props.component;
  const FallBackComponent = () => <div>Unauthorized</div>;
  if (!isAuthed) {
    Component = FallBackComponent;
  }

  return <Route {...props} path={props.path} element={<Component />} />;
};
export default AuthRoute;
