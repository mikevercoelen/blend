import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useTheme } from './blendContext';

import type { BlendTheme } from './types/global';
import type { StyleSheetAdvanced } from './types/stylesheet';

export type UseStylesOutput<Props extends object, S extends StyleSheetAdvanced<Props>> = {
    theme: BlendTheme;
    styles: ReturnType<S>;
};

const defaultProps = {};

export const useStyles = <Props extends object, S extends StyleSheetAdvanced<Props>>(
    stylesheet: S,
    props: Props = defaultProps as Props
): UseStylesOutput<Props, S> => {
    const theme = useTheme();
    const cachedProps = useMemo(() => {
        return props;
    }, [props]);

    const styles = useMemo(() => {
        const rawStyles = stylesheet(theme, cachedProps);

        return StyleSheet.create(rawStyles);
    }, [stylesheet, theme, cachedProps]);

    return {
        theme,
        styles: styles as any,
    };
};
