import actionCreator from '../../utils/actionCreator';
import api from '../../utils/api';

const appAction = actionCreator('app');
const DONE_FIRSTLOAD = appAction('DONE_FIRSTLOAD');
const LOAD_REGISTER_STAT = appAction('LOAD_REGISTER_STAT', true);

const initialState = {
  isFirstLoad: true,
  registerStat: {
    programming: 0,
    design: 0,
    content: 0,
    marketing: 0
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DONE_FIRSTLOAD:
      return {
        ...state,
        isFirstLoad: false
      };
    case LOAD_REGISTER_STAT.RESOLVED:
      return {
        ...state,
        registerStat: action.data
      };
    default:
      return state;
  }
};

export const actions = {
  doneFirstLoad: () => ({ type: DONE_FIRSTLOAD }),
  loadRegisterStat: () => ({
    type: LOAD_REGISTER_STAT,
    promise: api.get('/users/stat')
  })
};
