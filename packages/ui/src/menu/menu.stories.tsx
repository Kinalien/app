import { Avatar } from "../avatar";
import { Button } from "../button";

import { Menu, MenuItem } from ".";

export const SimpleMenu = () => {
	return (
		<>
			<Button popoverTarget="menu" variant="ghost" icon>
				<Avatar name="John Doe" avatarUrl={null} />
			</Button>
			<Menu id="menu">
				<MenuItem>Account</MenuItem>
				<MenuItem>Install for offline</MenuItem>
				<MenuItem>Log Out</MenuItem>
			</Menu>
		</>
	);
};

export const WithoutAutoClosingOnItemClick = () => {
	const nope = (event: MouseEvent) => event.preventDefault();
	return (
		<>
			<Button popoverTarget="menu" variant="ghost" icon>
				<Avatar name="John Doe" avatarUrl={null} />
			</Button>
			<Menu id="menu">
				<MenuItem onClick={nope}>Account</MenuItem>
				<MenuItem onClick={nope}>Install for offline</MenuItem>
				<MenuItem onClick={nope}>Log Out</MenuItem>
			</Menu>
		</>
	);
};
