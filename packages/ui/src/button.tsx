import { type JSX, Show, type ValidComponent, splitProps } from "solid-js";
import { Dynamic, type DynamicProps } from "solid-js/web";

import { Spinner } from "./spinner";
import { type VariantProps, tv, tw } from "./tw";
import { type Merge, mergeDefaultProps } from "./utils";

const buttonVariants = tv({
	base: "relative [text-box:_trim-both_cap_alphabetic] inline-flex cursor-default select-none items-center justify-center gap-2 rounded-full font-medium text-sm outline-offset-2 transition focus-visible:outline-2 disabled:pointer-events-none disabled:opacity-50",
	variants: {
		size: {
			base: "min-h-12 min-w-12 px-5 py-2 text-sm",
			sm: "min-h-10 min-w-10 px-3 text-sm",
			lg: "min-h-16 min-w-16 px-8 text-lg sm:min-h-14 sm:min-w-14",
			cta: "min-h-16 min-w-16 rounded-full px-8 text-lg",
		},
		variant: {
			accent: "bg-primary border-none text-on-primary outline-primary",
			tonal: "border-none outline-on-surface",
			outline:
				"border border-outline bg-transparent text-on-surface outline-on-surface outline-offset-0",
			ghost: "border-none text-on-surface outline-on-surface",
			text: "p-0 border-none text-primary underline-offset-4",
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
			tertiary: "",
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
			class:
				"intent:bg-[color-mix(in_hsl,var(--nou-btn-bg)_92%,var(--nou-on-background))] [--nou-btn-bg:var(--color-primary)]",
		},
		{
			variant: "accent",
			tone: "tertiary",
			class:
				"intent:bg-[color-mix(in_hsl,var(--nou-btn-bg)_92%,var(--nou-on-background))] bg-tertiary text-on-tertiary outline-tertiary [--nou-btn-bg:var(--color-tertiary)]",
		},
		{
			variant: "accent",
			tone: "destructive",
			class:
				"bg-error intent:bg-error/90 text-on-error outline-error [--nou-btn-bg:var(--color-error)]",
		},
		{
			variant: "outline",
			class: "intent:bg-on-surface/8 [--nou-btn-bg:var(--color-surface)]",
		},
		{
			variant: "outline",
			tone: "destructive",
			class:
				"border-error intent:bg-error-container/30 text-error outline-error [--nou-btn-bg:var(--color-surface)]",
		},
		{
			variant: "tonal",
			tone: "neutral",
			class:
				"bg-on-surface/5 intent:bg-on-surface/8 text-on-surface [--nou-btn-bg:var(--color-surface)]",
		},
		{
			variant: "tonal",
			tone: "primary",
			class:
				"intent:bg-[color-mix(in_hsl,var(--nou-btn-bg)_92%,var(--nou-on-background))] bg-primary-container text-on-primary-container [--nou-btn-bg:var(--color-primary-container)]",
		},
		{
			variant: "tonal",
			tone: "tertiary",
			class:
				"intent:bg-[color-mix(in_hsl,var(--nou-btn-bg)_92%,var(--nou-on-background))] bg-tertiary-container text-on-tertiary-container [--nou-btn-bg:var(--color-tertiary-container)]",
		},
		{
			variant: "tonal",
			tone: "destructive",
			class:
				"bg-error/5 text-error [--nou-btn-bg:color-mix(in_oklab,var(--nou-error)_8%,var(--nou-background))] hover:bg-error/8 focus:bg-error/12",
		},
		{
			variant: "ghost",
			tone: "neutral",
			class: "[--nou-btn-bg:var(--color-surface)] hover:bg-on-surface/5 focus:bg-on-surface/8",
		},
		{
			variant: "ghost",
			tone: "destructive",
			class:
				"text-error [--nou-btn-bg:color-mix(in_oklab,var(--nou-error)_8%,var(--nou-background))] hover:bg-error/5 focus:bg-error/8",
		},
		{
			variant: "text",
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
				<div class="absolute inset-0 isolate flex cursor-default items-center justify-center rounded-[inherit] bg-[radial-gradient(circle_at_50%_50%,color-mix(in_lch,var(--nou-btn-bg)_98%,transparent)_30%,transparent)]">
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

const ButtonLink = (ownProps: Omit<BaseProps<"a">, "component">) => {
	return <BaseComponent {...ownProps} component="a" />;
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
