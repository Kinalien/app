import { Icon, tw } from "@alien/ui";
import { A } from "@solidjs/router";
import { type JSX, Show } from "solid-js";

function LogoLink(props: {
	class?: JSX.AnchorHTMLAttributes<HTMLAnchorElement>["class"];
	label?: string;
}) {
	return (
		<A
			href="/"
			aria-label={props.label}
			title={props.label}
			class={tw("flex flex-row items-center gap-4", props.class)}
		>
			<Icon use="kinalien" class="size-14" />
			<Show when={props.label}>
				<span class="hidden text-lg sm:inline-block">{props.label}</span>
			</Show>
		</A>
	);
}

export { LogoLink };
