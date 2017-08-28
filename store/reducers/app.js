import actionCreator from '../../utils/actionCreator';
import api from '../../utils/api';

const appAction = actionCreator('app');
const DONE_FIRSTLOAD = appAction('DONE_FIRSTLOAD');
const LOAD_REGISTER_STAT = appAction('LOAD_REGISTER_STAT', true);
const SHOW_SEE_MORE = appAction('SHOW_SEE_MORE');
const HIDE_SEE_MORE = appAction('HIDE_SEE_MORE');

const initialState = {
  isFirstLoad: true,
  registerStat: {
    programming: 0,
    design: 0,
    content: 0,
    marketing: 0
  },
  isShowSeeMore: false,
  seeMoreMajor: ''
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
    case SHOW_SEE_MORE:
      return {
        ...state,
        seeMoreMajor: action.major,
        isShowSeeMore: true
      };
    case HIDE_SEE_MORE:
      return {
        ...state,
        seeMoreMajor: '',
        isShowSeeMore: false
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
  }),
  showModal: major => ({
    type: SHOW_SEE_MORE,
    major
  }),
  hideModal: () => ({
    type: HIDE_SEE_MORE
  })
};
