import React from 'react';
import { Pressable, Text } from 'react-native';

import { useStyles, createStyleSheet } from 'react-native-blend';

type ButtonProps = {
    children: React.ReactNode;
};

export const Button = ({ children }: ButtonProps) => {
    const { styles } = useStyles(stylesheet, {
        isDisabled: false,
        isPrimary: false,
    });

    return (
        <Pressable style={styles.component}>
            <Text style={styles.label}>{children}</Text>
        </Pressable>
    );
};

// Define the StyleProps type
type StyleProps = {
    isDisabled: boolean;
    isPrimary: boolean;
};

// Usage example with generic props type
const stylesheet = createStyleSheet((theme, props: StyleProps) => {
    return {
        component: {
            backgroundColor: theme.colors.backgroundColor,
            opacity: props.isDisabled ? 0.5 : 1,
        },
        label: {
            fontSize: 14,
        },
    };
});
