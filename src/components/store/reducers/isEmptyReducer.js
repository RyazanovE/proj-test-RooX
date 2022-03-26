const initialState = {
  empty: false,
  };
  
  const SET_EMPTY = "SET_EMPTY";
  const SET_NOT_EMPTY = "SET_NOT_EMPTY";
  
  export const isEmptyReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_EMPTY:
        return { empty: true };
      case SET_NOT_EMPTY:
        return { empty: false };
      default:
        return state;
    }
  };
  export const setEmpty = () => ({ type:  SET_EMPTY });
  export const setNotEmpty = () => ({ type: SET_NOT_EMPTY });
  