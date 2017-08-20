import _ from 'lodash';

import actionCreator from '../../utils/actionCreator';
import api from '../../utils/api';

const registerAction = actionCreator('auth');
const GET_REGISTER_DATA = registerAction('GET_REGISTER_DATA', true);
const SET_FIELD = registerAction('SET_FIELD');
const SET_STEP = registerAction('SET_STEP');
const SAVE_STEP_ONE = registerAction('SAVE_STEP_ONE', true);
const SAVE_STEP_TWO = registerAction('SAVE_STEP_TWO', true);

const initialState = {
  saving: false,
  major: '',
  currentStep: 1,
  // Step 1
  title: '',
  firstName: '',
  lastName: '',
  firstNameEN: '',
  lastNameEN: '',
  nickname: '',
  birthdate: '',
  sex: '',
  blood: '',
  religion: '',
  university: '',
  academicYear: '',
  faculty: '',
  department: '',
  picture: {},
  previewPicture: '',
  // Step 2
  address: '',
  province: '',
  postalCode: '',
  email: '',
  phone: '',
  emergencyPhone: '',
  emergencyPhoneRelated: '',
  shirtSize: '',
  food: '',
  disease: '',
  med: '',
  foodAllergy: '',
  medAllergy: '',
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
        ..._.omit(action.data, ['_id', 'facebook', 'status']),
        previewPicture: action.data.picture

      };
    case SAVE_STEP_ONE.PENDING:
    case SAVE_STEP_TWO.PENDING:
      return {
        ...state,
        saving: true
      };
    case SAVE_STEP_ONE.RESOLVED:
      return {
        ...state,
        saving: false,
        currentStep: 2,
      };
    case SAVE_STEP_TWO.RESOLVED:
      return {
        ...state,
        saving: false,
        currentStep: 3
      };
    case SET_STEP:
      return {
        ...state,
        currentStep: action.step
      };
    default: return state;
  }
};

const prepareFormData = (form, fields) => {
  const data = new FormData();
  fields.forEach((field) => {
    console.log(field, form[field]);
    if (field === 'picture') {
      data.append('profilePic', form[field]);
    } else {
      data.append(field, form[field]);
    }
  });
  // console.log(data);
  return data;
};

const prepareStepOneForm = (form) => {
  const fields = [
    'title',
    'firstName',
    'lastName',
    'firstNameEN',
    'lastNameEN',
    'nickname',
    'birthdate',
    'sex',
    'blood',
    'religion',
    'university',
    'academicYear',
    'faculty',
    'department',
    'picture'
  ];
  return prepareFormData(form, fields);
};

const prepareStepTwoForm = (form) => {
  const fields = [
    'address',
    'province',
    'postalCode',
    'email',
    'phone',
    'emergencyPhone',
    'emergencyPhoneRelated',
    'shirtSize',
    'food',
    'disease',
    'med',
    'foodAllergy',
    'medAllergy'
  ];
  return _.pick(form, fields);
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
  },
  proceedStepTwo: (form) => {
    const formData = prepareStepTwoForm(form);
    console.log('step two form', formData);
    return {
      type: SAVE_STEP_TWO,
      promise: api.put('/registration/step2', formData)
    };
  },
  navigateStep: step => ({
    type: SET_STEP,
    step
  })
};
