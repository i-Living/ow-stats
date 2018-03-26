import api from '../api'
import setAuthorizationHeader from '../utils/setAuthorizationHeader'
import * as types from '../actionTypes'

export const goToSignIn = () => dispatch => {
  dispatch({
    type: GO_TO_SIGNIN_FORM
  })
}

export const goToSignUp = () => dispatch => {
  dispatch({
    type: GO_TO_SIGNUP_FORM
  })
}

// Login with api. Save token to local storage. Update authorization bearer.
export const login = data => async dispatch => {
  dispatch({ type: types.USER_LOGIN_START })
  try {
    const userToken = await api.user.login(data)
    if (!userToken.id_token) {
      const payload = {
        loginError: userToken.response.data
      }
      dispatch({
        type: types.USER_LOGIN_FAILURE,
        payload: payload,
        error: true
      })
    } else {
      window.localStorage.parrotwingsJWT = userToken.id_token
      setAuthorizationHeader(window.localStorage.parrotwingsJWT)
      const user = getUserFromToken(userToken.id_token)
      dispatch({
        type: types.USER_LOGIN_SUCCESS,
        payload: user
      })
    }
  } catch (err) {
    dispatch({
      type: types.USER_LOGIN_FAILURE,
      payload: err,
      error: true
    })
  }
}

// Logout. Remove token from local storage. Clear authorization bearer.
export const logout = () => dispatch => {
  try {
    window.localStorage.removeItem('parrotwingsJWT')
    setAuthorizationHeader()
    dispatch({
      type: types.USER_LOGGED_OUT_SUCCESS
    })
  } catch (err) {
    dispatch({
      type: types.USER_LOGGED_OUT_FAILURE,
      payload: err,
      error: true
    })
  }
}

// Registration new user with api. Save token to local storage. Update authorization bearer.
export const signup = data => async dispatch => {
  dispatch({ type: types.USER_SIGNUP_START })
  try {
    const userToken = await api.user.signup(data)
    if (!userToken.id_token) {
      const payload = {
        loginError: userToken.response.data
      }
      dispatch({
        type: types.USER_SIGNUP_FAILURE,
        payload: payload,
        error: true
      })
    } else {
      window.localStorage.parrotwingsJWT = userToken.id_token
      setAuthorizationHeader(window.localStorage.parrotwingsJWT)
      const user = getUserFromToken(userToken.id_token)
      dispatch({
        type: types.USER_SIGNUP_SUCCESS,
        payload: user
      })
    }
  } catch (err) {
    dispatch({
      type: types.USER_SIGNUP_FAILURE,
      payload: err,
      error: true
    })
  }
}
