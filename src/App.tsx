import { Switch, Route } from "react-router-dom";
import CustomHookPage from "./pages/CustomHookPage";
import UseCallBackPage from "./pages/UseCallPackPage";

import UseContextPage from "./pages/UseContextPage";
import UseMemoPage from "./pages/UseMemoPage";
import UseRefPage from "./pages/UserRefPage";

function App() {
  return (
    <Switch>
      <Route path="/custom-hook" component={CustomHookPage} />
      <Route path="/use-ref" component={UseRefPage} />
      <Route path="/use-callback" component={UseCallBackPage} />
      <Route path="/use-memo" component={UseMemoPage} />
      <Route path="/" exact component={UseContextPage} />
      <Route path="*" component={() => <h1>404 Not Found</h1>} />
    </Switch>
  );
}

export default App;
