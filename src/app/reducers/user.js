import {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  GO_TO_USER_PAGE
} from '../actionTypes'

const initialState = []

export default function user(state = initialState, {type, payload}) {
  switch (type) {
    case FETCH_USER_START:
      return state
    case FETCH_USER_SUCCESS:
      return payload
    case FETCH_USER_FAILURE:
      return payload
    case GO_TO_USER_PAGE:
      return payload
    default:
      return state
  }
}
