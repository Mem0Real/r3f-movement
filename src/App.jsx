import { Canvas } from "@react-three/fiber";
import { ZoomExperience } from "./components/3d-components/ZoomExperience";
import { GizmoHelper, GizmoViewport } from "@react-three/drei";
import { useZus } from "./utils/store";
import MyScene from "./components/3d-components/MyScene";

function App() {
	const { overlayOpacity, model } = useZus();
	return (
		// <>
		// 	<div
		// 		className="w-screen h-screen bg-white absolute top-0 left-0 z-50 pointer-events-none"
		// 		style={{ opacity: overlayOpacity }}
		// 	/>
		// 	<Canvas shadows camera={{ position: [0, 3.5, 12], fov: 45 }}>
		// 		<color attach="background" args={["#333"]} />
		// 		{model === "A" ? <ZoomExperience /> : <MyScene />}
		// 	</Canvas>
		// </>
		<MyScene />
	);
}

export default App;
