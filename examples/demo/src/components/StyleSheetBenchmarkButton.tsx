import React from 'react';
import { View } from 'react-native';

import { StyleSheetButton } from './StyleSheetButton';
import { Timer } from './Timer';

type StyleSheetBenchmarkButtonProps = {
    boxes: number;
    onMeasureEnd(renderTime: number): void;
};

export const StyleSheetBenchmarkButton: React.FunctionComponent<StyleSheetBenchmarkButtonProps> = ({
    onMeasureEnd,
    boxes,
}) => {
    const handlePress = () => {};

    return (
        <Timer onMeasureEnd={onMeasureEnd}>
            <View style={{ flexDirection: 'row', columnGap: 5 }}>
                {Array.from({ length: boxes }).map((_, index) => {
                    return (
                        <StyleSheetButton
                            title="hello"
                            onPress={handlePress}
                            key={index}
                        />
                    );
                })}
            </View>
        </Timer>
    );
};
