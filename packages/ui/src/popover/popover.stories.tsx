import { createAsync } from "@solidjs/router";
import { Show, Suspense } from "solid-js";

import { Avatar } from "../avatar";
import { Button } from "../button";
import { Icon } from "../icon/icon";
import { MenuItem, MenuList } from "../menu";
import { Text } from "../text";

import { Popover, type PopoverProps } from "./popover";

export const AccountMenu = (props: PopoverProps<"div">) => {
	return (
		<div class="grid size-full place-content-center">
			<Button popoverTarget="account-menu" variant="ghost" icon>
				<Avatar name="John Doe" avatarUrl={null} />
			</Button>
			<Popover {...props} class="flex w-[240px] flex-col gap-4" id="account-menu">
				<a
					// biome-ignore lint/a11y/useValidAnchor: explained
					href="#"
					class="flex w-full items-center justify-start gap-4 ps-3 text-primary"
				>
					John Doe
					<Avatar name="John Doe" class="ms-auto" avatarUrl={null} />
				</a>
				<MenuList>
					<MenuItem>Account</MenuItem>
					<MenuItem>Install for offline</MenuItem>
					<MenuItem>Log Out</MenuItem>
				</MenuList>
			</Popover>
		</div>
	);
};

export const ContextualHelp = (props: PopoverProps<"div">) => {
	return (
		<div class="flex size-full items-center justify-center">
			<Button aria-label="Info" popoverTarget="info" variant="ghost" icon>
				<Icon use="info" size="md" />
			</Button>
			{/* biome-ignore lint/a11y/useSemanticElements: <explanation> */}
			<Popover {...props} role="dialog" id="info" aria-labelledby="info-heading" class="w-[300px]">
				<h2 id="info-heading" class="text-lg">
					How this is used?
				</h2>
				<p class="mt-2 text-sm">
					The ID is only used for quick verification of the attending animal. It cannot be used as
					an official document.
				</p>
			</Popover>
		</div>
	);
};

const AsyncOrHeavyComponent = () => {
	const joke = createAsync(async () => {
		const response = await fetch("https://v2.jokeapi.dev/joke/Programming?type=single").then(
			(res) => res.json(),
		);
		console.log(response.joke);
		return response.joke as string;
	});

	return (
		<Show when={joke()}>
			<Text class="max-w-56 text-balance">{joke()}</Text>
		</Show>
	);
};

export const LazyRender = (props: PopoverProps<"div">) => {
	return (
		<>
			<Button popoverTarget="lazy">Show a joke</Button>
			<Popover {...props} id="lazy">
				{(open) => (
					<Show when={open()}>
						<Suspense>
							<AsyncOrHeavyComponent />
						</Suspense>
					</Show>
				)}
			</Popover>
		</>
	);
};
