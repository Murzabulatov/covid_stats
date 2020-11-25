const initialState = {
  items: [{ totalConfirmed: 'ИНФОРМАЦИЯ ВРЕМЕННО НЕДОСТУПНА', deaths: { total: 0 } }],
  isLoaded: false
}

const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_STATS':
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      }
    default:
      return state
  }
}

export default statsReducer;
