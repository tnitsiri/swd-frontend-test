import classNames from 'classnames';
import styles from './styles.module.scss';
import { LayoutStyleShapeTriangleEnum } from '@/enums/layout-style.enum';

/**
 * ANCHOR Props
 * @date 20/04/2025 - 09:33:25
 *
 * @typedef {Props}
 */
type Props = {
  title: string;
  shapes: LayoutStyleShapeTriangleEnum[];
  onClick: () => void;
};

/**
 * ANCHOR Triangle
 * @date 20/04/2025 - 09:33:33
 *
 * @param {Props} props
 * @returns {*}
 */
const Triangle = (props: Props) => {
  const { title, shapes, onClick } = props;

  // ANCHOR Render
  return (
    <div className={styles.shape} onClick={onClick}>
      {shapes.map((shape) => {
        return (
          <div
            key={shape}
            className={classNames({
              [styles.triangle]: true,
              [styles[shape]]: true,
            })}
          />
        );
      })}
      <div className={styles.title}>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default Triangle;
