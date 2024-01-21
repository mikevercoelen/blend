import React, { createContext } from 'react';

import type { BlendTheme } from './types/blend';

export const ThemeContext = createContext<BlendTheme | null>(null);

type ThemeProviderProps = {
    children: React.ReactNode;
    theme: BlendTheme;
};

export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};
