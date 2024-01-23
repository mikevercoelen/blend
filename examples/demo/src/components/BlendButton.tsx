import React, { useState } from 'react';
import type { PressableProps, TextStyle, ViewStyle } from 'react-native';
import { Pressable, Text, View } from 'react-native';

import { useFocusRing } from '@react-native-aria/focus';
import { useStyles, createStyleSheet } from 'react-native-blend';

import { darkenColor, getTextColorForBackgroundColor } from '../utils/colors';

import { Spinner } from './Spinner';

import type { SpinnerProps } from './Spinner';
import type { Theme } from '../styles/theme';
import type { GestureResponderEvent } from 'react-native/Libraries/Types/CoreEventTypes';

export enum ButtonVariant {
    Solid = 'solid',
    SolidWhiteText = 'solid-white-text',
    Outline = 'outline',
    OutlineBold = 'outline-bold',
    Tertiary = 'tertiary',
    TertiaryDanger = 'tertiary-danger',
    Danger = 'danger',
    DangerOutline = 'danger-outline',
    Cancel = 'cancel',
}

type ButtonProps = Omit<PressableProps, 'onPress' | 'disabled'> & {
    title: string;
    style?: ViewStyle;
    styleTitle?: TextStyle;
    onPress: (event: GestureResponderEvent) => void;
    IconLeft?: React.ElementType<{ fill: string }>;
    IconRight?: React.ElementType<{ fill: string }>;
    isShort?: boolean;
    variant?: ButtonVariant;
    isLoading?: boolean;
    isSemiBold?: boolean;
    isDisabled?: boolean;
    spinnerProps?: SpinnerProps;
};

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

export const Button = React.memo<ButtonProps>(
    ({
        title,
        onPress,
        variant = ButtonVariant.Solid,
        isLoading = false,
        isDisabled = false,
        isShort = false,
        IconLeft,
        IconRight,
        style,
        styleTitle,
        isSemiBold = false,
        spinnerProps,
        ...props
    }) => {
        const [state, setState] = useState<ButtonState>({
            isHovered: false,
            isPressed: false,
        });

        const { isFocusVisible, focusProps: focusRingProps }: any = useFocusRing();

        const { styles, theme } = useStyles(stylesheet, {
            variant,
            isShort,
            isSemiBold,
            isDisabled,
            isLoading,
            state,
            isFocusVisible,
        });

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

        return (
            <Pressable
                {...props}
                style={[styles.component, style]}
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
                        <Text style={[styles.title as any, styleTitle]}>{title}</Text>
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

Button.displayName = 'Button';

type ButtonStyleProps = {
    variant: ButtonVariant;
    state: ButtonState;
    isShort: boolean;
    isSemiBold: boolean;
    isDisabled: boolean;
    isLoading: boolean;
    isFocusVisible: boolean;
};

type VariantStyle = {
    component?: ViewStyle;
    title?: TextStyle;
};

const getStateColor = (color: string, state: ButtonState) => {
    if (state.isPressed) {
        return darkenColor(color, 8);
    }

    if (state.isHovered) {
        return darkenColor(color, 4);
    }

    return color;
};

const stylesheet = createStyleSheet((theme, props: ButtonStyleProps) => {
    const getVariantStyle = (): VariantStyle => {
        switch (props.variant) {
            case ButtonVariant.Solid:
                return {
                    component: {
                        height: 61,
                    },
                    title: {
                        color: props.isDisabled
                            ? theme.colors.medium
                            : getTextColorForBackgroundColor(
                                  theme.colors.secondary,
                                  theme.colors.darkest,
                                  theme.colors.white
                              ),
                        fontFamily: theme.fonts.boldCondensed,
                        fontSize: theme.fontSizes.lg,
                    },
                };
            case ButtonVariant.SolidWhiteText:
                return {
                    title: {
                        color: theme.colors.white,
                        fontFamily: theme.fonts.semiBold,
                    },
                };
            case ButtonVariant.Danger: {
                return {
                    component: {
                        backgroundColor: getStateColor(theme.colors.danger, props.state),
                    },
                    title: {
                        color: theme.colors.white,
                        fontFamily: theme.fonts.semiBold,
                    },
                };
            }
            case ButtonVariant.DangerOutline: {
                return {
                    component: {
                        backgroundColor: 'transparent',
                        borderColor: getStateColor(theme.colors.danger, props.state),
                        borderWidth: 1,
                    },
                    title: {
                        color: getStateColor(theme.colors.danger, props.state),
                        fontFamily: theme.fonts.semiBold,
                    },
                };
            }
            case ButtonVariant.Outline: {
                const subjectColor = props.isDisabled
                    ? theme.colors.medium
                    : getStateColor(theme.colors.secondary, props.state);

                return {
                    component: {
                        backgroundColor: 'transparent',
                        borderColor: subjectColor,
                        borderWidth: 1,
                    },
                    title: {
                        color: subjectColor,
                        fontFamily: theme.fonts.semiBold,
                    },
                };
            }
            case ButtonVariant.OutlineBold: {
                const subjectColor = props.isDisabled
                    ? theme.colors.medium
                    : getStateColor(theme.colors.secondary, props.state);

                return {
                    component: {
                        backgroundColor: 'transparent',
                        borderColor: subjectColor,
                        borderWidth: 2,
                    },
                    title: {
                        color: subjectColor,
                        fontFamily: theme.fonts.boldCondensed,
                        fontSize: theme.fontSizes.lg,
                    },
                };
            }
            case ButtonVariant.Tertiary: {
                return {
                    component: {
                        backgroundColor: 'transparent',
                    },
                    title: {
                        color: theme.colors.primary,
                        fontFamily: theme.fonts.semiBold,
                    },
                };
            }
            case ButtonVariant.TertiaryDanger: {
                return {
                    component: {
                        backgroundColor: 'transparent',
                    },
                    title: {
                        color: theme.colors.danger,
                        fontFamily: theme.fonts.semiBold,
                    },
                };
            }
            case ButtonVariant.Cancel: {
                return {
                    component: {
                        backgroundColor: 'transparent',
                    },
                    title: {
                        color: theme.colors.dark,
                        fontFamily: theme.fonts.semiBold,
                    },
                };
            }
        }
    };

    const getHeight = (): ViewStyle['height'] => {
        if (props.isShort) {
            return 44;
        }

        return 'auto';
    };

    const getPadding = (): ViewStyle['padding'] => {
        if (props.isShort) {
            return theme.spacing.single;
        }

        return theme.spacing.double;
    };

    const getBackgroundColor = (): ViewStyle['backgroundColor'] => {
        if (props.isDisabled) {
            return theme.colors.light;
        }

        return getStateColor(theme.colors.secondary, props.state);
    };

    const variantStyle = getVariantStyle() as any;

    return {
        component: {
            width: '100%',
            height: getHeight(),
            padding: getPadding(),
            backgroundColor: getBackgroundColor(),
            borderRadius: theme.radius.single,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: props.isLoading ? 0.25 : 1,
            ...(variantStyle.component ?? {}),
        },
        title: {
            color: props.isDisabled ? theme.colors.medium : theme.colors.white,
            fontFamily: theme.fonts.semiBold,
            fontSize: theme.fontSizes.sm,
            ...(variantStyle.title ?? {}),
        },
        iconLeft: {
            marginRight: 6,
        },
        iconRight: {
            marginLeft: 6,
        },
        loader: {},
    };
});
