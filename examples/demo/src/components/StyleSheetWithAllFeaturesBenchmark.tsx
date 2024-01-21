import React from 'react';
import { View } from 'react-native';

import { StyleSheetFullBox } from './StyleSheetFullBox';
import { Timer } from './Timer';

type StyleSheetBenchmarkScreenProps = {
    boxes: number;
    onMeasureEnd(renderTime: number): void;
};

export const StyleSheetWithAllFeaturesBenchmark: React.FunctionComponent<StyleSheetBenchmarkScreenProps> = ({
    onMeasureEnd,
    boxes,
}) => {
    return (
        <Timer onMeasureEnd={onMeasureEnd}>
            <View style={{ flexDirection: 'row', columnGap: 5 }}>
                {Array.from({ length: boxes }).map((_, index) => {
                    return (
                        <StyleSheetFullBox
                            key={index}
                            index={index}
                        />
                    );
                })}
            </View>
        </Timer>
    );
};
