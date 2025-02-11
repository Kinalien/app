import { type ComponentProps, splitProps } from "solid-js";
import { type VariantProps, tv as css } from "tailwind-variants";

import { Text } from "./text";
import { tw } from "./tw";

interface Props extends ComponentProps<"div">, VariantProps<typeof chipCss> {}

export const Chip = (ownProps: Props) => {
	const [local, props] = splitProps(ownProps, ["tone"]);
	return <Text as="div" with="label-sm" {...props} class={tw(chipCss(local), props.class)} />;
};
const chipCss = css({
	base: "flex min-w-12 cursor-default flex-row items-center justify-center gap-2 self-end rounded-full bg-primary-container p-2 text-on-primary-container",
	variants: {
		tone: {
			neutral: "bg-on-surface/5 text-on-surface",
			primary: "bg-primary-container/30 text-on-primary-container",
			secondary: "bg-tertiary-container text-on-tertiary-container",
		},
	},
	defaultVariants: {
		tone: "neutral",
	},
});
