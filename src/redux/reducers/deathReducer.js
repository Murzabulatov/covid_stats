const initialState = {
  count: 0,
  isLoaded: false,
}

const deathReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DEATH':
      return {
        ...state,
        count: action.payload,
        isLoaded: true
      }
    default:
      return state
  }
}

export default deathReducer;
