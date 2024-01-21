import { useLayoutEffect, useState } from 'react';
import type React from 'react';
import type { PropsWithChildren } from 'react';

type TimerProps = {
    onMeasureEnd: (time: number) => void;
};

export const Timer: React.FunctionComponent<PropsWithChildren<TimerProps>> = ({ children, onMeasureEnd }) => {
    const [start] = useState(window.performance.now());

    useLayoutEffect(() => {
        onMeasureEnd(window.performance.now() - start);
    }, []);

    return children;
};
