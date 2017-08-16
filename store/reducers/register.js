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
  phone: '',
  email: '',
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
        ..._.omit(action.data, ['_id', 'facebook', 'status']),
        previewPicture: action.data.picture

      };
    case SAVE_STEP_ONE.RESOLVED:
      return {
        ...state,
        currentStep: 2,
      };
    default: return state;
  }
};

const prepareFormData = (form, fields) => {
  const data = new FormData();
  console.log(form, fields);
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
    'phone',
    'email',
    'foodAllergy',
    'medAllergy',
    'disease'
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
    console.log(formData);
    return {
      type: SAVE_STEP_ONE,
      promise: api.put('/registration/step1', formData)
    };
  }
};
