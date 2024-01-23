// NOTE: this is not a good theme structure, it's just an example so we can put it all to the test.

type ThemeSpacing = {
    none: 0;
    tiny: 2;
    minimum: 4;
    single: 8;
    singlePlus: 12;
    double: 16;
    triple: 24;
    quadruple: 32;
    quintuple: 40;
    sextuple: 48;
    septuple: 56;
    octuple: 64;
    nonuple: 72;
    decuple: 80;
    undecuple: 88;
    duodecuple: 96;
    tredecuple: 104;
    quattuordecuple: 112;
    quindecuple: 120;
    sexdecuple: 128;
    septendecuple: 136;
};

type ThemeRadius = {
    none: 0;
    tiny: 2;
    minimum: 4;
    single: 8;
    double: 16;
    triple: 24;
    full: '100%';
    roundedLarge: 28;
};

type ThemeFontSizes = {
    xxs: 10;
    xs: 12;
    sm: 14;
    md: 16;
    lg: 18;
    xl: 20;
    '2xl': 24;
    '3xl': 32;
    '4xl': 36;
    '5xl': 48;
    '6xl': 60;
};

type ThemeLineHeights = {
    xxs: 13.5;
    xs: 16.2;
    sm: 18.9;
    md: 21.6;
    lg: 24.3;
    xl: 27.0;
    '2xl': 32.4;
    '3xl': 43.2;
    '4xl': 48.6;
    '5xl': 64.8;
    '6xl': 81.0;
};

type ThemeColors = {
    primary: string;
    secondary: string;
    blue: string;
    blueDark: string;
    blueLight: string;
    informational: string;
    informationalLight: string;
    danger: string;
    dangerLight: string;
    dark: string;
    darkest: string;
    focusedBlue: string;
    grey: string;
    greySmoke: string;
    muted: string;
    light: string;
    lighter: string;
    medium: string;
    screenBackground: string;
    menuHover: string;
    success: string;
    successLight: string;
    warning: string;
    warningLight: string;
    white: string;
    translucent: string;
};

export type ThemeFonts = {
    body: string;
    boldCondensed: string;
    regular: string;
    regularItalic: string;
    semiBold: string;
    semiBoldCondensed: string;
    regularCondensed: string;
};

export type Theme = {
    colors: ThemeColors;
    spacing: ThemeSpacing;
    radius: ThemeRadius;
    fontSizes: ThemeFontSizes;
    lineHeights: ThemeLineHeights;
    fonts: ThemeFonts;
};

export const theme: Theme = {
    colors: {
        primary: '#1E4ED8',
        secondary: '#1E4ED8',
        blue: '#108AFC',
        blueDark: '#0E7BE0',
        blueLight: '#E0F0FF',
        informational: '#1E4ED8',
        informationalLight: '#EFF6FF',
        danger: '#B91C1C',
        dangerLight: '#FEF2F2',
        dark: '#666666',
        darkest: '#1C1C1C',
        focusedBlue: '#0E8BFF',
        grey: '#808080',
        greySmoke: '#D9D9D9',
        muted: '#D4D4D4',
        light: '#E5E5E5',
        lighter: '#F9F9F9',
        medium: '#9A9A9A',
        screenBackground: '#F3F7F9',
        menuHover: '#F3F3F3',
        success: '#15803D',
        successLight: '#F0FDF4',
        warning: '#C2410C',
        warningLight: '#FFF7ED',
        white: '#FFFFFF',
        translucent: 'rgba(255, 255, 255, 0.7)',
    },
    spacing: {
        none: 0,
        tiny: 2,
        minimum: 4,
        single: 8,
        singlePlus: 12,
        double: 16,
        triple: 24,
        quadruple: 32,
        quintuple: 40,
        sextuple: 48,
        septuple: 56,
        octuple: 64,
        nonuple: 72,
        decuple: 80,
        undecuple: 88,
        duodecuple: 96,
        tredecuple: 104,
        quattuordecuple: 112,
        quindecuple: 120,
        sexdecuple: 128,
        septendecuple: 136,
    },
    radius: {
        none: 0,
        tiny: 2,
        minimum: 4,
        single: 8,
        double: 16,
        triple: 24,
        full: '100%',
        roundedLarge: 28,
    },
    fontSizes: {
        xxs: 10,
        xs: 12,
        sm: 14,
        md: 16,
        lg: 18,
        xl: 20,
        '2xl': 24,
        '3xl': 32,
        '4xl': 36,
        '5xl': 48,
        '6xl': 60,
    },
    lineHeights: {
        xxs: 13.5,
        xs: 16.2,
        sm: 18.9,
        md: 21.6,
        lg: 24.3,
        xl: 27.0,
        '2xl': 32.4,
        '3xl': 43.2,
        '4xl': 48.6,
        '5xl': 64.8,
        '6xl': 81.0,
    },
    fonts: {
        body: 'Helvetica',
        boldCondensed: 'Helvetica',
        regular: 'Helvetica',
        regularItalic: 'Helvetica',
        semiBold: 'Helvetica',
        semiBoldCondensed: 'Helvetica',
        regularCondensed: 'Helvetica',
    },
};
