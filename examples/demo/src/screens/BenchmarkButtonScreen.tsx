import React from 'react';

import { Benchmark } from '../components/Benchmark';
import { BlendBenchmarkButton } from '../components/BlendBenchmarkButton';
import { StyleSheetBenchmarkButton } from '../components/StyleSheetBenchmarkButton';
import { BENCHMARK_SETTINGS } from '../config';

export const BenchmarkButtonScreen: React.FunctionComponent = () => {
    return (
        <Benchmark
            times={BENCHMARK_SETTINGS.BOXES_PER}
            boxes={BENCHMARK_SETTINGS.BOXES}
            testDelay={BENCHMARK_SETTINGS.DELAY_BETWEEN}
            title={`Init blend + rendering ${BENCHMARK_SETTINGS.BOXES} Buttons`}
            description={`Single StyleSheet vs ${BENCHMARK_SETTINGS.BOXES}x Blend useStyles with single theme`}
            stylesheet={(onMeasureEnd) => {
                // Replace me with StyleSheet
                return (
                    <StyleSheetBenchmarkButton
                        boxes={BENCHMARK_SETTINGS.BOXES}
                        onMeasureEnd={onMeasureEnd}
                    />
                );
            }}
            blend={(onMeasureEnd) => {
                return (
                    <BlendBenchmarkButton
                        boxes={BENCHMARK_SETTINGS.BOXES}
                        onMeasureEnd={onMeasureEnd}
                    />
                );
            }}
        />
    );
};
