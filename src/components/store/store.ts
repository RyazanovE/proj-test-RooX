import { fetchArrReducer } from "./reducers/fetchArrReducer";
import {createStore, combineReducers} from 'redux'
import { disabledReducer } from "./reducers/disabledReducer";
import {isEmptyReducer} from "./reducers/isEmptyReducer";
import {submitReducer} from "./reducers/submitReducer"
import {sendJsonReducer} from "./reducers/sendJsonReducer"


 export const rootReducer = combineReducers({
    fetchArrReducer,
    disabledReducer,
    isEmptyReducer,
    submitReducer,
    sendJsonReducer
  });


  export const store = createStore(rootReducer)

  export type RootState = ReturnType<typeof rootReducer>