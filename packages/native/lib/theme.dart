import 'package:flutter/material.dart';
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
      primary: Color(0xff904a43),
      surfaceTint: Color(0xff904a43),
      onPrimary: Color(0xffffffff),
      primaryContainer: Color(0xffffdad6),
      onPrimaryContainer: Color(0xff73332d),
      secondary: Color(0xff8f4a4e),
      onSecondary: Color(0xffffffff),
      secondaryContainer: Color(0xffffdada),
      onSecondaryContainer: Color(0xff723338),
      tertiary: Color(0xff07677f),
      onTertiary: Color(0xffffffff),
      tertiaryContainer: Color(0xffb7eaff),
      onTertiaryContainer: Color(0xff004e61),
      error: Color(0xffba1a1a),
      onError: Color(0xffffffff),
      errorContainer: Color(0xffffdad6),
      onErrorContainer: Color(0xff93000a),
      surface: Color(0xfff4fbfa),
      onSurface: Color(0xff161d1d),
      onSurfaceVariant: Color(0xff534341),
      outline: Color(0xff857371),
      outlineVariant: Color(0xffd8c2bf),
      shadow: Color(0xff000000),
      scrim: Color(0xff000000),
      inverseSurface: Color(0xff2b3232),
      inversePrimary: Color(0xffffb4ab),
      primaryFixed: Color(0xffffdad6),
      onPrimaryFixed: Color(0xff3b0907),
      primaryFixedDim: Color(0xffffb4ab),
      onPrimaryFixedVariant: Color(0xff73332d),
      secondaryFixed: Color(0xffffdada),
      onSecondaryFixed: Color(0xff3b080f),
      secondaryFixedDim: Color(0xffffb3b6),
      onSecondaryFixedVariant: Color(0xff723338),
      tertiaryFixed: Color(0xffb7eaff),
      onTertiaryFixed: Color(0xff001f28),
      tertiaryFixedDim: Color(0xff88d1ec),
      onTertiaryFixedVariant: Color(0xff004e61),
      surfaceDim: Color(0xffd5dbdb),
      surfaceBright: Color(0xfff4fbfa),
      surfaceContainerLowest: Color(0xffffffff),
      surfaceContainerLow: Color(0xffeff5f4),
      surfaceContainer: Color(0xffe9efef),
      surfaceContainerHigh: Color(0xffe3e9e9),
      surfaceContainerHighest: Color(0xffdde4e3),
    );
  }

  ThemeData light() {
    return theme(lightScheme());
  }

  static ColorScheme lightMediumContrastScheme() {
    return const ColorScheme(
      brightness: Brightness.light,
      primary: Color(0xff5e231e),
      surfaceTint: Color(0xff904a43),
      onPrimary: Color(0xffffffff),
      primaryContainer: Color(0xffa25850),
      onPrimaryContainer: Color(0xffffffff),
      secondary: Color(0xff5e2328),
      onSecondary: Color(0xffffffff),
      secondaryContainer: Color(0xffa1585d),
      onSecondaryContainer: Color(0xffffffff),
      tertiary: Color(0xff003c4b),
      onTertiary: Color(0xffffffff),
      tertiaryContainer: Color(0xff24768e),
      onTertiaryContainer: Color(0xffffffff),
      error: Color(0xff740006),
      onError: Color(0xffffffff),
      errorContainer: Color(0xffcf2c27),
      onErrorContainer: Color(0xffffffff),
      surface: Color(0xfff4fbfa),
      onSurface: Color(0xff0c1212),
      onSurfaceVariant: Color(0xff413331),
      outline: Color(0xff5f4f4d),
      outlineVariant: Color(0xff7b6967),
      shadow: Color(0xff000000),
      scrim: Color(0xff000000),
      inverseSurface: Color(0xff2b3232),
      inversePrimary: Color(0xffffb4ab),
      primaryFixed: Color(0xffa25850),
      onPrimaryFixed: Color(0xffffffff),
      primaryFixedDim: Color(0xff84413a),
      onPrimaryFixedVariant: Color(0xffffffff),
      secondaryFixed: Color(0xffa1585d),
      onSecondaryFixed: Color(0xffffffff),
      secondaryFixedDim: Color(0xff844045),
      onSecondaryFixedVariant: Color(0xffffffff),
      tertiaryFixed: Color(0xff24768e),
      onTertiaryFixed: Color(0xffffffff),
      tertiaryFixedDim: Color(0xff005d73),
      onTertiaryFixedVariant: Color(0xffffffff),
      surfaceDim: Color(0xffc1c8c8),
      surfaceBright: Color(0xfff4fbfa),
      surfaceContainerLowest: Color(0xffffffff),
      surfaceContainerLow: Color(0xffeff5f4),
      surfaceContainer: Color(0xffe3e9e9),
      surfaceContainerHigh: Color(0xffd8dede),
      surfaceContainerHighest: Color(0xffccd3d3),
    );
  }

  ThemeData lightMediumContrast() {
    return theme(lightMediumContrastScheme());
  }

  static ColorScheme lightHighContrastScheme() {
    return const ColorScheme(
      brightness: Brightness.light,
      primary: Color(0xff511a15),
      surfaceTint: Color(0xff904a43),
      onPrimary: Color(0xffffffff),
      primaryContainer: Color(0xff76362f),
      onPrimaryContainer: Color(0xffffffff),
      secondary: Color(0xff51191f),
      onSecondary: Color(0xffffffff),
      secondaryContainer: Color(0xff75353a),
      onSecondaryContainer: Color(0xffffffff),
      tertiary: Color(0xff00313e),
      onTertiary: Color(0xffffffff),
      tertiaryContainer: Color(0xff005064),
      onTertiaryContainer: Color(0xffffffff),
      error: Color(0xff600004),
      onError: Color(0xffffffff),
      errorContainer: Color(0xff98000a),
      onErrorContainer: Color(0xffffffff),
      surface: Color(0xfff4fbfa),
      onSurface: Color(0xff000000),
      onSurfaceVariant: Color(0xff000000),
      outline: Color(0xff362927),
      outlineVariant: Color(0xff554544),
      shadow: Color(0xff000000),
      scrim: Color(0xff000000),
      inverseSurface: Color(0xff2b3232),
      inversePrimary: Color(0xffffb4ab),
      primaryFixed: Color(0xff76362f),
      onPrimaryFixed: Color(0xffffffff),
      primaryFixedDim: Color(0xff59201b),
      onPrimaryFixedVariant: Color(0xffffffff),
      secondaryFixed: Color(0xff75353a),
      onSecondaryFixed: Color(0xffffffff),
      secondaryFixedDim: Color(0xff591f25),
      onSecondaryFixedVariant: Color(0xffffffff),
      tertiaryFixed: Color(0xff005064),
      onTertiaryFixed: Color(0xffffffff),
      tertiaryFixedDim: Color(0xff003846),
      onTertiaryFixedVariant: Color(0xffffffff),
      surfaceDim: Color(0xffb4baba),
      surfaceBright: Color(0xfff4fbfa),
      surfaceContainerLowest: Color(0xffffffff),
      surfaceContainerLow: Color(0xffecf2f2),
      surfaceContainer: Color(0xffdde4e3),
      surfaceContainerHigh: Color(0xffcfd6d5),
      surfaceContainerHighest: Color(0xffc1c8c8),
    );
  }

  ThemeData lightHighContrast() {
    return theme(lightHighContrastScheme());
  }

  static ColorScheme darkScheme() {
    return const ColorScheme(
      brightness: Brightness.dark,
      primary: Color(0xffffb4ab),
      surfaceTint: Color(0xffffb4ab),
      onPrimary: Color(0xff561e19),
      primaryContainer: Color(0xff73332d),
      onPrimaryContainer: Color(0xffffdad6),
      secondary: Color(0xffffb3b6),
      onSecondary: Color(0xff561d23),
      secondaryContainer: Color(0xff723338),
      onSecondaryContainer: Color(0xffffdada),
      tertiary: Color(0xff88d1ec),
      onTertiary: Color(0xff003543),
      tertiaryContainer: Color(0xff004e61),
      onTertiaryContainer: Color(0xffb7eaff),
      error: Color(0xffffb4ab),
      onError: Color(0xff690005),
      errorContainer: Color(0xff93000a),
      onErrorContainer: Color(0xffffdad6),
      surface: Color(0xff0e1415),
      onSurface: Color(0xffdde4e3),
      onSurfaceVariant: Color(0xffd8c2bf),
      outline: Color(0xffa08c8a),
      outlineVariant: Color(0xff534341),
      shadow: Color(0xff000000),
      scrim: Color(0xff000000),
      inverseSurface: Color(0xffdde4e3),
      inversePrimary: Color(0xff904a43),
      primaryFixed: Color(0xffffdad6),
      onPrimaryFixed: Color(0xff3b0907),
      primaryFixedDim: Color(0xffffb4ab),
      onPrimaryFixedVariant: Color(0xff73332d),
      secondaryFixed: Color(0xffffdada),
      onSecondaryFixed: Color(0xff3b080f),
      secondaryFixedDim: Color(0xffffb3b6),
      onSecondaryFixedVariant: Color(0xff723338),
      tertiaryFixed: Color(0xffb7eaff),
      onTertiaryFixed: Color(0xff001f28),
      tertiaryFixedDim: Color(0xff88d1ec),
      onTertiaryFixedVariant: Color(0xff004e61),
      surfaceDim: Color(0xff0e1415),
      surfaceBright: Color(0xff343a3b),
      surfaceContainerLowest: Color(0xff090f10),
      surfaceContainerLow: Color(0xff161d1d),
      surfaceContainer: Color(0xff1a2121),
      surfaceContainerHigh: Color(0xff252b2b),
      surfaceContainerHighest: Color(0xff303636),
    );
  }

  ThemeData dark() {
    return theme(darkScheme());
  }

  static ColorScheme darkMediumContrastScheme() {
    return const ColorScheme(
      brightness: Brightness.dark,
      primary: Color(0xffffd2cc),
      surfaceTint: Color(0xffffb4ab),
      onPrimary: Color(0xff48130f),
      primaryContainer: Color(0xffcc7b72),
      onPrimaryContainer: Color(0xff000000),
      secondary: Color(0xffffd1d2),
      onSecondary: Color(0xff481219),
      secondaryContainer: Color(0xffca7a7f),
      onSecondaryContainer: Color(0xff000000),
      tertiary: Color(0xffa5e6ff),
      onTertiary: Color(0xff002a35),
      tertiaryContainer: Color(0xff509ab4),
      onTertiaryContainer: Color(0xff000000),
      error: Color(0xffffd2cc),
      onError: Color(0xff540003),
      errorContainer: Color(0xffff5449),
      onErrorContainer: Color(0xff000000),
      surface: Color(0xff0e1415),
      onSurface: Color(0xffffffff),
      onSurfaceVariant: Color(0xffeed7d4),
      outline: Color(0xffc2adaa),
      outlineVariant: Color(0xffa08c89),
      shadow: Color(0xff000000),
      scrim: Color(0xff000000),
      inverseSurface: Color(0xffdde4e3),
      inversePrimary: Color(0xff74352e),
      primaryFixed: Color(0xffffdad6),
      onPrimaryFixed: Color(0xff2c0101),
      primaryFixedDim: Color(0xffffb4ab),
      onPrimaryFixedVariant: Color(0xff5e231e),
      secondaryFixed: Color(0xffffdada),
      onSecondaryFixed: Color(0xff2c0006),
      secondaryFixedDim: Color(0xffffb3b6),
      onSecondaryFixedVariant: Color(0xff5e2328),
      tertiaryFixed: Color(0xffb7eaff),
      onTertiaryFixed: Color(0xff00141b),
      tertiaryFixedDim: Color(0xff88d1ec),
      onTertiaryFixedVariant: Color(0xff003c4b),
      surfaceDim: Color(0xff0e1415),
      surfaceBright: Color(0xff3f4646),
      surfaceContainerLowest: Color(0xff040809),
      surfaceContainerLow: Color(0xff181f1f),
      surfaceContainer: Color(0xff232929),
      surfaceContainerHigh: Color(0xff2d3434),
      surfaceContainerHighest: Color(0xff383f3f),
    );
  }

  ThemeData darkMediumContrast() {
    return theme(darkMediumContrastScheme());
  }

  static ColorScheme darkHighContrastScheme() {
    return const ColorScheme(
      brightness: Brightness.dark,
      primary: Color(0xffffece9),
      surfaceTint: Color(0xffffb4ab),
      onPrimary: Color(0xff000000),
      primaryContainer: Color(0xffffaea4),
      onPrimaryContainer: Color(0xff220001),
      secondary: Color(0xffffeceb),
      onSecondary: Color(0xff000000),
      secondaryContainer: Color(0xffffadb1),
      onSecondaryContainer: Color(0xff210004),
      tertiary: Color(0xffdbf4ff),
      onTertiary: Color(0xff000000),
      tertiaryContainer: Color(0xff84cde8),
      onTertiaryContainer: Color(0xff000d13),
      error: Color(0xffffece9),
      onError: Color(0xff000000),
      errorContainer: Color(0xffffaea4),
      onErrorContainer: Color(0xff220001),
      surface: Color(0xff0e1415),
      onSurface: Color(0xffffffff),
      onSurfaceVariant: Color(0xffffffff),
      outline: Color(0xffffece9),
      outlineVariant: Color(0xffd4bebb),
      shadow: Color(0xff000000),
      scrim: Color(0xff000000),
      inverseSurface: Color(0xffdde4e3),
      inversePrimary: Color(0xff74352e),
      primaryFixed: Color(0xffffdad6),
      onPrimaryFixed: Color(0xff000000),
      primaryFixedDim: Color(0xffffb4ab),
      onPrimaryFixedVariant: Color(0xff2c0101),
      secondaryFixed: Color(0xffffdada),
      onSecondaryFixed: Color(0xff000000),
      secondaryFixedDim: Color(0xffffb3b6),
      onSecondaryFixedVariant: Color(0xff2c0006),
      tertiaryFixed: Color(0xffb7eaff),
      onTertiaryFixed: Color(0xff000000),
      tertiaryFixedDim: Color(0xff88d1ec),
      onTertiaryFixedVariant: Color(0xff00141b),
      surfaceDim: Color(0xff0e1415),
      surfaceBright: Color(0xff4b5151),
      surfaceContainerLowest: Color(0xff000000),
      surfaceContainerLow: Color(0xff1a2121),
      surfaceContainer: Color(0xff2b3232),
      surfaceContainerHigh: Color(0xff363d3d),
      surfaceContainerHighest: Color(0xff414848),
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
