import type { Submission } from "@solidjs/router";

type SubmissionStub = {
	readonly input: undefined;
	readonly result: undefined;
	readonly error: undefined;
	readonly pending: undefined;
	readonly url: undefined;
	clear: () => void;
	retry: () => void;
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type SubmissionResult<S> = S extends Submission<any, infer U> ? U : never;

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type ValidationError<E = any> = {
	failureReason: "validation";
	errors: E;
};
export type GenericError = {
	failureReason: "other";
};

export type SubmissionError<R> = R extends "validation" ? ValidationError : GenericError;

export function isSubmissionFailure<
	const Reason extends "validation" | "other",
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const S extends Submission<any, any> | SubmissionStub,
>(submission: S, reason: Reason) {
	return !!(
		typeof submission.result === "object" &&
		submission.result !== null &&
		"failureReason" in submission.result &&
		submission.result.failureReason === reason
	);
}

export function isSubmissionValidationError<
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	S extends Submission<any, any> | SubmissionStub,
>(
	submission: S,
): submission is Exclude<S, "result"> &
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	(S extends Submission<any, infer U>
		? {
				result: U extends ValidationError<infer Errors> ? ValidationError<Errors> : never;
			}
		: never) {
	return isSubmissionFailure(submission, "validation");
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function pickSubmissionValidationErrors<S extends Submission<any, any> | SubmissionStub>(
	submission: S,
):
	| (Exclude<S, "result"> &
			(S extends Submission<infer _I, infer U>
				? {
						result: U extends ValidationError<infer Errors> ? ValidationError<Errors> : never;
					}
				: never))["result"]["errors"]
	| null {
	return isSubmissionValidationError(submission) ? submission.result.errors : null;
}

export function isSubmissionGenericError<
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	S extends Submission<any, any> | SubmissionStub,
>(
	submission: S,
): submission is Exclude<S, "result"> &
	(S extends Submission<infer _I, infer U>
		? {
				result: U extends GenericError ? GenericError : never;
			}
		: never) {
	return isSubmissionFailure(submission, "other");
}

export function isSubmissionSuccess<
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	S extends Submission<any, any> | SubmissionStub,
>(
	submission: S,
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
): submission is S & { result: Exclude<SubmissionResult<S>, { failureReason: any } | undefined> } {
	return (
		typeof submission.result === "object" &&
		submission.result !== null &&
		!("failureReason" in submission.result)
	);
}
