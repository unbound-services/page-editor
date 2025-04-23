import { UUID } from "crypto";

type OptionMenu = any;
interface IOptionMenusState {
  menus: { [key: string]: OptionMenu },
}

type ActionReducer<S, A> = (state: S, action: A) => S;

type SetOptionMenuAction = {
  type: "SET_OPTION_MENU",
  payload: {
    optionMenu: any;
    componentUUID: UUID;
  }
}

const setOptionMenu: ActionReducer<IOptionMenusState, SetOptionMenuAction>
  = (state, action) => {
  let newState = { ...state };
  newState.menus = { ...state.menus };
  const { optionMenu, componentUUID } = action.payload;
  newState.menus[componentUUID] = optionMenu;
  return newState;
};

type ClearMenusAction = {
  type: "CLEAR_MENUS",
}

const clearMenus: ActionReducer<IOptionMenusState, ClearMenusAction>
  = (state, action) => {
  return { menus: {} };
};

export type OptionMenuStateAction = SetOptionMenuAction | ClearMenusAction;

const reducerMap = {
  "SET_OPTION_MENU" : setOptionMenu,
  "CLEAR_MENUS" : clearMenus,
};

export const optionMenuReducer = (state: IOptionMenusState, action: OptionMenuStateAction) => {
  const reducer = reducerMap[action.type];
  const newState = {...state};
  /*@ts-ignore I'm not worried about action being never*/
  if (reducer) return reducer(newState, action);
  return state;
};

