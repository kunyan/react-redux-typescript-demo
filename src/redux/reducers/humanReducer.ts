import { ActionMeta, handleActions } from 'redux-actions';
import * as types from '../constants';
import { IActionHat, IError, IActionMeta, IActionGlasses, IActionUpperClothes, IActionLowerClothes, IActionShoes } from '../actions/humanAction';

export interface IHumanState {
  hat?: string;
  glasses?: string;
  upperClothes?: string;
  lowerClothes?: string;
  shoes?: string;

  isWearingHat: boolean;
  isWearingGlasses: boolean;
  isWearingUpperClothes: boolean;
  isWearingLowerClothes: boolean;
  isWearingShoes: boolean;
}

const initState: IHumanState = {
  hat: null,
  glasses: null,
  upperClothes: null,
  lowerClothes: null,
  shoes: null,

  isWearingHat: false,
  isWearingGlasses: false,
  isWearingUpperClothes: false,
  isWearingLowerClothes: false,
  isWearingShoes: false,
};

export const reducer = handleActions<IHumanState, IActionMeta>(
  {
    [types.REQUEST_HAT]: (state, action) => ({
      ...state,
      isWearingHat: true,
    }),
    [types.RECIEVE_HAT]: (state, action: ActionMeta<IActionHat, IActionMeta>) => ({
      ...state,
      isWearingHat: false,
      hat: action.payload.hat,
    }),
    [types.REQUEST_GLASSES]: (state, action) => ({
      ...state,
      isWearingGlasses: true,
    }),
    [types.RECIEVE_GLASSES]: (state, action: ActionMeta<IActionGlasses, IActionMeta>) => ({
      ...state,
      isWearingGlasses: false,
      glasses: action.payload.glasses,
    }),
    [types.REQUEST_UPPER_CLOTHES]: (state, action) => ({
      ...state,
      isWearingUpperClothes: true,
    }),
    [types.RECIEVE_UPPER_CLOTHES]: (state, action: ActionMeta<IActionUpperClothes, IActionMeta>) => ({
      ...state,
      isWearingUpperClothes: false,
      upperClothes: action.payload.upperClothes,
    }),
    [types.REQUEST_LOWER_CLOTHES]: (state, action) => ({
      ...state,
      isWearingLowerClothes: true,
    }),
    [types.RECIEVE_LOWER_CLOTHES]: (state, action: ActionMeta<IActionLowerClothes, IActionMeta>) => ({
      ...state,
      isWearingLowerClothes: false,
      lowerClothes: action.payload.lowerClothes,
    }),
    [types.REQUEST_SHOES]: (state, action) => ({
      ...state,
      isWearingShoes: true,
    }),
    [types.RECIEVE_SHOES]: (state, action: ActionMeta<IActionShoes, IActionMeta>) => ({
      ...state,
      isWearingShoes: false,
      shoes: action.payload.shoes,
    }),
  },
  initState,
);

