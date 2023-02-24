import getUserRole from "../../utils/getUserRole";

const initialState = {
  isLogged: false,
  token: null,
  user_role: null,
  refreshToken: null,
  expireDate: null,
};

const auth = {
  state: initialState, // initial state
  reducers: {
    // handle state changes with pure functions
    login(state, payload) {
      const userRole = getUserRole(payload?.accessToken);
      console.log("User Role", userRole);

      return {
        ...state,
        isLogged: true,
        user_role: userRole,
        token: payload?.accessToken,
        refreshToken: payload?.refreshToken,
        expireDate: payload?.expireDate,
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
