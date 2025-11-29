"use client";

import { useEffect, useRef, useState } from "react";

export function LeftSideWithButton() {
	const [collapsed, setCollapsed] = useState(false);
	const sidebar = useRef<HTMLDivElement>(null);

	function handleClick() {
		setCollapsed(!collapsed);
	}

	useEffect(() => {
		if (!sidebar.current) return;

		if (collapsed) {
			sidebar.current.setAttribute("data-left-side-collapsed", "");
			sidebar.current.removeAttribute("data-left-side");
		} else {
			sidebar.current.setAttribute("data-left-side", "");
			sidebar.current.removeAttribute("data-left-side-collapsed");
		}
	}, [collapsed]);

	return (
		<div
			className="fixed inset-x-0 top-0 z-50 mt-[env(safe-area-inset-top)] flex h-full justify-center border-r bg-transparent"
			data-left-side
			ref={sidebar}
		>
			<div className="flex h-full w-full items-center justify-between">
				<button onClick={handleClick} type="button">
					Click me
				</button>
			</div>
		</div>
	);
}
