'use client';

import { ReactNode } from 'react';
import { Base } from './base';
import { useT } from '@/app/i18n/client';
import { LocaleEnum } from '@/enums/document.enum';

/**
 * ANCHOR Props
 * @date 19/04/2025 - 21:27:40
 *
 * @typedef {Props}
 */
type Props = {
  href?: string;
  children?: ReactNode;
};

/**
 * ANCHOR Link
 * @date 19/04/2025 - 21:28:32
 *
 * @param {Props} props
 * @returns {*}
 */
const Link = (props: Props) => {
  const { href, children } = props;
  const { i18n } = useT();

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
