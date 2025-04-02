import "package:flutter/material.dart";
import 'package:google_fonts/google_fonts.dart';

TextTheme createTextTheme(
  BuildContext context,
  String bodyFontString,
  String displayFontString,
) {
  TextTheme baseTextTheme = Theme.of(context).textTheme;
  TextTheme bodyTextTheme = GoogleFonts.getTextTheme(
    bodyFontString,
    baseTextTheme,
  );
  TextTheme displayTextTheme = GoogleFonts.getTextTheme(
    displayFontString,
    baseTextTheme,
  );
  TextTheme textTheme = displayTextTheme.copyWith(
    bodyLarge: bodyTextTheme.bodyLarge,
    bodyMedium: bodyTextTheme.bodyMedium,
    bodySmall: bodyTextTheme.bodySmall,
    labelLarge: bodyTextTheme.labelLarge,
    labelMedium: bodyTextTheme.labelMedium,
    labelSmall: bodyTextTheme.labelSmall,
  );
  return textTheme;
}

class MaterialTheme {
  final TextTheme textTheme;

  const MaterialTheme(this.textTheme);

  static ColorScheme lightScheme() {
    return const ColorScheme(
      brightness: Brightness.light,
      primary: Color(0xff8e4956),
      surfaceTint: Color(0xff8e4956),
      onPrimary: Color(0xffffffff),
      primaryContainer: Color(0xffffd9dd),
      onPrimaryContainer: Color(0xff72333f),
      secondary: Color(0xff76565a),
      onSecondary: Color(0xffffffff),
      secondaryContainer: Color(0xffffd9dd),
      onSecondaryContainer: Color(0xff5c3f43),
      tertiary: Color(0xff176684),
      onTertiary: Color(0xffffffff),
      tertiaryContainer: Color(0xffc0e8ff),
      onTertiaryContainer: Color(0xff004d66),
      error: Color(0xffba1a1a),
      onError: Color(0xffffffff),
      errorContainer: Color(0xffffdad6),
      onErrorContainer: Color(0xff93000a),
      surface: Color(0xfff5fafc),
      onSurface: Color(0xff171d1e),
      onSurfaceVariant: Color(0xff3f4949),
      outline: Color(0xff6f7979),
      outlineVariant: Color(0xffbec8c8),
      shadow: Color(0xff000000),
      scrim: Color(0xff000000),
      inverseSurface: Color(0xff2b3133),
      inversePrimary: Color(0xffffb2bd),
      primaryFixed: Color(0xffffd9dd),
      onPrimaryFixed: Color(0xff3b0715),
      primaryFixedDim: Color(0xffffb2bd),
      onPrimaryFixedVariant: Color(0xff72333f),
      secondaryFixed: Color(0xffffd9dd),
      onSecondaryFixed: Color(0xff2c1519),
      secondaryFixedDim: Color(0xffe5bdc1),
      onSecondaryFixedVariant: Color(0xff5c3f43),
      tertiaryFixed: Color(0xffc0e8ff),
      onTertiaryFixed: Color(0xff001e2b),
      tertiaryFixedDim: Color(0xff8dcff1),
      onTertiaryFixedVariant: Color(0xff004d66),
      surfaceDim: Color(0xffd5dbdd),
      surfaceBright: Color(0xfff5fafc),
      surfaceContainerLowest: Color(0xffffffff),
      surfaceContainerLow: Color(0xffeff4f6),
      surfaceContainer: Color(0xffe9eff1),
      surfaceContainerHigh: Color(0xffe4e9eb),
      surfaceContainerHighest: Color(0xffdee3e5),
    );
  }

  ThemeData light() {
    return theme(lightScheme());
  }

