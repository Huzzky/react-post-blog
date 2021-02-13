import { AUTH_USER_REQUEST, EXIT_USER } from '../const'

const initialState = {
  authUserBoolean: false,
}

export default function profileReducer(state = initialState, { type, data }) {
  switch (type) {
    case AUTH_USER_REQUEST:
      /* Cookie сделать при вхождении в аккаунт */
      return {
        authUserBoolean: true,
        ...state,
      }
    case EXIT_USER:
      /* Cookie сделать при выходе из аккаунта */
      return {
        authUserBoolean: false,
        ...state,
      }
    default:
      return state
  }
}
