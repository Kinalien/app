import { createTamagui, createTokens } from "tamagui";
import { defaultConfig } from '@tamagui/config/v4'

import theme from "@alien/config/theme/theme.json" with { type: "json" };

const lightTheme = createTokens({
  color: {
    primary: theme.schemes.light.primary,
    surfaceTint: theme.schemes.light.surfaceTint,
    onPrimary: theme.schemes.light.onPrimary,
    primaryContainer: theme.schemes.light.primaryContainer,
    onPrimaryContainer: theme.schemes.light.onPrimaryContainer,
    secondary: theme.schemes.light.secondary,
    onSecondary: theme.schemes.light.onSecondary,
    secondaryContainer: theme.schemes.light.secondaryContainer,
    onSecondaryContainer: theme.schemes.light.onSecondaryContainer,
    tertiary: theme.schemes.light.tertiary,
    onTertiary: theme.schemes.light.onTertiary,
    tertiaryContainer: theme.schemes.light.tertiaryContainer,
    onTertiaryContainer: theme.schemes.light.onTertiaryContainer,
    error: theme.schemes.light.error,
    onError: theme.schemes.light.onError,
    errorContainer: theme.schemes.light.errorContainer,
    onErrorContainer: theme.schemes.light.onErrorContainer,
    background: theme.schemes.light.background,
    onBackground: theme.schemes.light.onBackground,
    surface: theme.schemes.light.surface,
    onSurface: theme.schemes.light.onSurface,
    surfaceVariant: theme.schemes.light.surfaceVariant,
    onSurfaceVariant: theme.schemes.light.onSurfaceVariant,
    outline: theme.schemes.light.outline,
    inverseSurface: theme.schemes.light.inverseSurface,
    inverseOnSurface: theme.schemes.light.inverseOnSurface,
    inversePrimary: theme.schemes.light.inversePrimary,
    surfaceContainer: theme.schemes.light.surfaceContainerLowest,
    surfaceContainerHigh: theme.schemes.light.surfaceContainerHigh,
  },
});

const darkTheme = {
  colors: {
    primary: theme.schemes.dark.primary,
    surfaceTint: theme.schemes.dark.surfaceTint,
    onPrimary: theme.schemes.dark.onPrimary,
    primaryContainer: theme.schemes.dark.primaryContainer,
    onPrimaryContainer: theme.schemes.dark.onPrimaryContainer,
    secondary: theme.schemes.dark.secondary,
    onSecondary: theme.schemes.dark.onSecondary,
    secondaryContainer: theme.schemes.dark.secondaryContainer,
    onSecondaryContainer: theme.schemes.dark.onSecondaryContainer,
    tertiary: theme.schemes.dark.tertiary,
    onTertiary: theme.schemes.dark.onTertiary,
    tertiaryContainer: theme.schemes.dark.tertiaryContainer,
    onTertiaryContainer: theme.schemes.dark.onTertiaryContainer,
    error: theme.schemes.dark.error,
    onError: theme.schemes.dark.onError,
    errorContainer: theme.schemes.dark.errorContainer,
    onErrorContainer: theme.schemes.dark.onErrorContainer,
    background: theme.schemes.dark.background,
    onBackground: theme.schemes.dark.onBackground,
    surface: theme.schemes.dark.surface,
    onSurface: theme.schemes.dark.onSurface,
    surfaceVariant: theme.schemes.dark.surfaceVariant,
    onSurfaceVariant: theme.schemes.dark.onSurfaceVariant,
    outline: theme.schemes.dark.outline,
    inverseSurface: theme.schemes.dark.inverseSurface,
    inverseOnSurface: theme.schemes.dark.inverseOnSurface,
    inversePrimary: theme.schemes.dark.inversePrimary,
    surfaceContainer: theme.schemes.dark.surfaceContainerLowest,
    surfaceContainerHigh: theme.schemes.dark.surfaceContainerHigh,
  },
};

export const tamaguiConfig = createTamagui({
  ...defaultConfig,
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
});

export default tamaguiConfig;

export type Conf = typeof tamaguiConfig;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}
