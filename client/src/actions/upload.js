import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const upload = (formData, router) => async (dispatch) => {
    try {
      const { data } = await api.Upload(formData);
  
      dispatch({ type: AUTH, data });
  
      router.push('/uploads/uploadassignment');
    } catch (error) {
      console.log(error);
    }
  };