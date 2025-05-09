import { Button, Drawer, Form, Icon, Text, TextField, Toast, toast } from "@alien/ui";
import { createAsync, useAction, useSubmission } from "@solidjs/router";
import { type ComponentProps, Show, createMemo } from "solid-js";

import { updatePetWeight } from "~/server/api/pet";
import { getUser } from "~/server/api/user";
import type { DatabasePet } from "~/server/db/schema";
import { createTranslator, getLocale } from "~/server/i18n";

import { FormErrorMessage } from "./form-error-message";
import { isSubmissionGenericError, pickSubmissionValidationErrors } from "./utils/submission";

const petSpeciesToMetricMeasurement: {
	metrical: Record<DatabasePet["species"], "kilogram" | "gram">;
	imperial: Record<DatabasePet["species"], "pound" | "ounce">;
} = {
	metrical: {
		dog: "kilogram",
		cat: "kilogram",
		bird: "gram",
		rabbit: "gram",
		rodent: "gram",
		horse: "kilogram",
	},
	imperial: {
		dog: "pound",
		cat: "pound",
		bird: "ounce",
		rabbit: "ounce",
		rodent: "ounce",
		horse: "pound",
	},
};

interface AddWeightFormProps {
	id: string;
	pet: { id: string; name: string; species: DatabasePet["species"] };
	onDismiss?: () => void;
	/**
	 * ID of the anchor element when nested.
	 * See https://developer.mozilla.org/en-US/docs/Web/API/Popover_API/Using#nested_popovers
	 */
	anchor?: string;
	placement?: ComponentProps<typeof Drawer>["placement"];
}

const AddWeightForm = (props: AddWeightFormProps) => {
	const t = createTranslator("pets");
	const locale = createAsync(() => getLocale());
	const user = createAsync(() => getUser());
	const weightSubmission = useSubmission(updatePetWeight);
	const submitWeightAction = useAction(updatePetWeight);

	const localisedUnit = createMemo(() => {
		let unit = "kilogram";
		if (user()?.measurementSystem && props.pet.species) {
			unit = petSpeciesToMetricMeasurement[user()?.measurementSystem!][props.pet.species];
		}
		return (
			new Intl.NumberFormat(locale()?.baseName, {
				style: "unit",
				unit,
			})
				.format(0)
				// 0 kgs -> kgs
				.split(" ")[1]
		);
	});

	return (
		<Drawer
			id={props.id}
			aria-labelledby={`${props.id}-drawer`}
			placement={props.placement || "top-to-bottom left-to-left"}
			class="sm:w-[320px]"
		>
			{(open) => (
				<Show when={open()}>
					<Show when={isSubmissionGenericError(weightSubmission)}>
						<FormErrorMessage class="mb-3" />
					</Show>
					<Form
						class="flex flex-col gap-6 sm:max-w-[360px]"
						action={updatePetWeight}
						validationErrors={pickSubmissionValidationErrors(weightSubmission)}
						onSubmit={async (e) => {
							const res = await submitWeightAction(new FormData(e.currentTarget));
							if ("pet" in res) {
								toast(() => <Toast>{t("edit.update-success")}</Toast>);
								props.onDismiss?.();
							} else if (res.failureReason === "other") {
								toast(() => <Toast tone="failure">{t("edit.update-failure")}</Toast>);
							}
						}}
					>
						<input type="hidden" name="petId" value={props.pet.id} />
						<div class="flex flex-row gap-4">
							<Text with="label" class="flex items-center gap-2" id={`${props.id}-drawer`}>
								<span class="rounded-full bg-on-surface/5 p-3">
									<Icon use="scales" size="md" />
								</span>
								{t("animal-add-weight.label", { name: props.pet.name })}
							</Text>
						</div>
						<TextField
							name="weight"
							type="number"
							step="0.01"
							min="0"
							max="9999"
							label={t("animal-shortcut.weight")}
							class="flex-[2]"
							suffix={localisedUnit()}
						/>
						<div class="grid gap-2 sm:flex sm:self-end">
							<Show when={props.onDismiss}>
								<Button
									variant="ghost"
									popoverTargetAction="hide"
									popoverTarget={props.id}
									class="px-6"
									onClick={props.onDismiss}
								>
									{t("animal.drawer.cancel")}
								</Button>
							</Show>
							<Button
								type="submit"
								class="px-6"
								pending={weightSubmission.pending}
								popoverTargetAction="hide"
								popoverTarget={props.id}
							>
								{t("animal.drawer.save")}
							</Button>
						</div>
					</Form>
				</Show>
			)}
		</Drawer>
	);
};

export default AddWeightForm;
