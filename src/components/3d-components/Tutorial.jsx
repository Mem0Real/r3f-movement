export default function Tutorial({ closeTutorial }) {
	return (
		<div className="absolute top-4 left-4 bg-neutral-400/80 min-w-64 rounded-2xl py-6 px-4">
			<div className="relative flex justify-around gap-8">
				<button
					className="absolute -top-6 -right-2 px-2 rounded border cursor-pointer active:bg-neutral-200"
					onClick={closeTutorial}
				>
					X
				</button>
				<div className="flex flex-col gap-4">
					<h1>W/up - Forward</h1>
					<h1>S/down - Back</h1>
					<h1>A/left - Left</h1>
					<h1>D/right - Right</h1>
					<h1>Shift - Sprint</h1>
					<h1>Space - Jump</h1>
				</div>
				<div className="self-start">
					<h1>For rotation, click once then move cursor</h1>
					<h1>To exit, press "Esc"</h1>
				</div>
			</div>
		</div>
	);
}
