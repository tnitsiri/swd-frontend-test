import { fallbackLng } from '@/app/i18n/settings';
import { LocaleEnum } from '@/enums/document.enum';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * ANCHOR App State
 * @date 20/04/2025 - 18:05:33
 *
 * @export
 * @interface AppState
 * @typedef {AppState}
 */
export interface AppState {
  locale: LocaleEnum;
}

/**
 * ANCHOR Initial State
 * @date 20/04/2025 - 18:05:24
 *
 * @type {AppState}
 */
const initialState: AppState = {
  locale: fallbackLng,
};

/**
 * ANCHOR App Slice
 * @date 20/04/2025 - 18:05:40
 *
 * @type {*}
 */
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setApp: (state, action: PayloadAction<Partial<AppState>>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setApp } = appSlice.actions;