  static ColorScheme lightMediumContrastScheme() {
    return const ColorScheme(
      brightness: Brightness.light,
      primary: Color(0xff5d222f),
      surfaceTint: Color(0xff8e4956),
      onPrimary: Color(0xffffffff),
      primaryContainer: Color(0xff9f5864),
      onPrimaryContainer: Color(0xffffffff),
      secondary: Color(0xff4a2f33),
      onSecondary: Color(0xffffffff),
      secondaryContainer: Color(0xff856569),
      onSecondaryContainer: Color(0xffffffff),
      tertiary: Color(0xff003b4f),
      onTertiary: Color(0xffffffff),
      tertiaryContainer: Color(0xff2d7493),
      onTertiaryContainer: Color(0xffffffff),
      error: Color(0xff740006),
      onError: Color(0xffffffff),
      errorContainer: Color(0xffcf2c27),
      onErrorContainer: Color(0xffffffff),
      surface: Color(0xfff5fafc),
      onSurface: Color(0xff0c1214),
      onSurfaceVariant: Color(0xff2e3838),
      outline: Color(0xff4a5454),
      outlineVariant: Color(0xff656f6f),
      shadow: Color(0xff000000),
      scrim: Color(0xff000000),
      inverseSurface: Color(0xff2b3133),
      inversePrimary: Color(0xffffb2bd),
      primaryFixed: Color(0xff9f5864),
      onPrimaryFixed: Color(0xffffffff),
      primaryFixedDim: Color(0xff83404d),
      onPrimaryFixedVariant: Color(0xffffffff),
      secondaryFixed: Color(0xff856569),
      onSecondaryFixed: Color(0xffffffff),
      secondaryFixedDim: Color(0xff6b4d51),
      onSecondaryFixedVariant: Color(0xffffffff),
      tertiaryFixed: Color(0xff2d7493),
      onTertiaryFixed: Color(0xffffffff),
      tertiaryFixedDim: Color(0xff005c79),
      onTertiaryFixedVariant: Color(0xffffffff),
      surfaceDim: Color(0xffc2c7c9),
      surfaceBright: Color(0xfff5fafc),
      surfaceContainerLowest: Color(0xffffffff),
      surfaceContainerLow: Color(0xffeff4f6),
      surfaceContainer: Color(0xffe4e9eb),
      surfaceContainerHigh: Color(0xffd8dedf),
      surfaceContainerHighest: Color(0xffcdd2d4),
    );
  }

  ThemeData lightMediumContrast() {
    return theme(lightMediumContrastScheme());
  }

  static ColorScheme lightHighContrastScheme() {
    return const ColorScheme(
      brightness: Brightness.light,
      primary: Color(0xff501825),
      surfaceTint: Color(0xff8e4956),
      onPrimary: Color(0xffffffff),
      primaryContainer: Color(0xff753541),
      onPrimaryContainer: Color(0xffffffff),
      secondary: Color(0xff3e2529),
      onSecondary: Color(0xffffffff),
      secondaryContainer: Color(0xff5e4146),
      onSecondaryContainer: Color(0xffffffff),
      tertiary: Color(0xff003042),
      onTertiary: Color(0xffffffff),
      tertiaryContainer: Color(0xff004f69),
      onTertiaryContainer: Color(0xffffffff),
      error: Color(0xff600004),
      onError: Color(0xffffffff),
      errorContainer: Color(0xff98000a),
      onErrorContainer: Color(0xffffffff),
      surface: Color(0xfff5fafc),
      onSurface: Color(0xff000000),
      onSurfaceVariant: Color(0xff000000),
      outline: Color(0xff242e2e),
      outlineVariant: Color(0xff414b4b),
      shadow: Color(0xff000000),
      scrim: Color(0xff000000),
      inverseSurface: Color(0xff2b3133),
      inversePrimary: Color(0xffffb2bd),
      primaryFixed: Color(0xff753541),
      onPrimaryFixed: Color(0xffffffff),
      primaryFixedDim: Color(0xff591f2c),
      onPrimaryFixedVariant: Color(0xffffffff),
      secondaryFixed: Color(0xff5e4146),
      onSecondaryFixed: Color(0xffffffff),
      secondaryFixedDim: Color(0xff462b2f),
      onSecondaryFixedVariant: Color(0xffffffff),
      tertiaryFixed: Color(0xff004f69),
      onTertiaryFixed: Color(0xffffffff),
      tertiaryFixedDim: Color(0xff00374b),
      onTertiaryFixedVariant: Color(0xffffffff),
      surfaceDim: Color(0xffb4babb),
      surfaceBright: Color(0xfff5fafc),
      surfaceContainerLowest: Color(0xffffffff),
      surfaceContainerLow: Color(0xffecf2f3),
      surfaceContainer: Color(0xffdee3e5),
      surfaceContainerHigh: Color(0xffd0d5d7),
      surfaceContainerHighest: Color(0xffc2c7c9),
    );
  }

  ThemeData lightHighContrast() {
    return theme(lightHighContrastScheme());
  }

