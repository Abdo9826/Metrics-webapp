// action type

const SET_DATA = 'SET_DATA';
const SET_DESCRIPTIONS = 'SET_DESCRIPTIONS';
const SEARCH = 'SEARCH';

export const Setdata = () => async (dispatch) => {
  const url = 'https://restcountries.com/v3.1/all';
  const response = await fetch(url);
  const json = await response.json();
  const details = json;

  dispatch({
    type: SET_DATA,
    details,
  });
};

export const Setdescritions = (id) => ({
  type: SET_DESCRIPTIONS,
  id,
});

export const search = (id) => ({
  type: SEARCH,
  id,
});

// Reducer
const initstate = [];

const dataReducer = (state = initstate, action) => {
  switch (action.type) {
    case SET_DATA:
      return [...action.details];

    case SEARCH: {
      if (action.id === 'Filter by Conentens') {
        return state;
      }
      const newState = state.filter(
        (item) => item.continents[0] === action.id,
      );
      return newState;
    }
    default:
      return state;
  }
};

export default dataReducer;
