import { darkTheme, lightTheme } from './theme';

type AppThemes = {
    light: typeof lightTheme;
    dark: typeof darkTheme;
};

declare module 'react-native-blend' {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    export interface BlendThemes extends AppThemes {}
}

export { lightTheme, darkTheme };
