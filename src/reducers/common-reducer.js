import { Types } from "../actions/common/Types";

const initialState = {
  districts: [],
  vehicles: [],
  availableNetworks: [],
};

export default function commonReducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_DISTRICTS:
      return { ...state, districts: action.districts };

    case Types.GET_VEHICLES:
      return { ...state, vehicles: action.vehicles };

    case Types.GET_AVAILABLE_NETWORKS:
      return { ...state, availableNetworks: action.networks };

    default:
      return state;
  }
}
