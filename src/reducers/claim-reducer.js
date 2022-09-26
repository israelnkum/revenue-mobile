import { Types } from "../actions/claims/Types";

const initialState = {
  claimDetail: {},
  claims: [],
};

export default function claimReducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_CLAIM:
      return { ...state, claimDetail: action.payload };

    case Types.NEW_CLAIM:
      return {
        ...state,
        claims: state.claims.concat(action.payload),
      };
    case Types.ALL_CLAIMS:
      return {
        ...state,
        claims: action.payload,
      };
    case Types.UPDATE_CLAIM:
      return {
        ...state,
        claims: state.claims.map(claim => {
          return claim.id === action.payload.id ? action.payload : claim;
        }),
      };
    case Types.DELETE_CLAIM:
      return {
        ...state,
        claims: state.claims.filter(claim => claim.id !== action.id),
      };

    default:
      return state;
  }
}
