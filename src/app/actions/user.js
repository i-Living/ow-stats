import {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  ADD_SR,
  GO_TO_USER_PAGE
} from '../actionTypes'
import {fetchUser as fetchUserApi} from '../api'

export const fetchUser = (userTag) => async dispatch => {
  dispatch({ type: FETCH_USER_START })

  try {
    const user = await fetchUserApi(userTag)
    dispatch({
      type: FETCH_USER_SUCCESS,
      payload: user
    })
  } catch (err) {
    dispatch({
      type: FETCH_USER_FAILURE,
      payload: err,
      error: true
    })
  }
}

export const addSR = (value, scores) => dispatch => {
  const newScores = scores
  newScores.push(value)
  dispatch({
    type: ADD_SR,
    payload: newScores
  })
}

export const onGoToUserPage = (userTag) => dispatch => {
  dispatch({
    type: GO_TO_USER_PAGE,
    payload: userTag
  })
}
