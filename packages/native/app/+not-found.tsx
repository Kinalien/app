import { Link, Stack } from "expo-router";
import { Text, YStack } from "tamagui";

export default function NotFoundScreen() {
	return (
		<>
			<Stack.Screen options={{ title: "Oops!" }} />
			<YStack p="$4" flex={1}>
				<Text theme="accent">This screen doesn't exist.</Text>
				<Link href="/">
					<Text>Go to home screen!</Text>
				</Link>
			</YStack>
		</>
	);
}
