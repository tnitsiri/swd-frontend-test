import classNames from 'classnames';
import styles from './styles.module.scss';

/**
 * ANCHOR Rhombus
 * @date 20/04/2025 - 11:14:46
 *
 * @returns {*}
 */
const Rhombus = () => {
  // ANCHOR Render
  return (
    <div className={styles.shape}>
      <div className={styles.rhombus}>
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

export default Rhombus;
