'use client';

import { ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from './store';
import { LocaleEnum } from '@/enums/document.enum';

/**
 * ANCHOR Props
 * @date 20/04/2025 - 18:06:02
 *
 * @typedef {Props}
 */
type Props = {
  locale: LocaleEnum;
  children: ReactNode;
};

/**
 * ANCHOR Store Provider
 * @date 20/04/2025 - 18:06:13
 *
 * @param {Props} props
 * @returns {*}
 */
const StoreProvider = (props: Props) => {
  const { locale, children } = props;

  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore({
      locale,
    });
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
