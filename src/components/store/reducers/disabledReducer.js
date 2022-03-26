const initialState = {
  disabled: true,
};

const SET_DISABLED = "SET_DISABLED";
const SET_ENABLED = "SET_ENABLED";

export const disabledReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DISABLED:
      return { disabled: false };
    case SET_ENABLED:
      return { disabled: true };
    default:
      return state;
  }
};
export const setDisabled = (disabled) => ({ type: SET_DISABLED });
export const setEnabled = (disabled) => ({ type: SET_ENABLED });
