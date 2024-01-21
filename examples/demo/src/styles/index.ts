import 'react-native-blend';
import type { Theme } from './theme';

declare module 'react-native-blend' {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    export interface BlendThemes extends Theme {}
}
