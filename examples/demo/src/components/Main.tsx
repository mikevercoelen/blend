import React from 'react';

import { BlendProvider } from 'react-native-blend';

import { theme } from '../styles/theme';

export type MainProps = {
    children: React.ReactNode;
};

export const Main = ({ children }: MainProps) => {
    return <BlendProvider theme={theme}>{children}</BlendProvider>;
};
