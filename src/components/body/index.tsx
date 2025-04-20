'use client';

import classNames from 'classnames';
import localFont from 'next/font/local';
import { ReactNode } from 'react';
import { HashLoader } from 'react-spinners';

const { Preloader, Placeholder } = require('react-preloading-screen');

/**
 * ANCHOR Geist Sans
 * @date 19/04/2025 - 21:05:19
 *
 * @type {*}
 */
const geistSans = localFont({
  src: '../../assets/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

/**
 * ANCHOR Geist Mono
 * @date 19/04/2025 - 21:05:06
 *
 * @type {*}
 */
const geistMono = localFont({
  src: '../../assets/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

/**
 * ANCHOR Props
 * @date 20/04/2025 - 16:36:30
 *
 * @typedef {Props}
 */
type Props = {
  children: ReactNode;
};

/**
 * ANCHOR Body
 * @date 20/04/2025 - 16:36:49
 *
 * @param {Props} props
 * @returns {*}
 */
const Body = (props: Props) => {
  const { children } = props;

  // ANCHOR Render
  return (
    <body
      className={classNames({
        [geistSans.variable]: true,
        [geistMono.variable]: true,
      })}>
      <Preloader>
        {children}
        <Placeholder>
          <HashLoader color="#FFA200" loading={true} size={50} />
        </Placeholder>
      </Preloader>
    </body>
  );
};

export default Body;
