export default function Tutorial() {
	return (
		<div
			style={{
				color: "rgb(0, 0, 0, 0.8)",
			}}
		>
			<div
				style={{
					position: "absolute",
					top: "10px",
					left: "10px",
				}}
			>
				<h5>W/up - Forward</h5>
				<h5>S/down - Back</h5>
				<h5>A/left - Left</h5>
				<h5>D/right - Right</h5>
				<h5>Shift - Sprint</h5>
				<h5>Space - Jump</h5>
			</div>
			<div style={{ position: "absolute", top: "10px", left: "10em" }}>
				<h5>For rotation, click once then move cursor</h5>
				<h5>To exit, press "Esc"</h5>
			</div>
		</div>
	);
}
