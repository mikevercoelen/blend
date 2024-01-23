import type { NavigationProp } from '@react-navigation/native';

export enum ScreenName {
    Home = 'Home',
    Playground = 'Playground',
    Benchmark = 'Benchmark',
    BenchmarkAllFeatures = 'BenchmarkAllFeatures',
    BenchmarkButton = 'BenchmarkButton',
}

export type RootStackParams = {
    [ScreenName.Home]: undefined;
    [ScreenName.Playground]: undefined;
    [ScreenName.Benchmark]: undefined;
    [ScreenName.BenchmarkAllFeatures]: undefined;
    [ScreenName.BenchmarkButton]: undefined;
};

export type NavigationProps<S extends ScreenName = ScreenName.Home> = NavigationProp<RootStackParams, S>;
