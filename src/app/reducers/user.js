import * as types from '../actionTypes'

export default function user (state = {}, {type, payload}) {
  switch (type) {
    case types.USER_LOGIN_SUCCESS:
      return payload
    case types.USER_LOGIN_FAILURE:
      return {
        ...state,
        ...payload
      }
    case types.USER_SIGNUP_SUCCESS:
      return payload
    case types.USER_SIGNUP_FAILURE:
      return {
        ...state,
        ...payload
      }
    case types.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        ...payload
      }
    case types.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        ...payload
      }
    case types.USER_LOGGED_OUT_SUCCESS:
      return {}
    case types.ADD_ACCOUT_START:
      return state
    case types.ADD_ACCOUT_SUCCESS:
      return {
        ...state,
        ...payload
      }
    case types.ADD_ACCOUT_FAILURE:
      return {
        ...state,
        ...payload
      }
    case types.FETCH_USER_START:
      return state
    case types.FETCH_USER_SUCCESS:
      return payload
    case types.FETCH_USER_FAILURE:
      return payload
    case types.GO_TO_SIGNIN_FORM:
      return {}
    case types.GO_TO_SIGNUP_FORM:
      return {}
    case types.GO_TO_USER_PAGE:
      return payload
    default:
      return state
  }
}
