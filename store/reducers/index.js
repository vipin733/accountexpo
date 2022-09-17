import {
  SET_LOADING_STATUS,
  SET_ACCOUNTS,
  SET_LOGIN_TOKEN,
  SET_AUTH
} from "../types";

const initialState = {
  isLoading: true,
  token: null,
  user: {},
  accounts: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_STATUS:
      return { ...state, isLoading: action.payload };
    case SET_LOGIN_TOKEN:
      return { ...state, token: action.payload };
    case SET_ACCOUNTS:
      return { ...state, accounts: action.payload };
    case SET_AUTH:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
