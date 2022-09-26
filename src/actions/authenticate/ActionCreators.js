import { Types } from "./Types";

export const authenticate = (user) => {
  return {
    type: Types.AUTHENTICATE,
    user,
  };
};

export const removeAuth = () => {
  return {
    type: Types.REMOVE_AUTH,
  };
};

export const signUp = () => {
  return {
    type: Types.SIGN_UP,
  };
};
