import { combineReducers, Reducer } from 'redux';
import { IHumanState, reducer as humanDetails } from './humanReducer';

export interface IStateReduced {
  humanDetails: IHumanState;
}
export const mappedReducers = {
  humanDetails,
};

export const rootReducer = combineReducers(mappedReducers);
