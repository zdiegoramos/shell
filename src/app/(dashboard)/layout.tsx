import { DashboardWireframe } from "@/components/wireframe/dashboard-wireframe";
import "@/styles/globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "App Wireframe",
	description: "App Wireframe",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function Layout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return <DashboardWireframe>{children}</DashboardWireframe>;
}
