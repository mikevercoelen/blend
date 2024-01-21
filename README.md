# `react-native-blend`

Improved StyleSheet for React Native with support for themes, variants.

Heavily inspired by [react-native-unistyles](https://github.com/jpudysz/react-native-unistyles)

# Installation

```
npm install react-native-blend --save
```

# 1. Setup Theme types (optional, skip if you are not using Typescript)

Create a file called `blend.d.ts` somewhere in your project (probably in a `src/types` folder) and add the following:

```typescript
import 'react-native-blend';

export type Theme = {
    colors: {
        primary: string;
        secondary: string;
    };
};

declare module 'react-native-blend' {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    export interface BlendTheme extends Theme {}
}
```

# 2. Setup Theme Provider

```tsx
import { BlendProvider } from 'react-native-blend';

const appTheme: Theme = {
    colors: {
        primary: '#000',
        secondary: '#fff',
    },
};

const App = () => {
    return (
        <BlendProvider theme={appTheme}>
            <MyApp />
        </BlendProvider>
    );
};
```
