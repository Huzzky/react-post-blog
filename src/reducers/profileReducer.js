const initialState = {
  authUserBoolean: false,
}

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case 'AUTH_USER':
      return {
        authUserBoolean: true,
        ...state,
      }
    default:
      return state
  }
}
