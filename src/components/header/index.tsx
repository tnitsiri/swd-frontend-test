import Switcher from '../switcher';
import styles from './styles.module.scss';
import { Col, Row } from 'antd';

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

  // ANCHOR Render
  return (
    <Row className={styles.header}>
      <Col flex={1} className={styles.topic}>
        <h1>{topic}</h1>
      </Col>
      <Col>
        <Switcher />
      </Col>
    </Row>
  );
};

export default Header;
