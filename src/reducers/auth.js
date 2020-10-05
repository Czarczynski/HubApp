import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../actions/types';

import AsyncStorage from '@react-native-community/async-storage';

const initialState = {
  token: AsyncStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  user: null,
  isRegistered: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
        isRegistered: false,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
        isRegistered: false,
      };
    case LOGIN_SUCCESS:
      AsyncStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
        isRegistered: false,
      };
    case REGISTER_SUCCESS:
      AsyncStorage.setItem('token', action.payload.token);
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        isRegistered: true,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      AsyncStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        isRegistered: false,
      };
    default:
      return state;
  }
}
