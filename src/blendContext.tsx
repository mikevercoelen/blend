import React, { createContext, useContext, useMemo, useState } from 'react';

import type { BlendContext as BlendContextType } from './types/context';
import type { BlendTheme } from './types/global';

export const BlendContext = createContext<BlendContextType | null>(null);

type ThemeProviderProps = {
    children: React.ReactNode;
    theme: BlendTheme;
};

export const useBlend = (): BlendContextType => {
    const context = useContext(BlendContext);

    if (context === null) {
        throw new Error('useBlend must be used within a BlendProvider');
    }

    return context;
};

export const useTheme = (): BlendTheme => {
    const { theme } = useBlend();

    return theme;
};

export const BlendProvider = ({ children, theme: initialTheme }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<BlendTheme>(initialTheme);

    const blendContext: BlendContextType = useMemo(() => {
        return {
            theme,
            setTheme,
        };
    }, [theme, setTheme]);

    return <BlendContext.Provider value={blendContext}>{children}</BlendContext.Provider>;
};
