import { defineAction } from 'redux-define';

const appsCreator = defineAction('ywc15');

export const promiseStates = ['PENDING', 'RESOLVED', 'REJECTED'];
export default (namespace) => (action) => appsCreator.defineAction(namespace).defineAction(action).toString();
