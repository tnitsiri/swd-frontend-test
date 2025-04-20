import { useDispatch, useSelector, useStore } from 'react-redux';
import type { RootState, AppDispatch, AppStore } from './store';

/**
 * ANCHOR Use App Dispatch
 * @date 20/04/2025 - 18:02:46
 *
 * @type {*}
 */
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

/**
 * ANCHOR Use App Selector
 * @date 20/04/2025 - 18:02:51
 *
 * @type {*}
 */
export const useAppSelector = useSelector.withTypes<RootState>();

/**
 * ANCHOR Use App Store
 * @date 20/04/2025 - 18:02:58
 *
 * @type {*}
 */
export const useAppStore = useStore.withTypes<AppStore>();
