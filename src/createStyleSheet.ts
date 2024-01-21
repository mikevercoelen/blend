import type { StyleSheetAdvanced } from './types/stylesheet';

export const createStyleSheet = <Props extends object, S extends StyleSheetAdvanced<Props>>(stylesheet: S): S => {
    return stylesheet;
};
