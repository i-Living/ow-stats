import {
  ADD_SR,
  DELETE_SR,
  UPDATE_SR,
  FETCH_RATING_START,
  FETCH_RATING_SUCCESS,
  FETCH_RATING_FAILURE
} from '../actionTypes'

const initialState = []

export default function user(state = initialState, {type, payload}) {
  switch (type) {
    case ADD_SR:
      return [
        ...state,
        payload
      ]
    case DELETE_SR:
      return state
    case UPDATE_SR:
      return state
    case FETCH_RATING_START:
      return payload
    case FETCH_RATING_SUCCESS:
      return payload
    case FETCH_RATING_FAILURE:
      return payload
    default:
      return state
  }
}
