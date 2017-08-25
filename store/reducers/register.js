import _ from 'lodash';

import actionCreator from '../../utils/actionCreator';
import api from '../../utils/api';

const registerAction = actionCreator('auth');
const GET_REGISTER_DATA = registerAction('GET_REGISTER_DATA', true);
const SET_FIELD = registerAction('SET_FIELD');
const SET_STEP = registerAction('SET_STEP');
const SAVE_STEP_ONE = registerAction('SAVE_STEP_ONE', true);
const SAVE_STEP_TWO = registerAction('SAVE_STEP_TWO', true);
const SAVE_STEP_THREE = registerAction('SAVE_STEP_THREE', true);
const SAVE_STEP_FOUR = registerAction('SAVE_STEP_FOUR', true);
const SAVE_STEP_FIVE = registerAction('SAVE_STEP_FIVE', true);
const CONFIRM_REGISTER = registerAction('CONFIRM_REGISTER', true);

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
  skype: '',
  // Step 3
  knowCamp: '',
  activities: '',
  // whyJoinYWC: '',
  // Step 4
  generalQuestions: ['', '', ''],
  // Step 5
  specialQuestions: ['', '', ''],
  error: null,
  errorValidation: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FIELD: {
      const newState = _.set(state, action.field, action.value);
      return {
        ...newState,
        generalQuestions: newState.generalQuestions.slice(0),
        specialQuestions: newState.specialQuestions.slice(0),
      };
    }
    case GET_REGISTER_DATA.RESOLVED:
      return {
        ...state,
        ..._.omit(action.data, ['_id', 'facebook', 'status', 'questions']),
        previewPicture: action.data.picture,
        generalQuestions: action.data.questions.generalQuestions.map(answer => answer.answer),
        specialQuestions: action.data.questions.specialQuestions[state.major].map(answer => answer.answer)
      };
    case SAVE_STEP_ONE.PENDING:
    case SAVE_STEP_TWO.PENDING:
    case SAVE_STEP_THREE.PENDING:
    case SAVE_STEP_FOUR.PENDING:
    case SAVE_STEP_FIVE.PENDING:
      return {
        ...state,
        saving: true,
        error: null,
        errorValidation: []
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
    case SAVE_STEP_THREE.RESOLVED:
      return {
        ...state,
        saving: false,
        currentStep: 4
      };
    case SAVE_STEP_FOUR.RESOLVED:
      return {
        ...state,
        saving: false,
        currentStep: 5
      };
    case SAVE_STEP_FIVE.RESOLVED:
      return {
        ...state,
        saving: false,
        currentStep: 6
      };
    case SAVE_STEP_ONE.REJECTED:
    case SAVE_STEP_TWO.REJECTED:
    case SAVE_STEP_THREE.REJECTED:
    case SAVE_STEP_FOUR.REJECTED:
    case SAVE_STEP_FIVE.REJECTED:
      return {
        ...state,
        saving: false,
        error: action.error,
        errorValidation: transformValidationError(action.error) // eslint-disable-line
      };
    case SET_STEP:
      return {
        ...state,
        currentStep: action.step
      };
    default: return state;
  }
};

const transformValidationError = (errors) => {
  if (Array.isArray(errors)) {
    return errors.map(error => error.param);
  }
  return [];
};

const prepareFormData = (form, fields) => {
  const data = new FormData();
  fields.forEach((field) => {
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
    'medAllergy',
    'skype'
  ];
  return _.pick(form, fields);
};

const prepareStepThreeForm = (form) => {
  const fields = [
    'knowCamp',
    'activities'
  ];
  return _.pick(form, fields);
};

const prepareStepFourForm = form => ({
  answers: form.generalQuestions
});

const prepareStepFiveForm = (form, major) => {
  if (major === 'programming' || major === 'marketing' || major === 'content') {
    const answers = form.specialQuestions;
    return { answers, major };
  } else if (major === 'design') {
    const answers = [form.specialQuestions[0], form.specialQuestions[1]];
    const file = form.specialQuestions[2];
    const data = new FormData();
    data.append('answers[0]', answers[0]);
    data.append('answers[1]', answers[1]);
    data.append('major', major);
    data.append('file', file);
    return data;
  }
  return null;
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
    return {
      type: SAVE_STEP_TWO,
      promise: api.put('/registration/step2', formData)
    };
  },
  proceedStepThree: (form) => {
    const formData = prepareStepThreeForm(form);
    return {
      type: SAVE_STEP_THREE,
      promise: api.put('/registration/step3', formData)
    };
  },
  proceedStepFour: (form) => {
    const formData = prepareStepFourForm(form);
    return {
      type: SAVE_STEP_FOUR,
      promise: api.put('/registration/step4', formData)
    };
  },
  proceedStepFive: (form, major) => {
    const formData = prepareStepFiveForm(form, major);
    return {
      type: SAVE_STEP_FIVE,
      promise: api.put('/registration/step5', formData)
    };
  },
  confirm: major => ({
    type: CONFIRM_REGISTER,
    promise: api.post('/registration/confirm', { major })
  }),
  navigateStep: step => ({
    type: SET_STEP,
    step
  })
};