  static ColorScheme darkScheme() {
    return const ColorScheme(
      brightness: Brightness.dark,
      primary: Color(0xffffb2bd),
      surfaceTint: Color(0xffffb2bd),
      onPrimary: Color(0xff561d29),
      primaryContainer: Color(0xff72333f),
      onPrimaryContainer: Color(0xffffd9dd),
      secondary: Color(0xffe5bdc1),
      onSecondary: Color(0xff43292d),
      secondaryContainer: Color(0xff5c3f43),
      onSecondaryContainer: Color(0xffffd9dd),
      tertiary: Color(0xff8dcff1),
      onTertiary: Color(0xff003547),
      tertiaryContainer: Color(0xff004d66),
      onTertiaryContainer: Color(0xffc0e8ff),
      error: Color(0xffffb4ab),
      onError: Color(0xff690005),
      errorContainer: Color(0xff93000a),
      onErrorContainer: Color(0xffffdad6),
      surface: Color(0xff0e1416),
      onSurface: Color(0xffdee3e5),
      onSurfaceVariant: Color(0xffbec8c8),
      outline: Color(0xff899393),
      outlineVariant: Color(0xff3f4949),
      shadow: Color(0xff000000),
      scrim: Color(0xff000000),
      inverseSurface: Color(0xffdee3e5),
      inversePrimary: Color(0xff8e4956),
      primaryFixed: Color(0xffffd9dd),
      onPrimaryFixed: Color(0xff3b0715),
      primaryFixedDim: Color(0xffffb2bd),
      onPrimaryFixedVariant: Color(0xff72333f),
      secondaryFixed: Color(0xffffd9dd),
      onSecondaryFixed: Color(0xff2c1519),
      secondaryFixedDim: Color(0xffe5bdc1),
      onSecondaryFixedVariant: Color(0xff5c3f43),
      tertiaryFixed: Color(0xffc0e8ff),
      onTertiaryFixed: Color(0xff001e2b),
      tertiaryFixedDim: Color(0xff8dcff1),
      onTertiaryFixedVariant: Color(0xff004d66),
      surfaceDim: Color(0xff0e1416),
      surfaceBright: Color(0xff343a3c),
      surfaceContainerLowest: Color(0xff090f11),
      surfaceContainerLow: Color(0xff171d1e),
      surfaceContainer: Color(0xff1b2122),
      surfaceContainerHigh: Color(0xff252b2d),
      surfaceContainerHighest: Color(0xff303637),
    );
  }

  ThemeData dark() {
    return theme(darkScheme());
  }

  static ColorScheme darkMediumContrastScheme() {
    return const ColorScheme(
      brightness: Brightness.dark,
      primary: Color(0xffffd1d6),
      surfaceTint: Color(0xffffb2bd),
      onPrimary: Color(0xff48121f),
      primaryContainer: Color(0xffc97a87),
      onPrimaryContainer: Color(0xff000000),
      secondary: Color(0xfffcd2d7),
      onSecondary: Color(0xff371f23),
      secondaryContainer: Color(0xffac888c),
      onSecondaryContainer: Color(0xff000000),
      tertiary: Color(0xffb1e3ff),
      onTertiary: Color(0xff002939),
      tertiaryContainer: Color(0xff5699b9),
      onTertiaryContainer: Color(0xff000000),
      error: Color(0xffffd2cc),
      onError: Color(0xff540003),
      errorContainer: Color(0xffff5449),
      onErrorContainer: Color(0xff000000),
      surface: Color(0xff0e1416),
      onSurface: Color(0xffffffff),
      onSurfaceVariant: Color(0xffd4dede),
      outline: Color(0xffaab4b4),
      outlineVariant: Color(0xff889292),
      shadow: Color(0xff000000),
      scrim: Color(0xff000000),
      inverseSurface: Color(0xffdee3e5),
      inversePrimary: Color(0xff733440),
      primaryFixed: Color(0xffffd9dd),
      onPrimaryFixed: Color(0xff2c000b),
      primaryFixedDim: Color(0xffffb2bd),
      onPrimaryFixedVariant: Color(0xff5d222f),
      secondaryFixed: Color(0xffffd9dd),
      onSecondaryFixed: Color(0xff200b0f),
      secondaryFixedDim: Color(0xffe5bdc1),
      onSecondaryFixedVariant: Color(0xff4a2f33),
      tertiaryFixed: Color(0xffc0e8ff),
      onTertiaryFixed: Color(0xff00131d),
      tertiaryFixedDim: Color(0xff8dcff1),
      onTertiaryFixedVariant: Color(0xff003b4f),
      surfaceDim: Color(0xff0e1416),
      surfaceBright: Color(0xff3f4547),
      surfaceContainerLowest: Color(0xff040809),
      surfaceContainerLow: Color(0xff191f20),
      surfaceContainer: Color(0xff23292a),
      surfaceContainerHigh: Color(0xff2e3435),
      surfaceContainerHighest: Color(0xff393f40),
    );
  }

