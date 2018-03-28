import {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  ADD_SR,
  GO_TO_USER_PAGE,
} from '../actionTypes'
import decode from 'jwt-decode'
import api from '../api'
import * as types from '../actionTypes'

// Get user data from local storage.
export const getUserFromToken = token => {
  let payload = {}
  try {
    payload = decode(token)
  } catch (e) {
    console.error(e)
  }
  const user = {
    token: token,
    email: payload.email,
    username: payload.username,
    balance: payload.balance,
  }
  return user
}

export const fetchUser = userTag => async dispatch => {
  dispatch({ type: FETCH_USER_START })
  try {
    const user = await api.user.fetchUser(userTag)
    dispatch({
      type: FETCH_USER_SUCCESS,
      payload: user,
    })
  } catch (err) {
    dispatch({
      type: FETCH_USER_FAILURE,
      payload: err,
      error: true,
    })
  }
}

export const addAccount = data => async dispatch => {
  dispatch({ type: types.ADD_ACCOUT_START })
  try {
    const payload = await api.user.addAccount(data)
    dispatch({
      type: types.ADD_ACCOUT_SUCCESS,
      payload: payload,
    })
  } catch (err) {
    dispatch({
      type: types.ADD_ACCOUT_FAILURE,
      payload: err,
      error: true,
    })
  }
}

export const addSR = (value, scores) => dispatch => {
  const newScores = scores
  newScores.push(value)
  dispatch({
    type: ADD_SR,
    payload: newScores,
  })
}

export const onGoToUserPage = userTag => dispatch => {
  dispatch({
    type: GO_TO_USER_PAGE,
    payload: userTag,
  })
}
