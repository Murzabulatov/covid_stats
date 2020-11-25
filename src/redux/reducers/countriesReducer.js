const initialState = {
  countries: [],
  isLoaded: false,
}

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COUNTRIES':
      return {
        ...state,
        countries: action.payload,
        isLoaded: true
      }
    default:
      return state
  }
}

export default countriesReducer;
