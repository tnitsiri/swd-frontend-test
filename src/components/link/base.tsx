import Link from 'next/link';
import { LocaleEnum } from '@/enums/document.enum';
import { ReactNode } from 'react';
import { fallbackLng } from '@/app/i18n/settings';

/**
 * ANCHOR Props
 * @date 19/04/2025 - 21:34:41
 *
 * @typedef {Props}
 */
type Props = {
  lng?: LocaleEnum;
  href?: string;
  children: ReactNode;
};

/**
 * ANCHOR Base
 * @date 19/04/2025 - 21:34:51
 *
 * @param {Props} props
 * @returns {*}
 */
const Base = (props: Props) => {
  const { lng = fallbackLng, href, children } = props;

  // ANCHOR Render
  return <Link href={`/${lng}${href}`}>{children}</Link>;
};

export { Base };
