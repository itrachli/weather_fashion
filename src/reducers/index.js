import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ClotheFormReducer from './ClotheFormReducer';
import ClotheReducer from './ClotheReducer';

export default combineReducers({
  auth: AuthReducer,
  clotheForm: ClotheFormReducer,
  clothes: ClotheReducer
});
