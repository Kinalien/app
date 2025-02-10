import type { ComponentProps } from "solid-js";

import { Button } from "./";

type ButtonProps = ComponentProps<typeof Button>;

export const Primary = (args: ButtonProps) => <Button {...args}>Click me</Button>;
