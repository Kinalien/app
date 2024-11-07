// @refresh reload
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import { LanguageTagProvider } from "./i18n";

export default function App() {
	return (
		<Router
			root={(props) => (
				<LanguageTagProvider value="en">
					<a href="/">Index</a>
					<a href="/about">About</a>
					<Suspense>{props.children}</Suspense>
				</LanguageTagProvider>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
