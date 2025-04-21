import { PersonDataSourceModel, PersonModel } from '@/models/person.model';
import { TFunction } from 'i18next';

/**
 * ANCHOR Person Data Source Mapping Util
 * @date 21/04/2025 - 09:17:35
 *
 * @export
 * @param {PersonModel} person
 * @param {TFunction<'form-table', undefined>} t
 * @returns {PersonDataSourceModel}
 */
export function PersonDataSourceMappingUtil(
  person: PersonModel,
  t: TFunction<'form-table', undefined>,
): PersonDataSourceModel {
  const dataSource: PersonDataSourceModel = {
    key: person.key,
    name: `${person.firstName} ${person.lastName}`,
    gender: t(person.gender),
    phoneNumber: `${person.countryCode}${person.mobilePhone}`,
    nationality: t(person.nationality),
  };

  return dataSource;
}
