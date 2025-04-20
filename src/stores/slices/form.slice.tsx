import {
  FormTableGenderEnum,
  FormTableNationalityEnum,
  FormTableTitleEnum,
} from '@/enums/form-table.enum';
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
  title: FormTableTitleEnum | null;
  firstName: string;
  lastName: string;
  birthday: string | null;
  nationality: FormTableNationalityEnum | null;
  citizenId: string;
  gender: FormTableGenderEnum | null;
  countryCode: string;
  mobilePhone: string;
  passportNo: string;
  expectedSalary: number | null;
}

/**
 * ANCHOR Initial State
 * @date 20/04/2025 - 18:01:59
 *
 * @type {FormState}
 */
const initialState: FormState = {
  title: null,
  firstName: '',
  lastName: '',
  birthday: null,
  nationality: null,
  citizenId: '',
  gender: null,
  countryCode: '',
  mobilePhone: '',
  passportNo: '',
  expectedSalary: null,
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
