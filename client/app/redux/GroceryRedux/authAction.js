import * as actionTypes from "./shopping-type";

export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const auth = getFirebase().auth();

    auth
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: actionTypes.LOGIN_SUCCESS });
      })
      .catch((error) => {
        dispatch({ type: actionTypes.LOGIN_ERROR1, error });
      });
  };
};
