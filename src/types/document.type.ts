import { LocaleEnum } from '@/enums/document.enum';
import { ReactNode } from 'react';

/**
 * ANCHOR Layout Props
 * @date 19/04/2025 - 21:07:00
 *
 * @export
 * @typedef {LayoutProps}
 */
export type LayoutProps = {
  children: ReactNode;
  params: Promise<{
    lng: LocaleEnum;
  }>;
};

/**
 * ANCHOR Page Params
 * @date 19/04/2025 - 21:07:07
 *
 * @export
 * @typedef {PageParams}
 * @template [P=unknown]
 */
export type PageParams<P = unknown> = {
  params: Promise<P> &
    Promise<{
      lng: LocaleEnum;
    }>;
};

/**
 * ANCHOR Page Props
 * @date 19/04/2025 - 21:07:13
 *
 * @export
 * @typedef {PageProps}
 * @template [P=unknown]
 */
export type PageProps<P = unknown> = PageParams<P>;
