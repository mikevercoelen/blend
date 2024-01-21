import React, { useMemo } from 'react';

import { ThemeProvider } from 'react-native-blend';

import { lightTheme } from '../styles';

import type { Theme } from '../styles/theme';

export type MainProps = {
    children: React.ReactNode;
};

export const Main = ({ children }: MainProps) => {
    const theme: Theme = useMemo(() => {
        return lightTheme;
    }, []);

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
