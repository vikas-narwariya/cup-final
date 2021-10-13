import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const asignin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.asignIn(formData);

    dispatch({ type: AUTH, data });

    router.push('/admindashboard');
  } catch (error) {
    console.log(error);
  }
};

export const asignup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.asignUp(formData);

    dispatch({ type: AUTH, data });

    router.push('/admindashboard');
  } catch (error) {
    console.log(error);
  }
};
