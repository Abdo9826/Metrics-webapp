// action type

const SET_DATA = 'SET_DATA';

const url = 'https://restcountries.com/v3.1/all';

export const Setdata = () => async (dispatch) => {
  const response = await fetch(url);
  const json = await response.json();
  const details = json;

  dispatch({
    type: SET_DATA,
    details,
  });
};

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
