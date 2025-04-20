import { configureStore } from '@reduxjs/toolkit';
import { LocaleEnum } from '@/enums/document.enum';
import { appSlice } from './slices/app.slice';
import { formSlice } from './slices/form.slice';

/**
 * ANCHOR Make Store Props
 * @date 20/04/2025 - 18:07:01
 *
 * @typedef {MakeStoreProps}
 */
type MakeStoreProps = {
  locale: LocaleEnum;
};

/**
 * ANCHOR Make Store
 * @date 20/04/2025 - 18:07:18
 *
 * @param {MakeStoreProps} props
 * @returns {*}
 */
export const makeStore = (props: MakeStoreProps) => {
  const { locale } = props;

  return configureStore({
    reducer: {
      [appSlice.name]: appSlice.reducer,
      [formSlice.name]: formSlice.reducer,
    },
    preloadedState: {
      [appSlice.name]: {
        locale,
      },
    },
  });
};

/**
 * ANCHOR App Store
 * @date 20/04/2025 - 18:08:02
 *
 * @export
 * @typedef {AppStore}
 */
export type AppStore = ReturnType<typeof makeStore>;

/**
 * ANCHOR Root State
 * @date 20/04/2025 - 18:08:08
 *
 * @export
 * @typedef {RootState}
 */
export type RootState = ReturnType<AppStore['getState']>;

/**
 * ANCHOR App Dispatch
 * @date 20/04/2025 - 18:08:13
 *
 * @export
 * @typedef {AppDispatch}
 */
export type AppDispatch = AppStore['dispatch'];
