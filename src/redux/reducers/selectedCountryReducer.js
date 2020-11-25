const initialState = {
  subRegions: [],
  isLoaded: false
}

const selectedCountryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_COUNTRY':
      return {
        ...state,
        subRegions: action.payload,
        isLoaded: true,
      }
    default:
      return state
  }
}

export default selectedCountryReducer;
