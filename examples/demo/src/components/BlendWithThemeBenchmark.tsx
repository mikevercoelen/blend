import React from 'react';
import { View } from 'react-native';

import { BlendBox } from './BlendBox';
import { Timer } from './Timer';

type BlendBenchmarkScreenProps = {
    boxes: number;
    onMeasureEnd(renderTime: number): void;
};

export const BlendWithThemeBenchmark: React.FunctionComponent<BlendBenchmarkScreenProps> = ({
    boxes,
    onMeasureEnd,
}) => {
    return (
        <Timer onMeasureEnd={onMeasureEnd}>
            <View style={{ flexDirection: 'row', columnGap: 5 }}>
                {Array.from({ length: boxes }).map((_, index) => {
                    return <BlendBox key={index} />;
                })}
            </View>
        </Timer>
    );
};
