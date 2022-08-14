import React from "react";
import { useReducer } from "react";
import { CountAction, DECREASE, INCREASE } from "../types/CountReducer";

type CountContextType = {
  count: number;
  increase: () => void;
  decrease: () => void;
};

type CountState = {
  count: number;
};

interface Props {
  children?: React.ReactNode;
}

export const CountContext = React.createContext<CountContextType>({
  count: 0,
  increase: () => {},
  decrease: () => {},
});

function reducer(state: CountState, action: CountAction): CountState {
  switch (action.type) {
    case INCREASE:
      console.log(action);
      return { count: action.payload.value };

    case DECREASE:
      return { count: action.payload.value };

    default:
      return state;
  }
}

const initializeValue = {
  count: 0,
};

export default function CountContextProvider(props: Props) {
  const [state, dispatch] = useReducer(reducer, initializeValue);

  const handleIncrease = () => {
    console.log("run");
    dispatch({ type: INCREASE, payload: { value: state.count + 1 } });
  };

  const handleDecrease = () => {
    dispatch({ type: INCREASE, payload: { value: state.count - 1 } });
  };

  return (
    <CountContext.Provider
      value={{
        count: state.count,
        increase: handleIncrease,
        decrease: handleDecrease,
      }}
    >
      {props.children}
    </CountContext.Provider>
  );
}
