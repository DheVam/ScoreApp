import { ADD_PLAYER, UPDATE_PLAYER, DELETE_PLAYER } from "../redux/actionTypes";

const initialState = [];

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return [...state, action.payload];

    case UPDATE_PLAYER:
      return state.map((player) =>
        player.id === action.payload.id ? action.payload : player
      );

    case DELETE_PLAYER:
      return state.filter((player) => player.id !== action.payload);

    default:
      return state;
  }
};

export default playerReducer;
