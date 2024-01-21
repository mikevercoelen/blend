import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

import type { BlendTheme } from './blend';

export type AllAvailableStyles = ViewStyle & TextStyle & ImageStyle;

export type AllAvailableKeys = keyof (ViewStyle & TextStyle & ImageStyle);

export type BlendValues = {
    [propName in AllAvailableKeys]?: AllAvailableStyles[propName];
};

export type StyleSheet = Record<string, BlendValues>;

export type StyleSheetAdvanced<Props extends object> = (theme: BlendTheme, props: Props) => StyleSheet;
