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

export type OptionMenuStateAction = SetOptionMenuAction;

const reducerMap = {
  "SET_OPTION_MENU" : setOptionMenu,
};

export const optionMenuReducer = (state: IOptionMenusState, action: OptionMenuStateAction) => {
  const reducer = reducerMap[action.type];
  const newState = {...state};
  if (reducer) return reducer(newState, action);
  return state;
};

