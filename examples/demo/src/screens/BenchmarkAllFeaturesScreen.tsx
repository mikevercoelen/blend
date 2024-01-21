import React from 'react';

import { Benchmark } from '../components/Benchmark';
import { BlendWithAllFeaturesBenchmark } from '../components/BlendAllFeaturesBenchmark';
import { StyleSheetWithAllFeaturesBenchmark } from '../components/StyleSheetWithAllFeaturesBenchmark';
import { BENCHMARK_SETTINGS } from '../config';

export const BenchmarkAllFeaturesScreen: React.FunctionComponent = () => {
    return (
        <Benchmark
            times={BENCHMARK_SETTINGS.BOXES_PER}
            boxes={BENCHMARK_SETTINGS.BOXES}
            testDelay={BENCHMARK_SETTINGS.DELAY_BETWEEN}
            title={`Init blend + enable/use all features and render ${BENCHMARK_SETTINGS.BOXES} boxes`}
            description={`Single StyleSheet vs ${BENCHMARK_SETTINGS.BOXES}x Blend useStyles with all features`}
            stylesheet={(onMeasureEnd) => {
                return (
                    <StyleSheetWithAllFeaturesBenchmark
                        boxes={BENCHMARK_SETTINGS.BOXES}
                        onMeasureEnd={onMeasureEnd}
                    />
                );
            }}
            blend={(onMeasureEnd) => {
                return (
                    <BlendWithAllFeaturesBenchmark
                        boxes={BENCHMARK_SETTINGS.BOXES}
                        onMeasureEnd={onMeasureEnd}
                    />
                );
            }}
        />
    );
};
