import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { DemoGroup } from '../components/DemoGroup';
import { DemoLink } from '../components/DemoLink';
import { ScreenName } from '../types/navigation';

import type { NavigationProps } from '../types/navigation';

export const HomeScreen = () => {
    const navigation = useNavigation<NavigationProps>();
    const { top } = useSafeAreaInsets();

    return (
        <View
            style={{
                ...styles.container,
                paddingTop: top,
            }}
        >
            <ScrollView contentContainerStyle={styles.list}>
                <View style={styles.titleContainer}>
                    <Text style={styles.unicorn}>🦄</Text>
                    <Text style={styles.header}>Welcome to react-native-blend!</Text>
                    <Text style={styles.text}>/ Select demo /</Text>
                </View>
                <DemoGroup title="General">
                    <DemoLink
                        description="Playground"
                        onPress={() => {
                            return navigation.navigate(ScreenName.Playground);
                        }}
                    />
                </DemoGroup>
                <DemoGroup title="Benchmarks">
                    <DemoLink
                        description="Benchmark"
                        onPress={() => {
                            return navigation.navigate(ScreenName.Benchmark);
                        }}
                    />
                    <DemoLink
                        description="Benchmark (all features)"
                        onPress={() => {
                            return navigation.navigate(ScreenName.BenchmarkAllFeatures);
                        }}
                    />
                </DemoGroup>
                <View style={styles.fakeSpacer} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff9ff3',
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    unicorn: {
        fontSize: 80,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#B53471',
        marginTop: 10,
    },
    text: {
        color: '#2f3542',
        fontWeight: 'bold',
    },
    list: {
        marginTop: 50,
        paddingHorizontal: 20,
    },
    fakeSpacer: {
        height: 100,
    },
});
