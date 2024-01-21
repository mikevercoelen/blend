import React from 'react';
import { StyleSheet, View } from 'react-native';

export const StyleSheetBox = () => {
    return <View style={styles.box} />;
};

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'red',
        width: 10,
        height: 10,
    },
});
