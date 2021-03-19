import * as actionTypes from "./shopping-type";

const initialState = {
  authError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_ERROR1:
      return {
        ...state,
        authError: "Error",
      };

    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        authError: "Success",
      };
    default:
      return state;
  }
};
export default authReducer;
