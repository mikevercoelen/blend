import React from 'react';
import { View } from 'react-native';

import { createStyleSheet, useStyles } from 'react-native-blend';

type BlendBoxProps = NonNullable<unknown>;

export const BlendBox: React.FunctionComponent<BlendBoxProps> = () => {
    const { styles } = useStyles(stylesheet);

    return <View style={styles.box} />;
};

const stylesheet = createStyleSheet((theme) => {
    return {
        box: {
            backgroundColor: theme.colors.accent,
            width: 10,
            height: 10,
        },
    };
});
