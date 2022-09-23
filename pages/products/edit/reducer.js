import { actions } from "./actions";
import { initialState } from "./constants";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_FORM_DATA: {
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.name]: action.payload.value,
        },
      };
    }
    case actions.SUBMIT_REQUEST:
      return {
        ...state,
        submit: {
          ...state.submit,
          loading: true,
          error: false,
        },
      };
    case actions.SUBMIT_SUCCESS:
      return {
        ...state,
        submit: {
          ...state.submit,
          loading: false,
          success: true,
          data: action.payload,
        },
      };
    case actions.SUBMIT_FAILURE:
      return {
        ...state,
        submit: {
          ...state.submit,
          loading: false,
          error: action.payload,
          success: false,
        },
      };
    default:
      return state;
  }
};
export { reducer, actions, initialState };
