import { AUTH_USER, EXIT_USER } from '../const'

const initialState = {
  authUserBoolean: false,
}

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
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
