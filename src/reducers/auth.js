import { STORE_AUTH, CLEAR_AUTH } from "./action_types";

function clearStorage() {
  sessionStorage.removeItem("user");
  localStorage.removeItem("user");
}

const initialState = {
  user:
    JSON.parse(localStorage.getItem("user")) ||
    JSON.parse(sessionStorage.getItem("user")),
  isLoggedIn:
    localStorage.getItem("user") || sessionStorage.getItem("user")
      ? true
      : false, // if use object present in storage then consider Logged in ELSE logged out
};

export default function AuthReducer(state = initialState, action) {
  // @todo
  switch (action.type) {
    case STORE_AUTH: {
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    }

    case CLEAR_AUTH: {
      clearStorage();

      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    }

    default:
      return state;
  }
}
