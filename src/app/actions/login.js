import api from '../api'
import setAuthorizationHeader from '../utils/setAuthorizationHeader'
import * as types from '../actionTypes'
import { getUserFromToken } from './user'

export const goToSignIn = () => dispatch => {
  dispatch({
    type: types.GO_TO_SIGNIN_FORM,
  })
}

export const goToSignUp = () => dispatch => {
  dispatch({
    type: types.GO_TO_SIGNUP_FORM,
  })
}

export const confirm = token => async dispatch => {
  dispatch({ type: types.LOGIN_CONFIRM_START })
  try {
    const user = await api.auth.confirm(token)
    window.localStorage.owstatsJWT = user.token
    dispatch({
      type: types.LOGIN_CONFIRM_SUCCESS,
      payload: user,
    })
  } catch (err) {
    dispatch({
      type: types.LOGIN_CONFIRM_FAILURE,
      payload: err,
      error: true,
    })
  }
}

export const validateToken = token => async dispatch => {
  dispatch({ type: types.VALIDATE_TOKEN_START })
  try {
    const payload = await api.auth.validateToken(token)
    dispatch({
      type: types.VALIDATE_TOKEN_SUCCESS,
      payload: payload,
    })
  } catch (err) {
    dispatch({
      type: types.VALIDATE_TOKEN_FAILURE,
      payload: err,
      error: true,
    })
  }
}

export const resetPassword = (password, token) => async dispatch => {
  const data = { password: password, token: token}
  dispatch({ type: types.RESET_PASSWORD_START })
  try {
    const payload = await api.auth.resetPassword(data)
    dispatch({
      type: types.RESET_PASSWORD_SUCCESS,
      payload: payload,
    })
  } catch (err) {
    dispatch({
      type: types.RESET_PASSWORD_FAILURE,
      payload: err,
      error: true,
    })
  }
}

export const forgotPassword = data => async dispatch => {
  dispatch({ type: types.FORGOT_PASSWORD_START })
  try {
    const resp = await api.auth.forgotPassword(data)
    if (resp.response) {
      const payload = {
        emailConfirmError: resp.response.data,
      }
      dispatch({
        type: types.FORGOT_PASSWORD_FAILURE,
        payload: payload,
        error: true,
      })
    } else {
      dispatch({
        type: types.FORGOT_PASSWORD_SUCCESS,
        payload: resp,
      })
    }
  } catch (err) {
    dispatch({
      type: types.RESET_PASSWORD_FAILURE,
      payload: err,
      error: true,
    })
  }
}

// Login with api. Save token to local storage. Update authorization bearer.
export const login = data => async dispatch => {
  dispatch({ type: types.USER_LOGIN_START })
  try {
    const userToken = await api.auth.login(data)
    if (!userToken.token) {
      console.log(userToken.response)
      const payload = {
        loginError: userToken.response.data,
      }
      dispatch({
        type: types.USER_LOGIN_FAILURE,
        payload: payload,
        error: true,
      })
    } else {
      window.localStorage.owstatsJWT = userToken.token
      setAuthorizationHeader(window.localStorage.owstatsJWT)
      const user = getUserFromToken(userToken.token)
      dispatch({
        type: types.USER_LOGIN_SUCCESS,
        payload: user,
      })
    }
  } catch (err) {
    dispatch({
      type: types.USER_LOGIN_FAILURE,
      payload: err,
      error: true,
    })
  }
}

// Logout. Remove token from local storage. Clear authorization bearer.
export const logout = () => dispatch => {
  try {
    window.localStorage.removeItem('owstatsJWT')
    setAuthorizationHeader()
    dispatch({
      type: types.USER_LOGGED_OUT_SUCCESS,
    })
  } catch (err) {
    dispatch({
      type: types.USER_LOGGED_OUT_FAILURE,
      payload: err,
      error: true,
    })
  }
}

// Registration new user with api. Save token to local storage. Update authorization bearer.
export const signup = data => async dispatch => {
  dispatch({ type: types.USER_SIGNUP_START })
  try {
    const parsedData = {
      email: data.email,
      password: data.password
    }
    const userToken = await api.auth.signup(parsedData)
    if (!userToken.token) {
      const payload = {
        loginError: userToken.response.data,
      }
      dispatch({
        type: types.USER_SIGNUP_FAILURE,
        payload: payload,
        error: true,
      })
    } else {
      window.localStorage.owstatsJWT = userToken.token
      setAuthorizationHeader(window.localStorage.owstatsJWT)
      const user = getUserFromToken(userToken.token)
      dispatch({
        type: types.USER_SIGNUP_SUCCESS,
        payload: user,
      })
    }
  } catch (err) {
    dispatch({
      type: types.USER_SIGNUP_FAILURE,
      payload: err,
      error: true,
    })
  }
}
