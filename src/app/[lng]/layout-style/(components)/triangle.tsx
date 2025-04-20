import classNames from 'classnames';
import styles from './styles.module.scss';
import { ShapeTriangleEnum } from '@/enums/shape.enum';

/**
 * ANCHOR Props
 * @date 20/04/2025 - 09:33:25
 *
 * @typedef {Props}
 */
type Props = {
  shape: ShapeTriangleEnum;
};

/**
 * ANCHOR Triangle
 * @date 20/04/2025 - 09:33:33
 *
 * @param {Props} props
 * @returns {*}
 */
const Triangle = (props: Props) => {
  const { shape } = props;

  // ANCHOR Render
  return (
    <div className={styles.shape}>
      <div
        className={classNames({
          [styles.triangle]: true,
          [styles[shape]]: true,
        })}
      />
    </div>
  );
};

export default Triangle;
