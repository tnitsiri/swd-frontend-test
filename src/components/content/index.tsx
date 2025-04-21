import styles from '@/assets/styles/page.module.scss';
import { Content } from 'antd/es/layout/layout';
import { ReactNode } from 'react';

/**
 * ANCHOR Props
 * @date 21/04/2025 - 09:28:34
 *
 * @typedef {Props}
 */
type Props = {
  children: ReactNode;
};

/**
 * ANCHOR Index
 * @date 21/04/2025 - 09:28:43
 *
 * @param {Props} props
 * @returns {*}
 */
const Index = (props: Props) => {
  const { children } = props;

  // ANCHOR Render
  return <Content className={styles.content}>{children}</Content>;
};

export default Index;
