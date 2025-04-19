import { ReactNode } from 'react';
import { Base } from './base';
import { getT } from '@/app/i18n';
import { LocaleEnum } from '@/enums/document.enum';

/**
 * ANCHOR Props
 * @date 19/04/2025 - 21:36:57
 *
 * @typedef {Props}
 */
type Props = {
  href?: string;
  children?: ReactNode;
};

/**
 * ANCHOR Link
 * @date 19/04/2025 - 21:39:38
 *
 * @async
 * @param {Props} props
 * @returns {unknown}
 */
const Link = async (props: Props) => {
  const { href, children } = props;
  const { i18n } = await getT();

  // resolved language
  const resolvedLanguage: LocaleEnum = i18n.resolvedLanguage as LocaleEnum;

  // ANCHOR Render
  return (
    <Base lng={resolvedLanguage} href={href}>
      {children}
    </Base>
  );
};

export { Link };
