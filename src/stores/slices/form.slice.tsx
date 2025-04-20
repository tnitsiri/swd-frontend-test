import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * ANCHOR Form State
 * @date 20/04/2025 - 18:02:10
 *
 * @export
 * @interface FormState
 * @typedef {FormState}
 */
export interface FormState {
  firstName: string;
}

/**
 * ANCHOR Initial State
 * @date 20/04/2025 - 18:01:59
 *
 * @type {FormState}
 */
const initialState: FormState = {
  firstName: '',
};

/**
 * ANCHOR Form Slice
 * @date 20/04/2025 - 18:01:48
 *
 * @type {*}
 */
export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setForm: (state, action: PayloadAction<Partial<FormState>>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setForm } = formSlice.actions;
