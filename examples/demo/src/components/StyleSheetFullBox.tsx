import React from 'react';
import { StyleSheet, View } from 'react-native';

type StyleSheetFullBoxProps = {
    index: number;
};

export const StyleSheetFullBox: React.FunctionComponent<StyleSheetFullBoxProps> = ({ index }) => {
    return <View style={styles(index).box} />;
};

const styles = (index: number) => {
    return StyleSheet.create({
        box: {
            backgroundColor: index % 2 === 0 ? 'red' : 'pink',
            width: 10,
            height: 10,
        },
    });
};
