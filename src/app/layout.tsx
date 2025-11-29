import { Shell } from "@/components/shell";
import "@/styles/globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "App Shell",
	description: "App Shell",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html className="overscroll-none" lang="en" suppressHydrationWarning>
			<body>
				<Shell>{children}</Shell>
			</body>
		</html>
	);
}
