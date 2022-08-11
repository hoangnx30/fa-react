import { Button, Input } from "antd";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import List from "./components/List";
import Main1 from "./pages/Main1";
import Main from "./pages/Main";

function debounce(fn: Function, time: number) {
  let timeoutId: any;
  return wrapper;
  function wrapper(...args: any) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      timeoutId = null;
      fn(...args);
    }, time);
  }
}

function App() {
  const [value, setValue] = useState("");
  const list = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
  ];

  const handleChange = (e: any) => {
    const newValue = e.target.value;
    setValue(newValue);
    let baseUrl = "https://jsonplaceholder.typicode.com/photos";

    if (newValue) {
      baseUrl += `?albumId=${newValue}`;
    }
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      {/* <List
        list={list}
        renderItem={(item) => {
          return (
            <h1>
              <code>{item}</code>
            </h1>
          );
        }}
      /> */}
      <Switch>
        <Route path="main1" component={Main1} />
        <Route path="login" component={() => <div>Login</div>} />
        <Route path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
