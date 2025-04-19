/**
 * ANCHOR Label Interface
 * @date 19/04/2025 - 22:16:47
 *
 * @export
 * @interface LabelInterface
 * @typedef {LabelInterface}
 * @template T
 */
export interface LabelInterface<T> {
  key: T;
  title: string;
}
