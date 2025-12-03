import { nanoid } from "nanoid";
import { WireframeStickyNav } from "@/components/ui/wireframe";
import { BottomNav } from "@/components/wireframe/bottom-nav";
import { SidebarStatic } from "@/components/wireframe/sidebar-static";

export default function Page() {
	return (
		<div className="bg-(image:--crossed-gradient) min-h-screen">
			<WireframeStickyNav className="bg-red-300">
				Nested Sticky Elements Demo
			</WireframeStickyNav>
			<SidebarStatic />
			<BottomNav />

			{/* Main Content */}
			<div className="mx-auto max-w-6xl p-4">
				<h1 className="mb-6 font-bold text-3xl">
					Nested Sticky Elements Example
				</h1>

				{/* Outer Scrollable Container */}
				<div className="h-[600px] overflow-y-auto rounded-lg border-4 border-blue-500 bg-white">
					{/* Level 1 Sticky Header - Sticks at top: 0 */}
					<div className="sticky top-0 z-30 border-blue-500 border-b-4 bg-blue-500 p-4 shadow-lg">
						<h2 className="font-bold text-2xl text-white">
							Level 1 Sticky Header (top: 0)
						</h2>
						<p className="text-blue-100 text-sm">
							This header sticks to the top of the scroll container
						</p>
					</div>

					<div className="p-6">
						<p className="mb-4 text-gray-700">
							Scroll down to see how nested sticky elements stack on top of each
							other. Each sticky element has a different top offset.
						</p>

						{/* Section 1 */}
						<div className="mb-8">
							{/* Level 2 Sticky Subheader - Sticks at top: 88px (below level 1) */}
							<div className="sticky top-[88px] z-20 mb-4 border-green-500 border-b-2 bg-green-500 p-3 shadow-md">
								<h3 className="font-bold text-white text-xl">
									Section 1: Level 2 Sticky (top: 88px)
								</h3>
								<p className="text-green-100 text-sm">
									Sticks below the main header
								</p>
							</div>

							{Array.from({ length: 10 }, (_, i) => (
								<p className="mb-3 text-gray-600" key={nanoid()}>
									Section 1, Paragraph {i + 1}: This content flows normally. As
									you scroll, watch how the sticky headers remain visible and
									stack on top of each other.
								</p>
							))}
						</div>

						{/* Section 2 with nested subsections */}
						<div className="mb-8">
							{/* Level 2 Sticky Subheader */}
							<div className="sticky top-[88px] z-20 mb-4 border-purple-500 border-b-2 bg-purple-500 p-3 shadow-md">
								<h3 className="font-bold text-white text-xl">
									Section 2: Level 2 Sticky (top: 88px)
								</h3>
								<p className="text-purple-100 text-sm">
									Contains nested Level 3 sticky elements
								</p>
							</div>

							{/* Subsection A */}
							<div className="mb-6">
								{/* Level 3 Sticky - Sticks at top: 148px (below level 2) */}
								<div className="sticky top-[148px] z-10 mb-3 border-orange-500 border-l-4 bg-orange-100 p-2 shadow">
									<h4 className="font-semibold text-orange-900">
										Subsection A: Level 3 Sticky (top: 148px)
									</h4>
								</div>

								{Array.from({ length: 8 }, (_, i) => (
									<p className="mb-2 text-gray-600 text-sm" key={nanoid()}>
										Subsection A, Line {i + 1}: Notice how this Level 3 sticky
										element sticks below both the Level 1 and Level 2 headers.
									</p>
								))}
							</div>

							{/* Subsection B */}
							<div className="mb-6">
								{/* Level 3 Sticky */}
								<div className="sticky top-[148px] z-10 mb-3 border-pink-500 border-l-4 bg-pink-100 p-2 shadow">
									<h4 className="font-semibold text-pink-900">
										Subsection B: Level 3 Sticky (top: 148px)
									</h4>
								</div>

								{Array.from({ length: 8 }, (_, i) => (
									<p className="mb-2 text-gray-600 text-sm" key={nanoid()}>
										Subsection B, Line {i + 1}: As you scroll, the Level 3
										sticky element gets replaced by the next one at the same
										level.
									</p>
								))}
							</div>

							{/* Subsection C */}
							<div className="mb-6">
								{/* Level 3 Sticky */}
								<div className="sticky top-[148px] z-10 mb-3 border-teal-500 border-l-4 bg-teal-100 p-2 shadow">
									<h4 className="font-semibold text-teal-900">
										Subsection C: Level 3 Sticky (top: 148px)
									</h4>
								</div>

								{Array.from({ length: 8 }, (_, i) => (
									<p className="mb-2 text-gray-600 text-sm" key={nanoid()}>
										Subsection C, Line {i + 1}: Multiple sticky elements at the
										same level create a dynamic header experience.
									</p>
								))}
							</div>
						</div>

						{/* Section 3 */}
						<div className="mb-8">
							{/* Level 2 Sticky Subheader */}
							<div className="sticky top-[88px] z-20 mb-4 border-indigo-500 border-b-2 bg-indigo-500 p-3 shadow-md">
								<h3 className="font-bold text-white text-xl">
									Section 3: Level 2 Sticky (top: 88px)
								</h3>
								<p className="text-indigo-100 text-sm">
									Another section with sticky behavior
								</p>
							</div>

							{Array.from({ length: 15 }, (_, i) => (
								<p className="mb-3 text-gray-600" key={nanoid()}>
									Section 3, Paragraph {i + 1}: The sticky positioning creates a
									natural hierarchy. Each level maintains its position relative
									to the scroll container.
								</p>
							))}
						</div>

						{/* Summary Section */}
						<div className="rounded-lg border-2 border-gray-300 bg-gray-50 p-6">
							<h3 className="mb-4 font-bold text-gray-900 text-xl">
								How Nested Sticky Elements Work
							</h3>
							<ul className="space-y-2 text-gray-700">
								<li className="flex items-start">
									<span className="mr-2 font-bold text-blue-500">Level 1:</span>
									<span>
										Uses <code className="rounded bg-blue-100 px-1">top-0</code>{" "}
										- Sticks at the very top (z-index: 30)
									</span>
								</li>
								<li className="flex items-start">
									<span className="mr-2 font-bold text-green-500">
										Level 2:
									</span>
									<span>
										Uses{" "}
										<code className="rounded bg-green-100 px-1">
											top-[88px]
										</code>{" "}
										- Sticks below Level 1 (z-index: 20)
									</span>
								</li>
								<li className="flex items-start">
									<span className="mr-2 font-bold text-orange-500">
										Level 3:
									</span>
									<span>
										Uses{" "}
										<code className="rounded bg-orange-100 px-1">
											top-[148px]
										</code>{" "}
										- Sticks below Level 2 (z-index: 10)
									</span>
								</li>
							</ul>
							<div className="mt-4 rounded border-yellow-500 border-l-4 bg-yellow-50 p-3">
								<p className="font-semibold text-sm text-yellow-900">
									Key Points:
								</p>
								<ul className="mt-2 ml-4 list-disc space-y-1 text-sm text-yellow-800">
									<li>
										Each sticky element needs{" "}
										<code className="rounded bg-yellow-100 px-1">
											position: sticky
										</code>
									</li>
									<li>
										The <code className="rounded bg-yellow-100 px-1">top</code>{" "}
										value determines where it sticks
									</li>
									<li>
										Use{" "}
										<code className="rounded bg-yellow-100 px-1">z-index</code>{" "}
										to control stacking order
									</li>
									<li>
										The parent container must have{" "}
										<code className="rounded bg-yellow-100 px-1">overflow</code>{" "}
										set
									</li>
									<li>
										Multiple sticky elements at the same level replace each
										other
									</li>
								</ul>
							</div>
						</div>

						{/* Extra content to enable scrolling */}
						<div className="mt-8">
							{Array.from({ length: 10 }, (_, i) => (
								<p className="mb-3 text-gray-600" key={nanoid()}>
									Additional content line {i + 1}: Keep scrolling to see the
									full effect of nested sticky positioning throughout the entire
									container.
								</p>
							))}
						</div>
					</div>
				</div>

				<p className="mt-4 text-center text-gray-600 text-sm">
					Scroll within the container above to see nested sticky elements in
					action. Notice how they stack and replace each other at different
					levels.
				</p>
			</div>
		</div>
	);
}
