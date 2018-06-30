import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  CLOTHE_UPDATE,
  CLOTHE_CREATE,
  CLOTHE_FETCH_SUCCESS,
  CLOTHE_SAVE_SUCCESS,
} from './types';

export const clotheUpdate = ({ prop, value }) => ({
  type: CLOTHE_UPDATE,
  payload: { prop, value },
});

export const clotheCreate = ({ name, type, season }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/clothes`)
      .push({ name, type, season })
      .then(() => {
        dispatch({ type: CLOTHE_CREATE });
        Actions.clotheList({ type: 'reset' });
      });
  };
};

export const clotheFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/clothes`)
      .on('value', (snapshot) => {
        dispatch({ type: CLOTHE_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const clotheSave = ({
  name, type, season, uid,
}) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/clothes/${uid}`)
      .set({ name, type, season })
      .then(() => {
        dispatch({ type: CLOTHE_SAVE_SUCCESS });
        Actions.pop();
      //  Actions.clotheList({ type: 'reset' });
      });
  };
};

export const clotheDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/clothes/${uid}`)
      .remove()
      .then(() => {
        Actions.pop();
      //  Actions.clotheList({ type: 'reset' });
      });
  };
};
