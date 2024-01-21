import React from 'react';
import { View } from 'react-native';

import { BlendFullBox } from './BlendFullBox';
import { Timer } from './Timer';

type BlendBenchmarkScreenProps = {
    boxes: number;
    onMeasureEnd(renderTime: number): void;
};

export const BlendWithAllFeaturesBenchmark: React.FunctionComponent<BlendBenchmarkScreenProps> = ({
    boxes,
    onMeasureEnd,
}) => {
    return (
        <Timer onMeasureEnd={onMeasureEnd}>
            <View style={{ flexDirection: 'row', columnGap: 5 }}>
                {Array.from({ length: boxes }).map((_, index) => {
                    return (
                        <BlendFullBox
                            key={index}
                            index={index}
                        />
                    );
                })}
            </View>
        </Timer>
    );
};
