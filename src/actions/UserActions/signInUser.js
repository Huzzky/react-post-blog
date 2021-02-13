import { AUTH_USER_REQUEST, AUTH_USER_SUCCESS } from '../../const'

export const signInUser = (param) => {
  return (dispatch) => {
    dispatch({
      type: AUTH_USER_REQUEST,
    })

    setTimeout(() => {
      dispatch({
        type: AUTH_USER_SUCCESS,
        data: param,
      })
    }, 1500)
  }
}
