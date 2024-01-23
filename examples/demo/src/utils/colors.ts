import tinycolor from 'tinycolor2';

export const darkenColor = (hexColor: string, amount: number): string => {
    return tinycolor(hexColor).darken(amount).toHexString();
};

export const lightenColor = (hexColor: string, amount: number): string => {
    return tinycolor(hexColor).lighten(amount).toHexString();
};

export const hexToRgba = (hex: string, alpha = 1): string => {
    return tinycolor(hex).setAlpha(alpha).toRgbString();
};

export const getTextColorForBackgroundColor = (backgroundColor: string, darkColor: string, lightColor: string) => {
    const brightness = tinycolor(backgroundColor).getBrightness();

    return brightness > 128 ? darkColor : lightColor;
};
