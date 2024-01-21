import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Main } from './components/Main';
import { BenchmarkAllFeaturesScreen } from './screens/BenchmarkAllFeaturesScreen';
import { BenchmarkScreen } from './screens/BenchmarkScreen';
import { HomeScreen } from './screens/HomeScreen';
import { PlaygroundScreen } from './screens/PlaygroundScreen';
import { ScreenName } from './types/navigation';

import type { RootStackParams } from './types/navigation';

const Stack = createNativeStackNavigator<RootStackParams>();

export const App: React.FunctionComponent = () => {
    return (
        <Main>
            <SafeAreaProvider>
                <NavigationContainer>
                    <Stack.Navigator
                        initialRouteName={ScreenName.Home}
                        screenOptions={{
                            headerShown: false,
                        }}
                    >
                        <Stack.Screen
                            name={ScreenName.Home}
                            component={HomeScreen}
                        />
                        <Stack.Screen
                            name={ScreenName.Playground}
                            component={PlaygroundScreen}
                        />
                        <Stack.Screen
                            name={ScreenName.Benchmark}
                            component={BenchmarkScreen}
                        />
                        <Stack.Screen
                            name={ScreenName.BenchmarkAllFeatures}
                            component={BenchmarkAllFeaturesScreen}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </Main>
    );
};
