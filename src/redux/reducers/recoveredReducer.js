const initialState = {
  count: 0,
  isLoaded: false,
}

const recoveredReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RECOVERED':
      return {
        ...state,
        count: action.payload,
        isLoaded: true
      }
    default:
      return state
  }
}

export default recoveredReducer;
