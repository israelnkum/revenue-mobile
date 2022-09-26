import { Types } from "../actions/authenticate/Types";

const initialState = {
  authUser: {},
  authenticated: false,
  bearerToken: "token",
  signup: false,
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case Types.AUTHENTICATE: {
      return {
        ...state,
        authenticated: true,
        authUser: action.user,
        bearerToken: action.user.token,
      };
    }

    case Types.SIGN_UP: {
      return {
        ...state,
        signup: true,
      };
    }

    default:
      return state;
  }
}
