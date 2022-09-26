import { Types } from "./Types";

export const payToe = (data) => {
  return {
    type: Types.PAY_TOE,
    payload: data,
  };
};
