const initialState = {
    submit: false,
}

const SUMBIT="SUMBIT"


export const submitReducer = (state = initialState, action) => {

   switch (action.type) {

    case SUMBIT:
        return {submit: !state.submit};

    default:
        return state
   }

}
export const submit = () => ({type: SUMBIT})