import { LocaleEnum } from '@/enums/document.enum';
import { LabelInterface } from '@/interfaces/document.interface';

/**
 * ANCHOR Locale Label
 * @date 19/04/2025 - 22:17:19
 *
 * @type {{
 *   [key in LocaleEnum]: LabelInterface<LocaleEnum>;
 * }}
 */
export const LocaleLabel: {
  [key in LocaleEnum]: LabelInterface<LocaleEnum>;
} = {
  en: {
    key: LocaleEnum.English,
    title: 'English',
  },
  th: {
    key: LocaleEnum.Thai,
    title: 'ภาษาไทย',
  },
};
