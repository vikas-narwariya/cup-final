import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import admin from './admin';
import teacher from './teacher';


export const reducers = combineReducers({ posts, auth, admin, teacher });
