import { Text } from "../text";

import { Option, Picker } from ".";

export const SimplePicker = () => {
	return (
		<Picker label="Change measurements system">
			<Option label="Imperial">
				<Text with="body-xs" tone="light">
					54lbs, 7.2in
				</Text>
			</Option>
			<Option label="Metric">
				<Text with="body-xs" tone="light">
					24kg, 18cm
				</Text>
			</Option>
		</Picker>
	);
};
