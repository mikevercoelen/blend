import React, { useEffect, useRef } from 'react';
import type { ImageStyle, StyleProp } from 'react-native';
import { Animated, Easing } from 'react-native';

import { createStyleSheet, useStyles } from 'react-native-blend';

const IMG_SPINNER_DARK =
    'data:image/png;base64,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';

export type SpinnerProps = {
    size?: number;
    style?: StyleProp<ImageStyle>;
};

export const Spinner = ({ size = 24, style }: SpinnerProps) => {
    const rotation = useRef(new Animated.Value(0)).current;
    const { styles } = useStyles(stylesheet, { size });

    useEffect(() => {
        Animated.loop(
            Animated.timing(rotation, {
                toValue: 1,
                duration: 600,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start();

        return () => {
            return rotation.setValue(0);
        };
    }, [rotation]);

    const interpolatedRotation = rotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    const animatedStyle = {
        transform: [{ rotate: interpolatedRotation }],
    };

    return (
        <Animated.Image
            style={[styles.component, style, animatedStyle]}
            source={{ uri: IMG_SPINNER_DARK }}
        />
    );
};

type SpinnerStyleProps = {
    size?: number;
};

const stylesheet = createStyleSheet((_theme, props: SpinnerStyleProps) => {
    return {
        component: {
            width: props.size,
            height: props.size,
        },
    };
});
