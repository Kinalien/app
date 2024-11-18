import type { RouteDefinition } from "@solidjs/router";

export const route = {
	preload() {},
} satisfies RouteDefinition;

export default function Home() {
	return (
		<main class="w-full space-y-2 p-4">
			<h2 class="font-bold text-3xl">{"hello"}</h2>
			<h3 class="font-bold text-xl">Message board</h3>
		</main>
	);
}
