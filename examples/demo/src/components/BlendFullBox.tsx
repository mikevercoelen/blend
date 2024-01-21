import React from 'react';
import { View } from 'react-native';

import { createStyleSheet, useStyles } from 'react-native-blend';

type BlendFullBoxProps = {
    index: number;
};

export const BlendFullBox: React.FunctionComponent<BlendFullBoxProps> = ({ index }) => {
    const { styles } = useStyles(stylesheet, {
        index,
    });

    return <View style={styles.box} />;
};

type StyleProps = {
    index: number;
};

const stylesheet = createStyleSheet((theme, props: StyleProps) => {
    return {
        box: {
            backgroundColor: props.index % 2 === 0 ? theme.colors.accent : theme.colors.barbie,
            width: 10,
            height: 10,
        },
    };
});
