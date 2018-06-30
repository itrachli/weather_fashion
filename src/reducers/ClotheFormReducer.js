import {
  CLOTHE_UPDATE,
  CLOTHE_CREATE,
  CLOTHE_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  type: '',
  season: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLOTHE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case CLOTHE_CREATE:
      return INITIAL_STATE;
    case CLOTHE_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
