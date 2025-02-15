import { type ClassNameValue, extendTailwindMerge } from "tailwind-merge";
import { createTV } from "tailwind-variants";

export const tv = createTV({ twMerge: false });
export type { VariantProps } from "tailwind-variants";

const customTwMerge = extendTailwindMerge({
	extend: {
		theme: {
			spacing: ["font"],
		},
		classGroups: {
			overflow: ["overflow-snap"],
		},
	},
});

export function tw(...classNames: ClassNameValue[]) {
	return customTwMerge(...classNames);
}
