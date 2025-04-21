'use client';

import Switcher from '../switcher';
import styles from './styles.module.scss';
import { Col, Row } from 'antd';
import { useT } from '@/app/i18n/client';
import { Link } from '../link/client';

/**
 * ANCHOR Props
 * @date 20/04/2025 - 08:24:49
 *
 * @typedef {Props}
 */
type Props = {
  topic?: string;
};

/**
 * ANCHOR Header
 * @date 20/04/2025 - 08:25:03
 *
 * @param {Props} props
 * @returns {*}
 */
const Header = (props: Props) => {
  const { topic } = props;
  const { t } = useT();

  // ANCHOR Render
  return (
    <Row className={styles.header}>
      <Col flex={1} className={styles.topic}>
        {topic && (
          <Row align="middle" gutter={25}>
            <Col>
              <h1>{topic}</h1>
            </Col>
            <Col>|</Col>
            <Col>
              <Link href="/">{t('Home')}</Link>
            </Col>
          </Row>
        )}
      </Col>
      <Col>
        <Switcher />
      </Col>
    </Row>
  );
};

export default Header;
