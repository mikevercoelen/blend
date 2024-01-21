import React, { useState } from 'react';
import { Pressable, Text, View, StyleSheet, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

enum Library {
    Blend = 'Blend',
    ReactNativeStyleSheet = 'ReactNativeStyleSheet',
}

const getAvgResultWithVariance = (results: number[]) => {
    const numberOfResults = results.length;

    if (numberOfResults === 0) {
        return 'N/A';
    }

    return parseFloat(
        (
            results.reduce((a, b) => {
                return a + b;
            }) / results.length
        ).toFixed(2)
    );
};

type BenchmarkProps = {
    title: string;
    boxes: number;
    testDelay: number;
    times: number;
    description: string;
    stylesheet(onMeasureEnd: (time: number) => void): React.ReactNode;
    blend(onMeasureEnd: (time: number) => void): React.ReactNode;
};

export const Benchmark: React.FunctionComponent<BenchmarkProps> = ({
    boxes,
    title,
    description,
    stylesheet,
    blend,
    testDelay,
    times,
}) => {
    const navigation = useNavigation();
    const { top } = useSafeAreaInsets();
    const [benchmark, setBenchmark] = useState({
        isMeasuring: false,
        library: undefined as Library | undefined,
        renderTime: {
            [Library.Blend]: [] as number[],
            [Library.ReactNativeStyleSheet]: [] as number[],
        },
    });
    const avgStyleSheet = getAvgResultWithVariance(benchmark.renderTime[Library.ReactNativeStyleSheet]);
    const avgblend = getAvgResultWithVariance(benchmark.renderTime[Library.Blend]);
    const difference =
        avgblend === 'N/A' || avgStyleSheet === 'N/A'
            ? 'N/A'
            : ((avgblend as number) - (avgStyleSheet as number)).toFixed(2);

    return (
        <ScrollView
            style={{
                ...styles.container,
                paddingTop: top,
            }}
        >
            <View style={styles.header}>
                <Pressable
                    onPress={() => {
                        return navigation.goBack();
                    }}
                >
                    <Text>← Go back</Text>
                </Pressable>
            </View>
            <View style={styles.buttons}>
                <Pressable
                    disabled={benchmark.isMeasuring}
                    style={styles.stylesheetButton}
                    onPress={() => {
                        return setBenchmark({
                            isMeasuring: true,
                            library: Library.ReactNativeStyleSheet,
                            renderTime: {
                                [Library.Blend]: [],
                                [Library.ReactNativeStyleSheet]: [],
                            },
                        });
                    }}
                >
                    <Text style={styles.buttonText}>{benchmark.isMeasuring ? 'Measuring...' : 'Start benchmark'}</Text>
                </Pressable>
            </View>
            <View style={styles.results}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
            {benchmark.library === Library.ReactNativeStyleSheet && (
                <>
                    {stylesheet((time) => {
                        setBenchmark((prevState) => {
                            if (prevState.renderTime[Library.ReactNativeStyleSheet].length < times) {
                                setTimeout(() => {
                                    setBenchmark((prevState) => {
                                        return {
                                            ...prevState,
                                            library: undefined,
                                        };
                                    });
                                }, testDelay);

                                setTimeout(() => {
                                    setBenchmark((prevState) => {
                                        return {
                                            ...prevState,
                                            library: Library.Blend,
                                        };
                                    });
                                }, testDelay * 2);
                            }

                            return {
                                ...prevState,
                                isMeasuring: !(
                                    prevState.renderTime[Library.ReactNativeStyleSheet].length ===
                                    times - 1
                                ),
                                renderTime: {
                                    ...prevState.renderTime,
                                    [Library.ReactNativeStyleSheet]: [
                                        ...prevState.renderTime[Library.ReactNativeStyleSheet],
                                        time,
                                    ],
                                },
                            };
                        });
                    })}
                </>
            )}
            {benchmark.library === Library.Blend && (
                <>
                    {blend((time) => {
                        setBenchmark((prevState) => {
                            if (prevState.renderTime[Library.Blend].length < times) {
                                setTimeout(() => {
                                    setBenchmark((prevState) => {
                                        return {
                                            ...prevState,
                                            library: undefined,
                                        };
                                    });
                                }, testDelay);

                                setTimeout(() => {
                                    setBenchmark((prevState) => {
                                        return {
                                            ...prevState,
                                            library: Library.ReactNativeStyleSheet,
                                        };
                                    });
                                }, testDelay * 2);
                            }

                            return {
                                ...prevState,
                                renderTime: {
                                    ...prevState.renderTime,
                                    [Library.Blend]: [...prevState.renderTime[Library.Blend], time],
                                },
                            };
                        });
                    })}
                </>
            )}
            <View style={styles.resultsRow}>
                <Text style={styles.libName}>StyleSheet</Text>
                <View style={styles.wrap}>
                    {benchmark.renderTime[Library.ReactNativeStyleSheet].map((time, index) => {
                        return <Text key={index}>{`${index + 1}) ${time}ms `}</Text>;
                    })}
                </View>
                <Text style={styles.result}>Avg: {avgStyleSheet}ms</Text>
            </View>
            <View style={styles.resultsRow}>
                <Text style={styles.libName}>blend</Text>
                <View style={styles.wrap}>
                    {benchmark.renderTime[Library.Blend].map((time, index) => {
                        return <Text key={index}>{`${index + 1}) ${time}ms `}</Text>;
                    })}
                </View>
                <Text style={styles.result}>Avg: {avgblend}ms</Text>
            </View>
            <Text
                style={{
                    ...styles.difference,
                    color:
                        difference === 'N/A'
                            ? 'black'
                            : parseFloat(difference) < 5.0
                              ? 'green'
                              : parseFloat(difference) < 10.0
                                ? 'orange'
                                : 'red',
                }}
            >
                Difference: +{difference}ms
            </Text>
            <Text style={styles.difference}>
                Cost per view: {difference === 'N/A' ? 'N/A' : `+${(parseFloat(difference) / boxes).toFixed(4)} ms`}
            </Text>
            <View style={styles.fakeSpacer} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        marginBottom: 50,
        marginHorizontal: 20,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        columnGap: 10,
    },
    stylesheetButton: {
        backgroundColor: 'black',
        borderRadius: 8,
        padding: 15,
    },
    blendButton: {
        backgroundColor: 'pink',
        borderRadius: 8,
        padding: 15,
    },
    buttonText: {
        color: 'white',
    },
    results: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        marginBottom: 50,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    description: {
        paddingHorizontal: 20,
        textAlign: 'center',
    },
    libName: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
    },
    resultsRow: {
        marginHorizontal: 40,
        marginTop: 50,
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    result: {
        marginTop: 10,
        fontSize: 20,
    },
    difference: {
        marginTop: 30,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    wrap: {
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    fakeSpacer: {
        height: 100,
    },
});
