import React, { useMemo, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Pressable, Text, View } from 'react-native';

import { useFocusRing } from '@react-native-aria/focus';

import { theme } from '../styles/theme';
import { darkenColor } from '../utils/colors';

import { ButtonVariant } from './BlendButton';
import { Spinner } from './Spinner';

import type { ButtonProps } from './BlendButton';
import type { Theme } from '../styles/theme';

export const getIconFillColor = (
    theme: Theme,
    variant: ButtonVariant,
    isDisabled: boolean,
    state: ButtonState
): string => {
    if (isDisabled) {
        return theme.colors.medium;
    }

    switch (variant) {
        case ButtonVariant.Outline:
        case ButtonVariant.OutlineBold:
            return theme.colors.white;
        case ButtonVariant.Tertiary: {
            if (state.isHovered) {
                return darkenColor(theme.colors.primary, 6);
            }

            return theme.colors.primary;
        }
        case ButtonVariant.Solid:
            return theme.colors.darkest;
        case ButtonVariant.Danger:
        case ButtonVariant.SolidWhiteText:
            return theme.colors.white;
        default:
            return theme.colors.darkest;
    }
};

type ButtonState = {
    isHovered: boolean;
    isPressed: boolean;
};

// TODO: to make this a more realistic comparison, we should also handle variant specific / hover state styles
export const StyleSheetButton = React.memo<ButtonProps>(
    ({
        title,
        onPress,
        variant = ButtonVariant.Solid,
        isLoading = false,
        isDisabled = false,
        // eslint-disable-next-line unused-imports/no-unused-vars,@typescript-eslint/no-unused-vars
        isShort = false,
        IconLeft,
        IconRight,
        // eslint-disable-next-line unused-imports/no-unused-vars,@typescript-eslint/no-unused-vars
        style,
        styleTitle,
        // eslint-disable-next-line unused-imports/no-unused-vars,@typescript-eslint/no-unused-vars
        isSemiBold = false,
        spinnerProps,
        ...props
    }) => {
        const [state, setState] = useState<ButtonState>({
            isHovered: false,
            isPressed: false,
        });

        const { focusProps: focusRingProps }: any = useFocusRing();

        const iconFill = getIconFillColor(theme as any, variant, isDisabled, state);

        const handleHoverIn = () => {
            setState((prevState) => {
                return { ...prevState, isHovered: true };
            });
        };

        const handleHoverOut = () => {
            setState((prevState) => {
                return { ...prevState, isHovered: false };
            });
        };

        const handlePressIn = () => {
            setState((prevState) => {
                return { ...prevState, isPressed: true };
            });
        };

        const handlePressOut = () => {
            setState((prevState) => {
                return { ...prevState, isPressed: false };
            });
        };

        const buttonStyle = useMemo(() => {
            const baseStyle = {
                backgroundColor: theme.colors.primary,
                borderColor: theme.colors.primary,
            };

            switch (variant) {
                case ButtonVariant.Outline:
                    return {
                        ...baseStyle,
                        backgroundColor: 'transparent',
                        borderWidth: 1,
                    };
                case ButtonVariant.OutlineBold:
                    return {
                        ...baseStyle,
                        backgroundColor: 'transparent',
                        borderWidth: 2,
                    };
                case ButtonVariant.Tertiary:
                    return {
                        ...baseStyle,
                        backgroundColor: 'transparent',
                        borderWidth: 0,
                    };
                case ButtonVariant.Solid:
                    return {
                        ...baseStyle,
                        backgroundColor: theme.colors.primary,
                        borderWidth: 0,
                    };
                case ButtonVariant.Danger:
                    return {
                        ...baseStyle,
                        backgroundColor: theme.colors.danger,
                        borderColor: theme.colors.danger,
                    };
                case ButtonVariant.SolidWhiteText:
                    return {
                        ...baseStyle,
                        backgroundColor: theme.colors.white,
                        borderColor: theme.colors.white,
                    };
                default:
                    return baseStyle;
            }
        }, [variant]);

        const textStyle = useMemo(() => {
            const baseStyle = {
                color: theme.colors.white,
            };

            switch (variant) {
                case ButtonVariant.Outline:
                case ButtonVariant.OutlineBold:
                    return {
                        ...baseStyle,
                        color: theme.colors.primary,
                    };
                case ButtonVariant.SolidWhiteText:
                    return {
                        ...baseStyle,
                        color: theme.colors.primary,
                    };
                default:
                    return baseStyle;
            }
        }, [variant]);

        return (
            <Pressable
                {...props}
                style={[styles.component, buttonStyle]}
                onPress={onPress}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                onHoverIn={handleHoverIn}
                onHoverOut={handleHoverOut}
                onFocus={focusRingProps.onFocus}
                onBlur={focusRingProps.onBlur}
                disabled={isLoading || isDisabled}
                role="button"
            >
                {isLoading ? (
                    <View style={styles.loader}>
                        <Spinner
                            size={18}
                            {...spinnerProps}
                        />
                    </View>
                ) : (
                    <>
                        {IconLeft ? (
                            <View style={styles.iconLeft}>
                                <IconLeft fill={iconFill} />
                            </View>
                        ) : null}
                        <Text style={[textStyle, styleTitle]}>{title}</Text>
                        {IconRight ? (
                            <View style={styles.iconRight}>
                                <IconRight fill={iconFill} />
                            </View>
                        ) : null}
                    </>
                )}
            </Pressable>
        );
    }
);

StyleSheetButton.displayName = 'Button';

const styles = StyleSheet.create({
    component: {
        width: '100%',
        height: 'auto',
        padding: 16,
        backgroundColor: '#2B2B2B',
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#FFFFFF',
        fontFamily: theme.fonts.semiBold,
        fontSize: theme.fontSizes.sm,
    },
    iconLeft: {
        marginRight: 6,
    },
    iconRight: {
        marginLeft: 6,
    },
    loader: {},
});
