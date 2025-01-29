export default function Tutorial() {
	return (
		<div style={{ color: "rgb(0, 0, 0, 0.85)" }}>
			<div
				style={{
					position: "absolute",
					top: "10px",
					left: "10px",
				}}
			>
				<h4>W - Forward</h4>
				<h4>A - Left</h4>
				<h4>S - Back</h4>
				<h4>D - Right</h4>
			</div>
			<div style={{ position: "absolute", top: "10px", left: "10em" }}>
				<h4>For rotation, click once then move cursor</h4>
				<h4>To exit, press "Esc"</h4>
			</div>
		</div>
	);
}
