import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
// import ping, { pingEpi }

export const rootEpic = combineEpics();

export const rootReducer = combineReducers({});
