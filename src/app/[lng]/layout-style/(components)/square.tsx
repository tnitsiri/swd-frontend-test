import styles from './styles.module.scss';

/**
 * ANCHOR Square
 * @date 20/04/2025 - 14:07:44
 *
 * @returns {*}
 */
const Square = () => {
  // ANCHOR Render
  return (
    <div className={styles.shape}>
      <div className={styles.square} />
    </div>
  );
};

export default Square;
