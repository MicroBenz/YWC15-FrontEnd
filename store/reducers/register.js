import actionCreator from '../../utils/actionCreator';

const registerAction = actionCreator('auth');
const SET_FIELD = registerAction('SET_FIELD');

const initialState = {
  major: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FIELD:
      return {
        ...state,
        [action.field]: action.value
      };
    default: return state;
  }
};

export const actions = {
  setField: (field, value) => ({
    type: SET_FIELD,
    field,
    value,
  })
};
