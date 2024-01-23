import React from 'react';
import { View } from 'react-native';

import { BlendButton } from './BlendButton';
import { Timer } from './Timer';

type BlendBenchmarkButtonProps = {
    boxes: number;
    onMeasureEnd(renderTime: number): void;
};

export const BlendBenchmarkButton: React.FunctionComponent<BlendBenchmarkButtonProps> = ({ onMeasureEnd, boxes }) => {
    const handlePress = () => {};

    return (
        <Timer onMeasureEnd={onMeasureEnd}>
            <View style={{ flexDirection: 'row', columnGap: 5 }}>
                {Array.from({ length: boxes }).map((_, index) => {
                    return (
                        <BlendButton
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
