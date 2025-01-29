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
				<h4>Mouse - Rotation</h4>
			</div>
		</div>
	);
}
