import {
  FormTableGenderEnum,
  FormTableNationalityEnum,
  FormTableTitleEnum,
} from '@/enums/form-table.enum';

/**
 * ANCHOR Person Model
 * @date 21/04/2025 - 06:51:26
 *
 * @export
 * @interface PersonModel
 * @typedef {PersonModel}
 */
export interface PersonModel {
  key: string;
  title: FormTableTitleEnum;
  firstName: string;
  lastName: string;
  birthday: string;
  nationality: FormTableNationalityEnum;
  citizenId?: string | null;
  gender: FormTableGenderEnum;
  countryCode: string;
  mobilePhone: string;
  passportNo?: string | null;
  expectedSalary: number | null;
}

/**
 * ANCHOR Person Data Source Model
 * @date 21/04/2025 - 08:00:31
 *
 * @export
 * @interface PersonDataSourceModel
 * @typedef {PersonDataSourceModel}
 */
export interface PersonDataSourceModel {
  key: string;
  name: string;
  gender: string;
  phoneNumber: string;
  nationality: string;
}
