import { Wireframe } from "@/components/ui/wireframe";

export function BlogWireframe({ children }: { children: React.ReactNode }) {
	return (
		<Wireframe
			config={{
				corners: {
					bottomLeft: "navbar",
					bottomRight: "navbar",
					topLeft: "navbar",
					topRight: "navbar",
					responsive: {
						left: "navbar",
						right: "navbar",
					},
				},
				cssVariables: {
					// STICKY NAV
					"--sticky-nav-height": 12,

					// TOP NAV
					"--top-nav-height": 16,

					// BOTTOM NAV
					"--bottom-nav-height": 8,

					// LEFT SIDEBAR
					"--left-sidebar-width-collapsed": 16,
					"--left-sidebar-width-expanded": 52,

					// RIGHT SIDEBAR
					"--right-sidebar-width-expanded": 52,
					"--right-sidebar-width-collapsed": 16,
				},
			}}
		>
			{children}
		</Wireframe>
	);
}
