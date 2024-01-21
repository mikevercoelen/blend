type ThemeSharedColors = {
    barbie: string;
    oak: string;
    sky: string;
    fog: string;
    aloes: string;
    blood: string;
};

type ThemeColors = {
    backgroundColor: string;
    typography: string;
    accent: string;
};

export type Theme = {
    colors: ThemeSharedColors & ThemeColors;
};

export const sharedColors: ThemeSharedColors = {
    barbie: '#ff9ff3',
    oak: '#1dd1a1',
    sky: '#48dbfb',
    fog: '#c8d6e5',
    aloes: '#00d2d3',
    blood: '#ff6b6b',
};

export const lightTheme: Theme = {
    colors: {
        ...sharedColors,
        backgroundColor: '#ffffff',
        typography: '#000000',
        accent: sharedColors.blood,
    },
};

export const darkTheme: Theme = {
    colors: {
        ...sharedColors,
        backgroundColor: '#000000',
        typography: '#ffffff',
        accent: sharedColors.barbie,
    },
};
