import { createAction } from 'redux-actions';
import * as types from '../constants';

export interface IActionMeta {
  meta: string;
}
export interface IActionHat {
  hat: string;
}

export interface IActionGlasses {
  glasses: string;
}

export interface IActionUpperClothes {
  upperClothes: string;
}

export interface IActionLowerClothes {
  lowerClothes: string;
}

export interface IActionShoes {
  shoes: string;
}

export interface IError {
  error?: any;
}

const requestHat = createAction(types.REQUEST_HAT);
const recieveHat = createAction<IActionHat, IActionMeta>(
  types.RECIEVE_HAT,
  (hat: string) => ({ hat }),
  (meta) => ({ meta }),
);

const requestGlasses = createAction(types.REQUEST_GLASSES);
const recieveGlasses = createAction<IActionGlasses, IActionMeta>(
  types.RECIEVE_GLASSES,
  (glasses: string) => ({ glasses }),
  (meta) => ({ meta }),
);

const requestUpperClothes = createAction(types.REQUEST_UPPER_CLOTHES);
const recieveUpperClothes = createAction<IActionUpperClothes, IActionMeta>(
  types.RECIEVE_UPPER_CLOTHES,
  (upperClothes: string) => ({
    upperClothes,
  }),
  (meta) => ({ meta }),
);

const requestLowerClothes = createAction(types.REQUEST_LOWER_CLOTHES);
const recieveLowerClothes = createAction<IActionLowerClothes, IActionMeta>(
  types.RECIEVE_LOWER_CLOTHES,
  (lowerClothes: string) => ({
    lowerClothes,
  }),
  (meta) => ({ meta }),
);

const requestShoes = createAction(types.REQUEST_SHOES);
const recieveShoes = createAction<IActionShoes, IActionMeta>(
  types.RECIEVE_SHOES,
  (shoes: string) => ({ shoes }),
  (meta) => ({ meta }),
);

const requestPutAll = createAction(types.REQUEST_PUT_ALL);
const recievePutAll = createAction<
  IActionHat & IActionGlasses & IActionUpperClothes & IActionLowerClothes & IActionShoes,
  IActionMeta
>(
  types.RECIEVE_PUT_ALL,
  (hat: string, glasses: string, upperClothes: string, lowerClothes: string, shoes: string) => ({
    hat,
    glasses,
    upperClothes,
    lowerClothes,
    shoes,
  }),
  (meta) => ({ meta }),
);

export function wearHat(hat: string) {
  return async (dispatch: any) => {
    dispatch(requestHat());
    dispatch(recieveHat(hat));
  };
}

export function wearGlasses(glasses: string) {
  return async (dispatch: any) => {
    dispatch(requestGlasses());
    dispatch(recieveGlasses(glasses));
  };
}

export function wearUpperClothes(clothes: string) {
  return async (dispatch: any) => {
    dispatch(requestUpperClothes());
    dispatch(recieveUpperClothes(clothes));
  };
}

export function wearLowerClothes(clothes: string) {
  return async (dispatch: any) => {
    dispatch(requestLowerClothes());
    dispatch(recieveLowerClothes(clothes));
  };
}

export function wearShoes(shoes: string) {
  return async (dispatch: any) => {
    dispatch(requestShoes());
    dispatch(recieveShoes(shoes));
  };
}

export function putAll(hat: string, glasses: string, upperClothes: string, lowerClothes: string, shoes: string) {
  return async (dispatch: any) => {
    dispatch(requestPutAll());
    dispatch(recievePutAll(hat, glasses, upperClothes, lowerClothes, shoes));
  };
}
