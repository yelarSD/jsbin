import {
  SET_THEME,
  SET_OPTION,
  SET_SOURCE,
  TOGGLE_THEME,
} from '../actions/editor';

import * as MODE from '../lib/cm-modes';

const lightTheme = 'jsbin';
const darkTheme = 'monokai';

const defaultState = {
  theme: lightTheme,
  lineWrapping: true,
  lineNumbers: true,
  vertical: false,
  source: MODE.HTML,
};

export default function reducer(state = defaultState, action) {
  const { type } = action;

  if (type === SET_SOURCE) {
    return { ...state, source: action.source };
  }

  if (type === TOGGLE_THEME) {
    return {
      ...state,
      theme: state.theme === lightTheme ? darkTheme : lightTheme,
    };
  }

  if (type === SET_OPTION) {
    return { ...state, [action.option]: action.value };
  }

  if (type === SET_THEME) {
    return { ...state, theme: action.theme };
  }

  return state;
}
