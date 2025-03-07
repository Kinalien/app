import { Button, ButtonLink, Card, Form, Icon, Image, Text } from "@nou/ui";
import { Title } from "@solidjs/meta";
import {
	A,
	type RouteDefinition,
	type RouteSectionProps,
	createAsync,
	useSubmission,
} from "@solidjs/router";
import { Match, Show, Suspense, Switch } from "solid-js";

import { checkFamilyInvite, joinFamilyWithLink } from "~/server/api/family-invite";
import { getUserProfile } from "~/server/api/user";
import { UserAlreadyInFamily, isErrorResponse } from "~/server/errors";
import { createTranslator, queryDictionary } from "~/server/i18n";

import { AccountMenu } from "~/lib/account-menu";
import { FamilyInviteBenefits } from "~/lib/family-invite-benefits";
import { HeroImage } from "~/lib/hero-image";

export const route = {
	preload() {
		void queryDictionary("invited");
		void getUserProfile();
	},
} satisfies RouteDefinition;

export default function InviteAcceptPage(props: RouteSectionProps) {
	const code = props.params["invite-code"];
	const t = createTranslator("invited");
	const user = createAsync(() => getUserProfile());
	const userInvite = createAsync(() => checkFamilyInvite(code!));

	const joinSubmission = useSubmission(joinFamilyWithLink);
	const invite = () => {
		const invite = userInvite();
		return invite && "invite" in invite ? invite.invite : null;
	};

	const alreadyInFamily = () => isErrorResponse(userInvite(), UserAlreadyInFamily);
	const failed = () => isErrorResponse(userInvite(), Error);

	return (
		<>
			<Title>{t("meta.title")}</Title>
			<div class="grid min-h-full grid-cols-12 grid-rows-[auto,1fr] gap-6 bg-main p-6">
				<header class="z-10 col-start-1 col-end-[-1] row-[1] flex flex-row items-center justify-between gap-8 md:col-start-1 md:col-end-6">
					<div class="flex flex-row items-center">
						<A href="/app" class="group -m-4 flex items-center gap-4 p-4">
							<Icon use="nouvet" class="group-hover:-rotate-6 size-14 duration-200" />
							<Text with="body-lg">{t("logo-label")}</Text>
						</A>
					</div>
					<Suspense>
						<Show when={user()}>
							{(user) => <AccountMenu name={user().name || ""} avatarUrl={user().avatarUrl} />}
						</Show>
					</Suspense>
				</header>
				<main class="col-start-1 col-end-[-1] flex flex-col gap-8 md:row-[1/-1] md:grid md:grid-cols-12 md:grid-rows-subgrid md:items-center">
					<Suspense>
						<Switch>
							<Match when={alreadyInFamily()}>
								<div class="z-10 col-span-5 col-start-1 row-[2] flex flex-col gap-6 rounded-3xl bg-background bg-main p-4 [background-attachment:fixed] sm:w-[clamp(340px,100%,480px)] lg:col-start-2">
									<Text with="headline-1">{t("already-in-family.heading")}</Text>
									<Text as="p">{t("already-in-family.description")}</Text>
									<ButtonLink href="/app/family" class="gap-2 self-end" variant="outline">
										<Icon use="chevron-left" /> {t("already-in-family.cta")}
									</ButtonLink>
								</div>

								<div class="col-span-7 col-end-[-1] row-[1/-1] ms-auto w-[clamp(320px,100%,90svw)] self-start rounded-3xl">
									<Image
										src="/assets/images/andriyko-podilnyk-dWSl8REfpoQ-unsplash.jpg"
										width={600}
										aspectRatio=""
										alt=""
										class="w-full rounded-3xl bg-primary/5 object-cover"
									/>
								</div>
							</Match>
							<Match when={invite()}>
								{(invite) => {
									const inviterName = invite().inviterName;
									return (
										<>
											<Form
												action={joinFamilyWithLink}
												class="z-10 col-span-6 col-start-1 row-[2] flex flex-col gap-6 rounded-3xl bg-background bg-main [background-attachment:fixed] sm:p-6 md:max-w-[600px] lg:col-span-5 lg:col-start-2"
											>
												<Text with="headline-1">
													{inviterName
														? t("accept-invite.heading", {
																inviterName: inviterName,
															})
														: t("accept-invite.heading.no-name")}
												</Text>
												<Text as="p">{t("accept-invite.description")}</Text>
												<div class="grid grid-cols-[min-content,1fr] gap-2 sm:flex-row">
													<ButtonLink href="/app" variant="outline">
														<Icon use="chevron-left" />
														{t("accept-invite.cta-cancel")}
													</ButtonLink>
													<input type="hidden" value={code} name="invite-code" />
													<Button type="submit" pending={joinSubmission.pending}>
														{t("accept-invite.cta-join")}
													</Button>
												</div>
											</Form>

											<div class="col-span-7 col-start-6 row-[1/-1] ms-auto hidden size-full max-h-[500px] overflow-hidden rounded-3xl md:grid md:max-h-[calc(100vh-var(--spacing-6)*2)]">
												<HeroImage
													alt=""
													class="ms-auto size-full min-h-0 rounded-3xl object-cover object-center md:max-w-full"
												/>
											</div>

											<div class="col-start-8 col-end-[-1] row-[2] w-full max-w-[340px] self-end justify-self-end overflow-hidden overscroll-contain rounded-3xl bg-surface p-3 [background-attachment:fixed] md:me-3 md:mb-3 md:bg-background md:bg-main">
												<FamilyInviteBenefits class="-mx-6 px-6 *:w-full" />
											</div>

											<Show when={joinSubmission.error}>
												<Card
													role="alert"
													variant="tonal"
													tone="failure"
													class="col-span-4 col-start-1 row-[2] flex max-w-[320px] flex-col gap-6 self-end rounded-3xl [background-attachment:fixed] md:mb-4 lg:col-span-5 lg:col-start-2"
												>
													{t("acceptInvite.failed")}
												</Card>
											</Show>
										</>
									);
								}}
							</Match>
							<Match when={failed()}>
								<div class="z-10 col-span-5 col-start-1 row-[2] flex flex-col gap-6 rounded-3xl bg-background bg-main p-4 [background-attachment:fixed] sm:w-[clamp(340px,100%,480px)] lg:col-start-2">
									<Text with="headline-1">{t("expired.heading")}</Text>
									<Text as="p">{t("expired.description")}</Text>
									<ButtonLink href="/app" class="self-end" variant="outline">
										<Icon use="chevron-left" /> {t("expired.cta")}
									</ButtonLink>
								</div>

								<div class="col-span-7 col-end-[-1] row-[1/-1] ms-auto w-[clamp(320px,100%,90svw)] self-start rounded-3xl">
									<img
										src="/assets/images/andriyko-podilnyk-dWSl8REfpoQ-unsplash.jpg?w=600&format=webp&imagetools"
										alt=""
										class="w-full rounded-3xl bg-primary/5 object-cover"
									/>
								</div>
							</Match>
						</Switch>
					</Suspense>
				</main>
			</div>
		</>
	);
}
