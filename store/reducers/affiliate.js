import actionCreator from '../../utils/actionCreator';
import api from '../../utils/api';

const affiliateAction = actionCreator('affiliate');
const SAVE_AFFILIATE = affiliateAction('SAVE_AFFILIATE', true);

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    default: return state;
  }
};

export const actions = {
  saveAffiliate: (name, url) => ({
    type: SAVE_AFFILIATE,
    promise: api.post('/affiliates', { name, url })
  }),
};
