import { A } from "@solidjs/router";
import { type JSX, Show, type ValidComponent, splitProps } from "solid-js";
import { Dynamic, type DynamicProps } from "solid-js/web";

import { Spinner } from "./spinner";
import { type VariantProps, tv, tw } from "./tw";
import { type Merge, mergeDefaultProps } from "./utils";

const buttonVariants = tv({
	base: "relative border-none [text-box:_trim-both_cap_alphabetic] inline-flex cursor-default select-none items-center justify-center gap-2 rounded-full font-medium text-sm outline-offset-4 transition focus-visible:outline-4 disabled:pointer-events-none disabled:opacity-50",
	variants: {
		size: {
			base: "min-h-12 min-w-12 px-5 py-2 text-base",
			sm: "min-h-10 min-w-10 px-3 text-sm",
			lg: "min-h-16 min-w-16 px-8 text-lg sm:min-h-14 sm:min-w-14",
			cta: "min-h-16 min-w-16 rounded-full px-8 text-lg",
		},
		variant: {
			accent: "bg-primary text-on-primary outline-primary",
			tonal: "outline-on-surface",
			outline:
				"border border-outline bg-transparent text-on-surface outline-on-surface outline-offset-0",
			ghost: "text-on-surface outline-on-surface",
			link: "text-primary underline-offset-4",
		},
		pending: {
			true: "disabled:opacity-90",
			false: "",
		},
		icon: {
			true: "p-0",
			false: "",
		},
		tone: {
			neutral: "",
			primary: "",
			secondary: "",
			success: "",
			destructive: "",
		},
	},
	defaultVariants: {
		variant: "tonal",
		tone: "neutral",
		size: "base",
		icon: false,
	},
	compoundVariants: [
		{
			variant: "accent",
			class: "intent:filter-darker [--btn-bg:var(--color-primary)]",
		},
		{
			variant: "accent",
			tone: "secondary",
			class:
				"intent:filter-darker bg-tertiary text-on-tertiary outline-tertiary [--btn-bg:var(--color-tertiary)]",
		},
		{
			variant: "accent",
			tone: "destructive",
			class:
				"bg-error intent:bg-error/90 text-on-error outline-error [--btn-bg:var(--color-error)]",
		},
		{
			variant: "outline",
			class: "intent:bg-on-surface/8",
		},
		{
			variant: "outline",
			tone: "destructive",
			class:
				"border-error intent:bg-error-container/30 text-error outline-error [--btn-bg:var(--color-surface)]",
		},
		{
			variant: "tonal",
			tone: "neutral",
			class:
				"bg-on-surface/5 intent:bg-on-surface/8 text-on-surface [--btn-bg:var(--color-surface)]",
		},
		{
			variant: "tonal",
			tone: "primary",
			class:
				"intent:filter-darker bg-primary-container text-on-primary-container [--btn-bg:var(--color-primary-container)]",
		},
		{
			variant: "tonal",
			tone: "secondary",
			class:
				"intent:filter-darker bg-tertiary-container text-on-tertiary-container [--btn-bg:var(--color-tertiary-container)]",
		},
		{
			variant: "tonal",
			tone: "destructive",
			class:
				"bg-error/5 text-error [--btn-bg:var(--color-error/0.05)] hover:bg-error/8 focus:bg-error/12",
		},
		{
			variant: "tonal",
			tone: "success",
			// TODO
			class: "",
		},
		{
			variant: "ghost",
			tone: "neutral",
			class: "[--btn-bg:var(--color-surface)] hover:bg-on-surface/5 focus:bg-on-surface/8",
		},
		{
			variant: "ghost",
			tone: "primary",
			class:
				"text-primary outline-primary [--btn-bg:var(--color-surface)] hover:bg-primary/5 focus:bg-primary/8",
		},
		{
			variant: "ghost",
			tone: "destructive",
			class: "text-error [--btn-bg:var(--color-error/0.05)] hover:bg-error/5 focus:bg-error/8",
		},
		{
			variant: "link",
			class: "intent:underline",
		},
	],
});

type ButtonVariants = VariantProps<typeof buttonVariants> & { label?: string };

type BaseProps<T extends ValidComponent> = Merge<
	DynamicProps<T>,
	ButtonVariants & {
		style?: JSX.CSSProperties;
	}
>;

const BaseComponent = <T extends ValidComponent>(ownProps: BaseProps<T>) => {
	const [local, props] = splitProps(ownProps as BaseProps<"button">, [
		"size",
		"pending",
		"variant",
		"tone",
		"icon",
		"label",
		"title",
		"style",
		"disabled",
	]);
	return (
		<Dynamic
			{...(props as DynamicProps<T>)}
			aria-label={local.label}
			aria-busy={local.pending}
			title={local.title ?? local.label}
			class={tw(buttonVariants(local), props.class)}
			onClick={(event: MouseEvent) => {
				if (
					local.pending ||
					local.disabled ||
					(props["aria-disabled"] && props["aria-disabled"] !== "false")
				) {
					event.preventDefault();
					return;
				}
				if (typeof props.onClick === "function") {
					props.onClick(
						event as MouseEvent & {
							currentTarget: HTMLButtonElement;
							target: Element;
						},
					);
				} else if (Array.isArray(props.onClick)) {
					props.onClick[1](props.onClick[0], event);
				}
			}}
			aria-disabled={local.pending || local.disabled || props["aria-disabled"]}
			style={
				props.popoverTarget
					? ({
							...local.style,
							"anchor-name": `--anchor-${props.popoverTarget}`,
						} satisfies JSX.CSSProperties)
					: local.style
			}
		>
			{props.children}
			<Show when={local.pending}>
				<div class="absolute inset-0 isolate flex cursor-default items-center justify-center rounded-[inherit] bg-[radial-gradient(circle_at_50%_50%,color-mix(in_lch,var(--btn-bg)_92%,transparent)_30%,transparent)]">
					<Spinner size={local.size} />
				</div>
			</Show>
		</Dynamic>
	);
};

const Button = (ownProps: Omit<BaseProps<"button">, "component" | "split">) => {
	const props = mergeDefaultProps(ownProps, {
		type: "button",
	});
	return <BaseComponent {...props} component="button" />;
};

const ButtonLink = (ownProps: Omit<BaseProps<typeof A>, "component">) => {
	return <BaseComponent {...ownProps} component={A} />;
};

const SplitButton = (ownProps: Omit<BaseProps<"div">, "component" | "icon">) => {
	return (
		<BaseComponent
			{...ownProps}
			icon={false}
			class={tw(ownProps.class, "flex w-fit p-0 *:rounded-[inherit]")}
			component="div"
		/>
	);
};
SplitButton.Inner = (ownProps: Omit<BaseProps<"button">, "component">) => {
	return <Button {...ownProps} size="sm" variant="ghost" />;
};

export { Button, ButtonLink, SplitButton };
