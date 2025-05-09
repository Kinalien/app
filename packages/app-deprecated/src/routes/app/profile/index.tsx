import {
	Avatar,
	Button,
	Card,
	Fieldset,
	Form,
	Option,
	Picker,
	Text,
	TextField,
	Toast,
	toast,
} from "@alien/ui";
import { Title } from "@solidjs/meta";
import { type RouteDefinition, createAsync, useAction, useSubmission } from "@solidjs/router";
import { Show, Suspense } from "solid-js";

import { getUserProfile, updateUserProfile } from "~/server/api/user";
import type { DatabaseUser } from "~/server/db/schema";
import { createTranslator, queryDictionary } from "~/server/i18n";
import type { SupportedLocale } from "~/server/i18n/shared";

import { AppHeader } from "~/lib/app-header";
import { pickSubmissionValidationErrors } from "~/lib/utils/submission";

export const route = {
	preload() {
		void queryDictionary("profile");
		void getUserProfile();
	},
} satisfies RouteDefinition;

export default function ProfilePage() {
	const t = createTranslator("profile");

	const user = createAsync(() => getUserProfile());
	const updateProfileAction = useAction(updateUserProfile);
	const profileSubmission = useSubmission(updateUserProfile);

	return (
		<>
			<Title>{t("meta.title")}</Title>
			<div class="min-h-full bg-background">
				<AppHeader backLink="/app" />
				<section class="container flex flex-col items-center gap-6">
					<Suspense>
						<Show when={user()}>
							{(user) => (
								<Card
									variant="outlined"
									class="fade-in slide-in-from-bottom-1 w-full max-w-[26rem] animate-in"
									aria-labelledby="heading-profile"
								>
									<Form
										class="flex flex-col gap-8"
										action={updateUserProfile}
										validationErrors={pickSubmissionValidationErrors(profileSubmission)}
										onSubmit={async (e) => {
											e.preventDefault();
											const formData = new FormData(e.currentTarget);
											const result = await updateProfileAction(formData);
											if ("failureReason" in result && result.failureReason === "other") {
												toast(
													() => (
														<Toast
															variant="tonal"
															tone="failure"
															heading={<Text tone="danger">{t("save.failure")}</Text>}
														/>
													),
													{ duration: Number.POSITIVE_INFINITY },
												);
											} else if ("id" in result) {
												toast(() => (
													<Toast heading={<Text tone="accent">{t("save.success")}</Text>} />
												));
											}
										}}
									>
										<div class="flex flex-col gap-3">
											<Text with="overline" id="heading-profile">
												{t("section.profile")}
											</Text>
											<div class="flex flex-row items-center gap-8">
												<TextField
													label={t("setting.name")}
													value={user().name ?? ""}
													class="flex-[2]"
													autocomplete="name"
													name="name"
												/>
												<Avatar avatarUrl={user().avatarUrl} name={user().name || ""} size="lg" />
											</div>
										</div>

										<Fieldset
											class="grid gap-6 sm:grid-cols-2"
											legend={<Text with="overline">{t("section.locale")}</Text>}
										>
											<Picker
												label={t("setting.locale")}
												autocomplete="language"
												class="[&_[data-part=trigger]_[data-flag]]:block"
												name="locale"
											>
												<Option
													value={"en-GB" satisfies SupportedLocale}
													selected={user().locale.startsWith("en")}
													label={
														<div class="flex w-full flex-row justify-between gap-4">
															English
															<span class="hidden" data-flag>
																🏴󠁧󠁢󠁥󠁮󠁧󠁿
															</span>
														</div>
													}
												/>
												<Option
													value={"es-ES" satisfies SupportedLocale}
													selected={user().locale.startsWith("es")}
													label={
														<div class="flex w-full flex-row justify-between gap-4">
															Español
															<span class="hidden" data-flag>
																🇪🇸
															</span>
														</div>
													}
												/>
											</Picker>
											<Picker label={t("setting.measure-system.label")} name="measurementSystem">
												<Option
													value={"metrical" satisfies DatabaseUser["measurementSystem"]}
													selected={
														user().measurementSystem ===
														("metrical" satisfies DatabaseUser["measurementSystem"])
													}
													label={t("setting.measure-system.metric")}
												>
													<Text with="body-xs" tone="light">
														{t("setting.measure-system.metric-example")}
													</Text>
												</Option>
												<Option
													value={"imperial" satisfies DatabaseUser["measurementSystem"]}
													selected={
														user().measurementSystem ===
														("imperial" satisfies DatabaseUser["measurementSystem"])
													}
													label={t("setting.measure-system.imperial")}
												>
													<Text with="body-xs" tone="light">
														{t("setting.measure-system.imperial-example")}
													</Text>
												</Option>
											</Picker>
										</Fieldset>
										<Button type="submit" pending={profileSubmission.pending}>
											{t("cta.save-profile")}
										</Button>
									</Form>
								</Card>
							)}
						</Show>
					</Suspense>
				</section>
			</div>
		</>
	);
}
