import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { useColorScheme } from "react-native";
import { TamaguiProvider } from "tamagui";
import { tamaguiConfig } from "../tamagui.config";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const colorScheme = useColorScheme();
	const [loaded] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
			<Stack>
				{/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
				<Stack.Screen name="+not-found" />
			</Stack>
			<StatusBar style="auto" />
		</TamaguiProvider>
	);
}
