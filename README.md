# Wireframe

The `<Wireframe/>` component ensures that all elements are positioned correctly in the viewport, based on the components present on each route. If `/new` has a left sidebar and a top navbar, the content will be moved down and right, using margins, to prevent the positioned components from covering the content. 

## Installation

1. Add the [`wireframe.tsx`](/src/components/ui/wireframe/index.tsx) file to your shadcn ui folder `@/components/ui`

2. Set the desired dimensions and offsets for your wireframe in the style tag of the `<Wireframe>` component.

```tsx
	"--sticky-nav-height": "calc(var(--spacing) * 12)",
	"--sticky-nav-offset": "calc(var(--spacing) * 0)",
	"--top-nav-height": "calc(var(--spacing) * 16)",
	"--top-nav-offset": "calc(var(--spacing) * 0)",
	"--bottom-nav-height": "calc(var(--spacing) * 8)",
	"--bottom-nav-offset": "calc(var(--spacing) * 0)",
	"--left-sidebar-width-collapsed": "calc(var(--spacing) * 16)",
	"--right-sidebar-width-collapsed": "calc(var(--spacing) * 16)",
	"--left-sidebar-width-expanded": "calc(var(--spacing) * 52)",
	"--right-sidebar-width-expanded": "calc(var(--spacing) * 52)",
```

## Usage

1. Add the `<Wireframe/>` component to your layout. 

```tsx layout.tsx
import { Wireframe } from "@/components/ui/wireframe";

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body>
				<Wireframe>{children}</Wireframe>
			</body>
		</html>
	);
}
```

2. Create a `<Wireframe/>` component. Current options `<WireframeNav/>`, `<WireframeStickyNav/>`, `<WireframeResponsiveNav/>`,`<WireframeCollapsableSidebar/>`.

```tsx /components/wireframe/top-nav.tsx
import { WireframeNav } from "@/components/ui/wireframe";

export function TopNav() {
	return (
		<WireframeNav>
			<div className="flex h-full w-full items-center justify-between">
				<div>Logo</div>
			</div>
		</WireframeNav>
	);
}
```

3. Wrap your content using the `<WireframeContent/>` component and use your `<Wireframe/>` components.

```tsx page.tsx
import { WireframeContent } from "@/components/ui/wireframe";
import { TopNav } from "@/components/wireframe/top-nav";

export default function Page() {
	return (
		<WireframeContent>
			<TopNav />
		</WireframeContent>
	);
}
```

## Using multiple `<Wireframe/>`s

The `<Wireframe/>` components are self contained so you can create multiple wireframes with differrent variables. You may define them using this naming convention `{name}-wireframe.tsx`. This is useful, if for example, you want your navbar to have an offset in the landing page, and also have another navbar in your dashboard page with no offset.

```tsx
// Home page.tsx
import { Wireframe } from "@/components/ui/home-wireframe";

export default function Page() {
	return (
		<Wireframe>{children}</Wireframe>
	);
}
```

```tsx layout.tsx
// Dashboard layout.tsx
import { Wireframe } from "@/components/ui/dashboard-wireframe";

export default function Layout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<Wireframe>{children}</Wireframe>
	);
}
```

Warning: If you have multiple `<Wireframe/>`s, you can't return a `<Wireframe/>` at the root layout because if will be in conflict with other `<Wireframe/>`s.