  ThemeData darkMediumContrast() {
    return theme(darkMediumContrastScheme());
  }

  static ColorScheme darkHighContrastScheme() {
    return const ColorScheme(
      brightness: Brightness.dark,
      primary: Color(0xffffebed),
      surfaceTint: Color(0xffffb2bd),
      onPrimary: Color(0xff000000),
      primaryContainer: Color(0xffffacb9),
      onPrimaryContainer: Color(0xff210007),
      secondary: Color(0xffffebed),
      onSecondary: Color(0xff000000),
      secondaryContainer: Color(0xffe1b9bd),
      onSecondaryContainer: Color(0xff180609),
      tertiary: Color(0xffe0f3ff),
      onTertiary: Color(0xff000000),
      tertiaryContainer: Color(0xff89cbed),
      onTertiaryContainer: Color(0xff000d15),
      error: Color(0xffffece9),
      onError: Color(0xff000000),
      errorContainer: Color(0xffffaea4),
      onErrorContainer: Color(0xff220001),
      surface: Color(0xff0e1416),
      onSurface: Color(0xffffffff),
      onSurfaceVariant: Color(0xffffffff),
      outline: Color(0xffe8f2f2),
      outlineVariant: Color(0xffbac5c4),
      shadow: Color(0xff000000),
      scrim: Color(0xff000000),
      inverseSurface: Color(0xffdee3e5),
      inversePrimary: Color(0xff733440),
      primaryFixed: Color(0xffffd9dd),
      onPrimaryFixed: Color(0xff000000),
      primaryFixedDim: Color(0xffffb2bd),
      onPrimaryFixedVariant: Color(0xff2c000b),
      secondaryFixed: Color(0xffffd9dd),
      onSecondaryFixed: Color(0xff000000),
      secondaryFixedDim: Color(0xffe5bdc1),
      onSecondaryFixedVariant: Color(0xff200b0f),
      tertiaryFixed: Color(0xffc0e8ff),
      onTertiaryFixed: Color(0xff000000),
      tertiaryFixedDim: Color(0xff8dcff1),
      onTertiaryFixedVariant: Color(0xff00131d),
      surfaceDim: Color(0xff0e1416),
      surfaceBright: Color(0xff4b5153),
      surfaceContainerLowest: Color(0xff000000),
      surfaceContainerLow: Color(0xff1b2122),
      surfaceContainer: Color(0xff2b3133),
      surfaceContainerHigh: Color(0xff363c3e),
      surfaceContainerHighest: Color(0xff424849),
    );
  }

  ThemeData darkHighContrast() {
    return theme(darkHighContrastScheme());
  }

  ThemeData theme(ColorScheme colorScheme) => ThemeData(
    useMaterial3: true,
    brightness: colorScheme.brightness,
    colorScheme: colorScheme,
    textTheme: textTheme.apply(
      bodyColor: colorScheme.onSurface,
      displayColor: colorScheme.onSurface,
    ),
    scaffoldBackgroundColor: colorScheme.surface,
    canvasColor: colorScheme.surface,
  );

  List<ExtendedColor> get extendedColors => [];
}

class ExtendedColor {
  final Color seed, value;
  final ColorFamily light;
  final ColorFamily lightHighContrast;
  final ColorFamily lightMediumContrast;
  final ColorFamily dark;
  final ColorFamily darkHighContrast;
  final ColorFamily darkMediumContrast;

  const ExtendedColor({
    required this.seed,
    required this.value,
    required this.light,
    required this.lightHighContrast,
    required this.lightMediumContrast,
    required this.dark,
    required this.darkHighContrast,
    required this.darkMediumContrast,
  });
}

class ColorFamily {
  const ColorFamily({
    required this.color,
    required this.onColor,
    required this.colorContainer,
    required this.onColorContainer,
  });

  final Color color;
  final Color onColor;
  final Color colorContainer;
  final Color onColorContainer;
}
