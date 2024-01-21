import type { Dispatch, SetStateAction } from 'react';

import type { BlendTheme } from './global';

export type BlendContext = {
    theme: BlendTheme;
    setTheme: Dispatch<SetStateAction<BlendTheme>>;
};
