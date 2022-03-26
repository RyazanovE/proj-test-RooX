const initialState = {
  name: "",
  username: "",
  email: "",
  street: "",
  city: "",
  zip: "",
  phone: "",
  website: "",
  comment: ""
};

const SET_NAME = "SET_NAME";
const SET_USERNAME = "SET_USERNAME";
const SET_EMAIL = "SET_EMAIL";
const SET_STREET = "SET_STREET";
const SET_CITY = "SET_CITY";
const SET_ZIP = "SET_ZIP";
const SET_PHONE = "SET_PHONE";
const SET_WEBSITE = "SET_WEBSITE";
const SET_COMMENT = "SET_COMMENT";

export const sendJsonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.value };
    case SET_USERNAME:
      return { ...state, username: action.value };
    case SET_STREET:
      return { ...state, street: action.value };
    case SET_CITY:
      return { ...state, city: action.value };
    case SET_ZIP:
      return { ...state, zip: action.value };
    case SET_PHONE:
      return { ...state, phone: action.value };
    case SET_WEBSITE:
      return { ...state, website: action.value };
    case SET_EMAIL:
      return { ...state, email: action.value };
    case SET_COMMENT:
      return { ...state, comment: action.value };
    default:
      return state;
  }
};
export const setSendName = (value) => ({ type: SET_NAME, value: value });
export const setSendUserName = (value) => ({ type: SET_USERNAME, value: value });
export const setSendEmail = (value) => ({ type: SET_EMAIL, value: value });
export const setSendStreet = (value) => ({ type: SET_STREET, value: value });
export const setSendNCity = (value) => ({ type: SET_CITY, value: value });
export const setSendZip = (value) => ({ type: SET_ZIP, value: value });
export const setSendPhone = (value) => ({ type: SET_PHONE, value: value });
export const setSendWebsite = (value) => ({ type: SET_WEBSITE, value: value });
export const setSendComment = (value) => ({ type: SET_COMMENT, value: value });

export const setSendActions = {setSendName, setSendUserName, setSendEmail, setSendStreet, setSendNCity, setSendZip, setSendPhone, setSendWebsite, setSendComment}