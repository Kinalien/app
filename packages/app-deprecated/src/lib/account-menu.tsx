import { Avatar, Button, Divider, Icon, MenuItem, MenuList, Popover, Text } from "@alien/ui";
import { A, useLocation } from "@solidjs/router";

import { createTranslator } from "~/server/i18n";

interface AccountMenu {
	name: string;
	avatarUrl: string | null;
}

export const AccountMenu = (props: AccountMenu) => {
	const t = createTranslator("app");
	const location = useLocation();
	return (
		<>
			<Button popoverTarget="account-menu" variant="ghost" icon label={t("account-menu.label")}>
				<Avatar name={props.name} avatarUrl={props.avatarUrl} />
			</Button>
			<Popover
				id="account-menu"
				placement="top-to-bottom right-to-right"
				class="flex max-h-96 w-[260px] flex-col rounded-3xl bg-surface p-3"
			>
				<div class="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-1 px-3 py-4 pt-2">
					<Avatar name={props.name} avatarUrl={props.avatarUrl} class="size-8" />
					<Text with="label">{props.name}</Text>
				</div>
				<MenuList class="flex flex-col rounded-2xl bg-surface">
					<MenuItem as={A} href="/app/profile" state={{ previous: location.pathname }}>
						<Icon use="user-circle" size="sm" />
						{t("account-menu.account")}
					</MenuItem>
					<MenuItem>
						<Icon use="install" size="sm" />
						<Text as="p">{t("account-menu.pwa-title")}</Text>
					</MenuItem>
					<MenuItem as={A} href="/help">
						<Icon use="seal-warning" size="sm" />
						{t("account-menu.support")}
					</MenuItem>
					<Divider class="my-2" />
					<MenuItem as="a" href="/app/logout">
						<Icon use="sign-out" size="sm" />
						{t("account-menu.logout")}
					</MenuItem>
				</MenuList>
			</Popover>
		</>
	);
};
