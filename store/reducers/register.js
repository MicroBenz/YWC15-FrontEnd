import _ from 'lodash';

import actionCreator from '../../utils/actionCreator';
import api from '../../utils/api';

const registerAction = actionCreator('auth');
const GET_REGISTER_DATA = registerAction('GET_REGISTER_DATA', true);
const SET_FIELD = registerAction('SET_FIELD');
const SAVE_STEP_ONE = registerAction('SAVE_STEP_ONE', true);

const initialState = {
  major: '',
  currentStep: 1,
  // Step 1
  title: '',
  firstName: '',
  lastName: '',
  nickname: '',
  faculty: '',
  department: '',
  academicYear: '',
  university: '',
  sex: '',
  birthdate: '',
  // Step 2
  address: '',
  province: '',
  postalCode: '',
  phone: '',
  email: '',
  blood: '',
  foodAllergy: '',
  medAllergy: '',
  disease: '',
  // Step 3
  knowCamp: '',
  whyJoinYWC: '',
  expectation: '',
  // Step 4
  generalQuestions: ['', '', ''],
  // Step 5
  specialQuestions: ['', '', ''],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FIELD:
      return {
        ...state,
        [action.field]: action.value
      };
    case GET_REGISTER_DATA.RESOLVED:
      return {
        ...state,
        ..._.omit(action.data, ['_id', 'facebook', 'status'])
      };
    case SAVE_STEP_ONE.RESOLVED:
      return {
        ...state,
        currentStep: 2,
      };
    default: return state;
  }
};

// Prepare form function
const prepareForm = (form, fields) => {
  const formData = {};
  fields.forEach((field) => {
    formData[field] = form[field];
  });
  return formData;
};

const prepareStepOneForm = (form) => {
  const fields = [
    'title',
    'firstName',
    'lastName',
    'nickname',
    'faculty',
    'department',
    'academicYear',
    'university',
    'sex',
    'birthdate'
  ];
  return prepareForm(form, fields);
};

const prepareStepTwoForm = (form) => {
  const fields = [
    'address',
    'province',
    'postalCode',
    'phone',
    'email',
    'blood',
    'foodAllergy',
    'medAllergy',
    'disease'
  ];
  return prepareForm(form, fields);
};


export const actions = {
  setField: (field, value) => ({
    type: SET_FIELD,
    field,
    value,
  }),
  getRegisterData: () => ({
    type: GET_REGISTER_DATA,
    promise: api.get('/users/me')
  }),
  proceedStepOne: (form) => {
    const formData = prepareStepOneForm(form);
    return {
      type: SAVE_STEP_ONE,
      promise: api.put('/registration/step1', formData)
    };
  }
};
