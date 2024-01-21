import React from 'react';

import { Benchmark } from '../components/Benchmark';
import { BlendWithThemeBenchmark } from '../components/BlendWithThemeBenchmark';
import { StyleSheetBenchmark } from '../components/StyleSheetBenchmark';
import { BENCHMARK_SETTINGS } from '../config';

export const BenchmarkScreen: React.FunctionComponent = () => {
    return (
        <Benchmark
            times={BENCHMARK_SETTINGS.BOXES_PER}
            boxes={BENCHMARK_SETTINGS.BOXES}
            testDelay={BENCHMARK_SETTINGS.DELAY_BETWEEN}
            title={`Init blend + rendering ${BENCHMARK_SETTINGS.BOXES} boxes`}
            description={`Single StyleSheet vs ${BENCHMARK_SETTINGS.BOXES}x Blend useStyles with single theme`}
            stylesheet={(onMeasureEnd) => {
                return (
                    <StyleSheetBenchmark
                        boxes={BENCHMARK_SETTINGS.BOXES}
                        onMeasureEnd={onMeasureEnd}
                    />
                );
            }}
            blend={(onMeasureEnd) => {
                return (
                    <BlendWithThemeBenchmark
                        boxes={BENCHMARK_SETTINGS.BOXES}
                        onMeasureEnd={onMeasureEnd}
                    />
                );
            }}
        />
    );
};
