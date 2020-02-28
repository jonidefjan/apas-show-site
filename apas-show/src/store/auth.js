export const authStore = {
  auth: {
    isLogged: false,
    isUnauthorized: false,
    user: {}
  }
};

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

const authReducer = (state = authStore, action) => {
  switch (action.type) {
    case LOGIN:
      window.localStorage.setItem('localev2-user', JSON.stringify(action.payload));
      //window.localStorage.setItem('locale-sistema', JSON.stringify(action.payload));
      return {
        auth: {
          ...state.auth,
          isLogged: true,
          user: action.payload
        }
      };
    case LOGOUT:
      window.localStorage.removeItem('localev2-user');
      window.localStorage.removeItem('locale-sistema');
      return {
        auth: {
          ...state.auth,
          isLogged: false,
          user: {}
        }
      };
    default:
      return state;
  }
};

export const LogInUser = user => {
  return {
    type: LOGIN,
    payload: user
  };
};

export const LogOutUser = () => {
  return {
    type: LOGOUT
  };
};

export default authReducer;
