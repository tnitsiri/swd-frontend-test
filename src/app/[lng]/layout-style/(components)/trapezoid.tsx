import classNames from 'classnames';
import styles from './styles.module.scss';

/**
 * ANCHOR Trapezoid
 * @date 20/04/2025 - 10:24:08
 *
 * @returns {*}
 */
const Trapezoid = () => {
  // ANCHOR Render
  return (
    <div className={styles.shape}>
      <div className={styles.trapezoid}>
        <div
          className={classNames({
            [styles.slice]: true,
            [styles.left]: true,
          })}
        />
        <div
          className={classNames({
            [styles.slice]: true,
            [styles.right]: true,
          })}
        />
      </div>
    </div>
  );
};

export default Trapezoid;
