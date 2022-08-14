export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";

interface IIncreaseAction {
  type: typeof INCREASE;
  payload: {
    value: number;
  };
}

interface IDecreaseAction {
  type: typeof DECREASE;
  payload: {
    value: number;
  };
}

export type CountAction = IIncreaseAction | IDecreaseAction;
