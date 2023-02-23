import getUserRole from "../../utils/getUserRole";

const initialState = {
  isLogged: false,
  token: null,
  user_role: null,
};

const auth = {
  state: initialState, // initial state
  reducers: {
    // handle state changes with pure functions
    login(state, payload) {
      // const userRole = getUserRole(payload?.id_token);
      return {
        ...state,
        token: payload?.id_token,
      };
    },
    auth(state, payload) {
      const token = localStorage.getItem("token").slice(7);
      const userRole = getUserRole(token);

      return {
        ...state,
        isLogged: true,
        user_role: userRole,
      };
    },
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    logoutAsync() {
      dispatch({ type: "RESET_APP" });
      localStorage.removeItem("token");
    },
  }),
};

export default auth;
