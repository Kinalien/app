import { Toast, Toaster, toast } from ".";
import { Button } from "../button";
import { Text } from "../text";

export const ToastExample = () => {
	return (
		<>
			<fieldset>
				<Text as="legend" with="overline">
					What to do in life?
				</Text>
				<div class="mt-4 flex flex-row gap-4">
					<Button
						tone="secondary"
						onClick={async () => {
							toast(() => (
								<Toast class="max-w-80" heading={<Text tone="success">Succeeded</Text>}>
									<Text with="body-sm">The success has suddenly come</Text>
								</Toast>
							));
						}}
					>
						Succeed
					</Button>
					<Button
						tone="destructive"
						onClick={async () => {
							toast(() => (
								<Toast class="max-w-80" tone="failure" heading={<Text tone="danger">Failed</Text>}>
									<Text with="body-sm">You have successfully failed.</Text>
								</Toast>
							));
						}}
					>
						Fail
					</Button>
				</div>
			</fieldset>
			<Toaster label="Notifications" />
		</>
	);
};
