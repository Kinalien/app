import { Show, createSignal } from "solid-js";
import { Text } from "~/text";
import { tw } from "~/tw";
import { mergeDefaultProps } from "~/utils";

export function ColorSwatch(ownProps: {
	class: string;
	variant?: "row" | "column";
}) {
	const props = mergeDefaultProps(ownProps, { variant: "row" });
	const [color, setColor] = createSignal("");
	const token = props.class
		.split(" ")
		.find((c) => c.startsWith("bg-"))
		?.replace("bg-", "");
	return (
		<div
			class={tw(
				"flex gap-4",
				props.variant === "row" ? "flex-row items-center" : "w-full flex-col",
			)}
			ref={() => {
				const tokenColor = getComputedStyle(document.documentElement).getPropertyValue(
					`--alien-${token}`,
				);
				setColor(tokenColor);
			}}
		>
			<div class={tw("size-16 rounded-md border border-outline", props.class)} />
			<div>
				<Text as="code" class="font-medium font-mono">
					{token}
				</Text>
				<Show when={color()}>
					<Text as="div" class="text-sm" tone="light">
						{color()}
					</Text>
				</Show>
			</div>
		</div>
	);
}
