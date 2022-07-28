// action type

const SET_DATA = 'SET_DATA';
const SET_DESCRIPTIONS = 'SET_DESCRIPTIONS';

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

// Reducer
const initstate = [];

const dataReducer = (state = initstate, action) => {
  switch (action.type) {
    case SET_DATA:
      return [...action.details];

    default:
      return state;
  }
};

export default dataReducer;
