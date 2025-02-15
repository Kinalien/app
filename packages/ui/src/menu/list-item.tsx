import { type ComponentProps, type ValidComponent, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

import { type VariantProps, tv, tw } from "../tw";
import { type Merge, mergeDefaultProps } from "../utils";

import styles from "./menu.module.css";

const listItemVariants = tv({
	base: styles.listItem,
	variants: {
		tone: {
			neutral: styles.listItemNeutral,
			destructive: styles.listItemDestructive,
		},
	},
	defaultVariants: {
		tone: "neutral",
	},
});

type ListItemProps<T extends ValidComponent> = Merge<
	ComponentProps<T>,
	VariantProps<typeof listItemVariants> & {
		/**
		 * @default div
		 */
		as?: T;
	}
>;

export const ListItem = <T extends ValidComponent = "div">(ownProps: ListItemProps<T>) => {
	const [local, props] = splitProps(
		mergeDefaultProps(ownProps as ListItemProps<"div">, {
			as: "div",
		}),
		["as", "tone", "style", "class"],
	);
	return (
		<Dynamic
			component={local.as}
			{...props}
			class={tw(listItemVariants({ tone: local.tone }), local.class)}
		/>
	);
};
