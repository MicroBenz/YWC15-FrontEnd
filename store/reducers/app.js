import actionCreator from '../../utils/actionCreator';

const appAction = actionCreator('app');
const DONE_FIRSTLOAD = appAction('DONE_FIRSTLOAD');

const initialState = {
  isFirstLoad: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DONE_FIRSTLOAD:
      return {
        ...state,
        isFirstLoad: false
      };
    default:
      return state;
  }
};

export const actions = {
  doneFirstLoad: () => ({ type: DONE_FIRSTLOAD })
};
