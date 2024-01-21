import { useContext } from 'react';

import { ThemeContext } from './themeContext';

import type { BlendTheme } from './types/blend';

export const useTheme = () => {
    const context = useContext<BlendTheme | null>(ThemeContext);

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (context === null) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
};
