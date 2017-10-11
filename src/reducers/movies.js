const movieReducers = (state = {}, action) => {
  switch (action.type) {
    case 'SEARCH_MOVIES_STARTED': {
      console.log('Fetching movies...');
      return state;
    }
    case 'FETCH_MOVIES_ERROR': {
      throw new Error(action.payload);
    }
    case 'SEARCH_MOVIES_COMPLETED': {
      return { ...state, ...action.payload };
    }
    default: return { ...state };
  }
};

export default movieReducers;
